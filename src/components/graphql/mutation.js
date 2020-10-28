import gql from "graphql-tag";

// Create an order
const CREATE_ORDER = gql`
  mutation CreateOrder(
    $productTotal: Int!
    $deliveryFee: Int!
    $deliveryLocation: LocationInput!
    $phoneNum: String!
    $orderProducts: [OrderProductsInput!]!
    $storeUsername: String!
  ) {
    createOrder(
      productTotal: $productTotal
      deliveryFee: $deliveryFee
      deliveryLocation: $deliveryLocation
      phoneNum: $phoneNum
      orderProducts: $orderProducts
      storeUsername: $storeUsername
    ) {
      id
    }
  }
`;

export { CREATE_ORDER };
