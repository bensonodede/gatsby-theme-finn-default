import React from "react";
import Helmet from "react-helmet";
import { useQuery } from "@apollo/react-hooks";

// Import components
import { HomeHeader, HomeList, HomeFooter } from "./containers";
import { PageLoader } from "../../loader";
import { ErrorState } from "../../pageState";

// Import graphql operation
import { PRODUCTS_FEED_QUERY } from "../../graphql/query";

// Import styles
import "./styles.scss";

const Home = () => {
  const { loading, error, data, fetchMore } = useQuery(PRODUCTS_FEED_QUERY, {
    variables: {
      storeUsername: process.env.GATSBY_STORE_USERNAME,
      first: 8,
      skip: 0,
      orderBy: "updatedAt_DESC"
    }
  });

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <ErrorState />;
  }

  return (
    <>
      {/* Page title */}
      <Helmet title={process.env.GATSBY_STORE_NAME} defer={false} />

      <div className="home">
        {/* Home header */}
        <HomeHeader />

        {/* Home list */}
        <HomeList data={data} fetchMore={fetchMore} loading={loading} />

        {/* Home footer */}
        <HomeFooter />
      </div>
    </>
  );
};

export default Home;
