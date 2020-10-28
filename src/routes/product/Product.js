import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Breakpoint } from "react-socks";
import { CSSTransition } from "react-transition-group";

// Import graphql operations
import { PRODUCT_QUERY } from "components/graphql/query";

// Import components
import { LogoLoader } from "components/loader";
import { ErrorToast } from "components/toast";
import ProductDataContext from "./ProductDataContext";
import { ProductMobile, ProductDesktop } from "./containers";

// Import styles
import "./styles.scss";

const Product = ({ slug }) => {
  // Split slug into array
  let slugArr = slug.split("-");

  // Get last array item (product ID)
  let id = slugArr[slugArr.length - 1];

  // Product query
  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: {
      storeUsername: process.env.GATSBY_STORE_USERNAME,
      id,
    },
  });

  // Loading state
  if (loading) {
    return <LogoLoader />;
  }

  // Error state
  if (error) {
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  return (
    <ProductDataContext.Provider value={{ ...data.product }}>
      <CSSTransition
        in={true}
        appear={true}
        mountOnEnter={true}
        unmountOnExit={true}
        classNames={"fadeUp"}
        timeout={300}
      >
        <>
          {/* Mobile Product page */}
          <Breakpoint mobile only>
            <ProductMobile />
          </Breakpoint>

          {/* Desktop Product page */}
          <Breakpoint tablet up>
            <ProductDesktop />
          </Breakpoint>
        </>
      </CSSTransition>
    </ProductDataContext.Provider>
  );
};

export default Product;
