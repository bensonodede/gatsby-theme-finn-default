import React from "react";
import Masonry from "react-masonry-css";

// Import components
import Navbar from "components/navbar";
import HomeItem from "./HomeItem";
import HomePagination from "./HomePagination";

const HomeList = ({ itemCount, itemSkipped, data, pageCount, pageNumber }) => {
  const breakpointColumnsObj = {
    default: 5,
    1008: 4,
    768: 3,
    500: 2,
  };

  return (
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        {/* Navbar */}
        <div className="column is-10-mobile is-10-tablet is-11-desktop">
          <Navbar />
        </div>

        {/* Home grid */}
        <div className="column is-11-mobile is-10-tablet is-11-desktop">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="home-grid"
            columnClassName="home-grid__column"
          >
            {data.productsByStore.map((item) => (
              <HomeItem key={item.id} item={item} />
            ))}
          </Masonry>

          {/* Pagination */}
          <HomePagination
            itemCount={itemCount}
            itemSkipped={itemSkipped}
            itemShownCount={data.productsByStore.length}
            pageCount={pageCount}
            pageNumber={pageNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeList;
