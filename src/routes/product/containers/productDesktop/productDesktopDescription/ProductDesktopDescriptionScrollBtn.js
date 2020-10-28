import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";

const ProductDesktopDescriptionScrollBtn = ({ descriptionRef }) => {
  return (
    <button
      type={"button"}
      onClick={() => {
        // Scroll description into view
        descriptionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
      className="product-desktop__description-scroll-down"
    >
      <div>DETAILS</div>
      {/* Button arrow-down icon */}
      <Icon
        icon={ic_keyboard_arrow_down}
        size={"100%"}
        className="product-desktop__description-scroll-down-icon"
      />
    </button>
  );
};

export default ProductDesktopDescriptionScrollBtn;
