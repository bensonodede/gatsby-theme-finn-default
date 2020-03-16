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
      humanId
      name
      price
      imgUrl
      updatedAt
    }
  }
`;

// Get a product by humanId
const PRODUCT_HUMANID_QUERY = gql`
  query ProdcutByHumanIdQuery($storeUsername: String!, $humanId: String!) {
    productByHumanId(storeUsername: $storeUsername, humanId: $humanId) {
      id
      humanId
      name
      price
      imgUrl
      description
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
  PRODUCTS_FEED_QUERY,
  PRODUCT_HUMANID_QUERY,
  PAYMENT_POLL_QUERY
};
