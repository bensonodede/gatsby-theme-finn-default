import React, { useState, useEffect, useContext } from "react";
import Helmet from "react-helmet";

// Import Product data context
import ProductDataContext from "../../ProductDataContext";

// Import components
import Bag from "components/bag";
import Navbar from "components/navbar";
import { useModal } from "components/modal";
import { SuccessToast } from "components/toast";
import ProductDesktopImage from "./productDesktopImage";
import ProductDesktopContent from "./productDesktopContent";
import ProductDesktopDescription from "./productDesktopDescription";
import ProductDesktopPolicy from "./productDesktopPolicy";
import ProductOptionsModal from "../productOptionsModal";

// Import functions
import { getTotalQuantity } from "../utils";

// Import styles
import "./styles.scss";

const ProductDesktop = () => {
  // Destructure product data
  const { quantity, variants, name } = useContext(ProductDataContext);

  // Manage modal and quantity state
  const [totalQuantity, setTotalQuantity] = useState(quantity);
  const [isOpen, toggleModal] = useModal(false);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    // Set total variants quantity
    if (variants[0]) {
      setTotalQuantity(getTotalQuantity(variants));
    }
  }, []);

  return (
    <>
      {/* Page title */}
      <Helmet
        title={`${name} · ${process.env.GATSBY_STORE_NAME}`}
        defer={false}
      />

      {/* Bag */}
      <Bag />

      {/* Product page */}
      <div className="product">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-tablet is-11-desktop">
              {/* Navbar */}
              <Navbar />

              {/* Product desktop hero container */}
              <div className="product-desktop__hero">
                {/* Product desktop image */}
                <ProductDesktopImage />

                {/* Product desktop name */}
                <ProductDesktopContent
                  totalQuantity={totalQuantity}
                  toggleOptionsModal={toggleModal}
                />
              </div>
            </div>

            <div className="column is-9-tablet is-8-desktop">
              {/* Product desktop description */}
              <ProductDesktopDescription />

              {/* Product desktop policy */}
              <ProductDesktopPolicy />
            </div>
          </div>

          {/* Product options modal */}
          <ProductOptionsModal
            isOpen={isOpen}
            toggleModal={toggleModal}
            setToastOpen={setToastOpen}
          />

          {/* Product added toast */}
          {toastOpen && (
            <SuccessToast
              text={"Item added to bag"}
              emoji={"✨"}
              onClose={() => setToastOpen(false)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDesktop;
