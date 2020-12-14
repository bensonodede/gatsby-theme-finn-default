import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";

// Import functions
import parseImgUrl from "./parseImgUrl";

// Import styles
import "./styles.scss";

const ImgLoader = ({
  transform,
  src,
  alt,
  className,
  loadingClassName = "",
}) => {
  // Parse image url
  const { image, placeholder } = parseImgUrl({ transform, src });

  return (
    <ProgressiveImage src={image} placeholder={placeholder}>
      {(src, loading) => (
        <img
          src={src}
          alt={alt}
          className={
            loading
              ? `img__loading ${loadingClassName}`
              : `img__loaded ${className}`
          }
        />
      )}
    </ProgressiveImage>
  );
};

export default ImgLoader;
