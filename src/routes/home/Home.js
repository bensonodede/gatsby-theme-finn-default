import React from "react";
import Helmet from "react-helmet";
import { useQuery } from "@apollo/react-hooks";
import { CSSTransition } from "react-transition-group";

// Import components
import Bag from "components/bag";
import { LogoLoader } from "components/loader";
import { ErrorState } from "components/pageState";
import { HomeList, HomeFooter } from "./containers";

// Import graphql operation
import {
  PRODUCTS_BY_STORE_COUNT_QUERY,
  PRODUCTS_FEED_QUERY,
} from "components/graphql/query";

// Import styles
import "./styles.scss";

const Home = ({ pageNumber }) => {
  // Items per page
  const ITEMS_PER_PAGE = 20;

  // Query for NUMBER of products
  const {
    loading: countLoading,
    error: countError,
    data: countData,
  } = useQuery(PRODUCTS_BY_STORE_COUNT_QUERY, {
    variables: {
      storeUsername: process.env.GATSBY_STORE_USERNAME,
    },
    fetchPolicy: "cache-and-network",
  });

  // Skip items by number of items loaded in previous pages
  let skip = pageNumber ? (parseInt(pageNumber) - 1) * ITEMS_PER_PAGE : 0;

  // Query for products
  const { loading, error, data } = useQuery(PRODUCTS_FEED_QUERY, {
    variables: {
      storeUsername: process.env.GATSBY_STORE_USERNAME,
      first: ITEMS_PER_PAGE,
      // Skip items by number of items loaded in previous pages
      skip,
      orderBy: "updatedAt_DESC",
    },
    fetchPolicy: "cache-and-network",
  });

  // Loading state
  if (countLoading || loading) {
    return <LogoLoader />;
  }

  // Error state
  if (countError || error) {
    return <ErrorState />;
  }

  // Get item count
  let { count } = countData.productsByStoreCount;

  // Divide total item number by items per page to get total number of pages
  // Round up result to nearest integer
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  return (
    <>
      {/* Page title */}
      <Helmet title={process.env.GATSBY_STORE_NAME} defer={false} />

      <CSSTransition
        in={true}
        appear={true}
        mountOnEnter={true}
        unmountOnExit={true}
        classNames={"fadeUp"}
        timeout={300}
      >
        <>
          {/* Bag */}
          <Bag />

          <div className="home">
            {/* Body */}
            <HomeList
              itemCount={count}
              itemSkipped={skip}
              data={data}
              pageCount={pageCount}
              pageNumber={pageNumber}
            />

            {/* Footer */}
            <HomeFooter />
          </div>
        </>
      </CSSTransition>
    </>
  );
};

export default Home;
