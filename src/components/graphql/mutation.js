import gql from "graphql-tag";

// Create an order
const CREATE_ORDER = gql`
  mutation CreateOrder(
    $buyerNum: String!
    $storeUsername: String!
    $productId: String!
    $price: Float!
  ) {
    createOrder(
      buyerNum: $buyerNum
      storeUsername: $storeUsername
      productId: $productId
      price: $price
    ) {
      id
    }
  }
`;

export { CREATE_ORDER };
