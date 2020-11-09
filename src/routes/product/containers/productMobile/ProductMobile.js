import React, { useContext, useState, useEffect } from "react";
import Helmet from "react-helmet";

// Import Product data context
import ProductDataContext from "../../ProductDataContext";

// Import components
import Bag from "components/bag";
import { useModal } from "components/modal";
import { SuccessToast } from "components/toast";
import ProductMobileImage from "./productMobileImage";
import ProductMobileDescription from "./productMobileDescription";
import ProductMobilePolicy from "./productMobilePolicy";
import ProductMobileFooter from "./productMobileFooter";
import ProductOptionsModal from "../productOptionsModal";

// Import functions
import { getTotalQuantity } from "../utils";
import Navbar from "components/navbar";

const ProductMobile = () => {
  // Destructure product data
  const { quantity, variants, name } = useContext(ProductDataContext);

  // Manage modal and quantity state
  const [isOpen, toggleModal] = useModal(false);
  const [totalQuantity, setTotalQuantity] = useState(quantity);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    // If variants exist, Set total variants quantity
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
            {/* Product navbar */}
            <div className="column is-10-mobile is-10-tablet is-12-desktop">
              <Navbar />
            </div>

            {/* Product mobile image */}
            <ProductMobileImage />

            <div className="column is-10-mobile">
              {/* Product mobile description */}
              <ProductMobileDescription />

              {/* Product mobile policy */}
              <ProductMobilePolicy />
            </div>
          </div>

          {/* Product mobile footer */}
          <ProductMobileFooter
            totalQuantity={totalQuantity}
            toggleOptionsModal={toggleModal}
          />

          {/* Product options */}
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

export default ProductMobile;
