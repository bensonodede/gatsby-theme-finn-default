import React from "react";
import Helmet from "react-helmet";
import { useQuery } from "@apollo/react-hooks";

// Import graphql operations
import { PRODUCT_HUMANID_QUERY } from "components/graphql/query";

// Import components
import { PageLoader } from "components/loader";
import { ErrorToast } from "components/toast";
import { ProductDetails, ProductFooter } from "./containers";

// Import styles
import "./styles.scss";

const Product = ({ humanId }) => {
  // Product query
  const { loading, error, data } = useQuery(PRODUCT_HUMANID_QUERY, {
    variables: {
      storeUsername: process.env.GATSBY_STORE_USERNAME,
      humanId
    }
  });

  // Loading state
  if (loading) {
    return <PageLoader />;
  }

  // Error state
  if (error) {
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  let { name } = data.productByHumanId;

  return (
    <>
      {/* Page title */}
      <Helmet
        title={`${name} - ${process.env.GATSBY_STORE_NAME}`}
        defer={false}
      />

      {/* Product */}
      <div className="product">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            {/* Product details */}
            <ProductDetails {...data.productByHumanId} />

            {/* Product footer */}
            <ProductFooter {...data.productByHumanId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
