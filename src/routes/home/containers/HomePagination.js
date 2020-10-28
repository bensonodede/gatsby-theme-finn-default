import React from "react";
import { navigate } from "@reach/router";

// Import components
import Pagination from "components/pagination";

const HomePagination = ({
  itemCount,
  itemSkipped,
  itemShownCount,
  pageCount,
  pageNumber,
}) => (
  <div className="home-pagination">
    <Pagination
      itemCount={itemCount}
      itemSkipped={itemSkipped}
      itemShownCount={itemShownCount}
      // If page number doesn't exist, means current page is home page(page 1) OR if on page 1
      isPrevDisabled={!pageNumber || parseInt(pageNumber) === 1}
      // If on home page and pagecount is one; disable btn
      // OR If Current page is equal to or more than total number of pages i.e last page
      isNextDisabled={
        (!pageNumber && pageCount === 1) || parseInt(pageNumber) >= pageCount
      }
      prevFunction={() => {
        // If current page is 2, navigate home
        if (parseInt(pageNumber) === 2) {
          navigate(`/`);
        }
        // Otherwise, decrement page number by 1
        else {
          navigate(`/page/${parseInt(pageNumber) - 1}`);
        }
      }}
      nextFunction={() => {
        // If no page number(on home page), naviagate to page 2
        if (!pageNumber) {
          navigate(`/page/2`);
        }
        // Otherwise, increment page number by 1
        else {
          navigate(`/page/${parseInt(pageNumber) + 1}`);
        }
      }}
    />
  </div>
);

export default HomePagination;
