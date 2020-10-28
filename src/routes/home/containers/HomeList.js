import React from "react";

// Import components
import Navbar from "components/navbar";
import HomeItem from "./HomeItem";
import HomePagination from "./HomePagination";

const HomeList = ({ itemCount, itemSkipped, data, pageCount, pageNumber }) => (
  <div className="container">
    <div className="columns is-mobile is-multiline is-centered">
      <div className="column is-10-mobile is-10-tablet is-12-desktop">
        {/* Navbar */}
        <Navbar />

        <div className="home-list">
          {/* Home grid */}
          <div className="home-grid">
            {data.productsByStore.map((item) => (
              <HomeItem key={item.id} item={item} />
            ))}
          </div>

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
  </div>
);

export default HomeList;
