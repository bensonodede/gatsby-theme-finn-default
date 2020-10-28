import gql from "graphql-tag";

// Get store details
const STORE_POLICY_QUERY = gql`
  query StoreQuery($storeUsername: String!) {
    store(storeUsername: $storeUsername) {
      id
      policyReturns
      policyDelivery
    }
  }
`;

// Get store delivery query
const STORE_DELIVERY_QUERY = gql`
  query StoreQuery($storeUsername: String!) {
    store(storeUsername: $storeUsername) {
      id
      storeLocation {
        lat
        lng
      }
      costPerKm
      minDeliveryFee
    }
  }
`;

// Get number of products by a store
const PRODUCTS_BY_STORE_COUNT_QUERY = gql`
  query ProductsByStoreCountQuery($storeUsername: String!) {
    productsByStoreCount(storeUsername: $storeUsername) {
      count
    }
  }
`;

// Get all products from a store
const PRODUCTS_FEED_QUERY = gql`
  query ProductsByStoreQuery(
    $storeUsername: String!
    $first: Int
    $skip: Int
    $orderBy: ProductsOrderByInput
  ) {
    productsByStore(
      storeUsername: $storeUsername
      first: $first
      skip: $skip
      orderBy: $orderBy
    ) @connection(key: "productsByStore", filter: ["type"]) {
      id
      name
      price
      imgUrls
    }
  }
`;

// Get a product by ID
const PRODUCT_QUERY = gql`
  query ProductQuery($id: String!) {
    product(id: $id) {
      id
      name
      price
      description
      imgUrls
      quantity
      options {
        id
        title
        tags
      }
      variants {
        id
        combinations
        label
        price
        publish
        quantity
      }
    }
  }
`;

// Payment poll query
const PAYMENT_POLL_QUERY = gql`
  query PaymentPollQuery($id: String!) {
    paymentPoll(id: $id) {
      id
      orderId
      paymentStatus
      orderStatus
      buyer {
        id
        phoneNum
      }
      store {
        id
        phoneNumber
        storeUsername
      }
    }
  }
`;

export {
  STORE_POLICY_QUERY,
  STORE_DELIVERY_QUERY,
  PRODUCTS_BY_STORE_COUNT_QUERY,
  PRODUCTS_FEED_QUERY,
  PRODUCT_QUERY,
  PAYMENT_POLL_QUERY,
};
