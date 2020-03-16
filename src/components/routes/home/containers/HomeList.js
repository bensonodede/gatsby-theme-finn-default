import React, { useState } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

// Import components
import HomeItem from "./HomeItem";
import Button from "components/button";
import { SuccessToast } from "components/toast";

// Import functions
import loadMoreProducts from "../loadMoreProducts";

const HomeList = ({ data, fetchMore, loading }) => {
  // More items state
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Show button condition
  let showButton = hasMore && data.productsByStore.length < 8;

  return (
    <div className="home-list">
      <div className="container">
        <div className="columns is-multiline is-mobile is-centered">
          <div className="column is-10-touch is-12-desktop ">
            {/* Home grid */}
            <Grid>
              <Row>
                {data.productsByStore.map(item => (
                  <Col
                    key={item.id}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    className={"home-column"}
                  >
                    <HomeItem imgUrl={item.imgUrl} item={item} />
                  </Col>
                ))}
              </Row>
            </Grid>
          </div>

          {/* Load more button */}
          {!showButton && (
            <div className="column is-10-mobile is-3-tablet is-3-desktop ">
              <Button
                isFullWidth={true}
                isOutline={true}
                isLoading={isLoadingMore}
                onClick={() => {
                  loadMoreProducts({
                    storeUsername: process.env.GATSBY_STORE_USERNAME,
                    fetchMore,
                    data,
                    setHasMore,
                    setIsLoadingMore
                  });
                }}
              >
                Load more
              </Button>
            </div>
          )}

          {/* Show end of list toast */}
          {!hasMore && (
            <SuccessToast
              timing={3500}
              text={"That's all folks!"}
              emoji={"🤗"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeList;
