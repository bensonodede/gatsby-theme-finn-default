import React from "react";

const HomeFooter = () => (
  <div className="home-footer">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-10">
          {/* Copyright text */}
          <p className="is-size-7 has-text-grey-light has-text-centered home-footer__copyright">
            © {process.env.GATSBY_STORE_NAME} {new Date().getFullYear()}. All
            rights reserved.
          </p>

          {/* Footer link to Finn */}
          <a
            href={"https://withfinn.com"}
            target={"_blank"}
            rel="noopener noreferrer"
            className="home-footer__link"
          >
            <p className="is-size-7 has-text-grey-light has-text-centered">
              <span role="img" aria-label="powered">
                ⚡{" "}
              </span>
              Powered by <span className="title is-size-7">finn.</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default HomeFooter;
