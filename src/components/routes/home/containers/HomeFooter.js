import React from "react";

const HomeFooter = () => (
  <div className="home-footer">
    <div className="container">
      <div className="columns is-multiline is-mobile is-centered">
        <div className="column is-10-touch is-12-desktop is-centered">
          <div className="content has-text-centered">
            {/* Copyright text */}
            <p className="is-size-7">
              &copy; {process.env.GATSBY_STORE_NAME} {new Date().getFullYear()}.
              All rights reserved.
            </p>

            {/* Footer link to Finn */}
            <a
              href={"https://magicfinn.com"}
              target={"_blank"}
              rel="noopener noreferrer"
              className="is-size-7 home-footer__link"
            >
              <span role="img" aria-label="powered">
                ⚡{" "}
              </span>
              Powered by <span className="title is-size-7">finn.</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeFooter;
