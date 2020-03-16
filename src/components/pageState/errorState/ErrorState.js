import React from "react";

// Import components
import Button from "../../button";

// Import styles
import "./styles.scss";

const ErrorState = () => (
  <div className="error-state">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-9-mobile is-10-tablet is-10-desktop">
          <div className="error-state__column">
            {/* Error message */}
            <h1 className="title is-size-4 has-text-centered">
              Oops, something went wrong.
            </h1>

            <p className="is-size-6 has-text-centered">
              There was a problem loading this page. <br />
              Check your internet connection and try again.
            </p>

            {/* Error button */}
            <Button onClick={() => window.location.reload()}>Try again</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ErrorState;
