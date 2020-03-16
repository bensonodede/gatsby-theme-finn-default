import gql from "graphql-tag";

// Create an order
const CREATE_ORDER = gql`
  mutation CreateOrder(
    $buyerNum: String!
    $storeUsername: String!
    $productID: String!
    $price: Float!
  ) {
    createOrder(
      buyerNum: $buyerNum
      storeUsername: $storeUsername
      productID: $productID
      price: $price
    ) {
      id
      shortCode
      password
      timestamp
      checkoutRequestID
    }
  }
`;

export { CREATE_ORDER };
