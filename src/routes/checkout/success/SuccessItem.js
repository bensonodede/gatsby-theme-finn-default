import React from "react";

const SuccessItem = ({ emoji, title, description }) => (
  <div className="success__item">
    <div className="success__item-title">
      {/* Emoji */}
      <h1 className="is-size-5  success__item-emoji">{emoji}</h1>
      {/* Title */}
      <h5 className="title is-size-6 has-text-grey-darker is-marginless">
        {title}
      </h5>
    </div>

    {/* Description */}
    <p className="is-size-6 has-text-grey-light success__item-description">
      {description}
    </p>
  </div>
);

export default SuccessItem;
