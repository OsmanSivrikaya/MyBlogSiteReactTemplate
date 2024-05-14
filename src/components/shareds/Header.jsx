import React from "react";
import NavButton from "./HeaderNavButton";

const Header = () => {
  return (
    <div className="position-relative">
      <div className="potition-absolute tm-site-header">
        <div className="container-fluid position-relative">
          <div className="row">
            <div className="col-5 col-md-12 ml-auto mr-0">
              <div className="tm-site-nav">
                <NavButton></NavButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tm-welcome-container tm-fixed-header tm-fixed-header-2">
        <div className="text-center">
          <p className="pt-5 px-3 tm-welcome-text tm-welcome-text-2 mb-1 mt-lg-0 mt-5 text-white mx-auto">
            Another Image BG
            <br />
            it can be fixed.
            <br />
            Content will simply slide over.
          </p>
        </div>
      </div>

      <div id="tm-fixed-header-bg"></div>
    </div>
  );
};

export default Header;
