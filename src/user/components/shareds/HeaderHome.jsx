import React from "react";
import NavButton from "./HeaderNavButton";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const HeaderHome = () => {
  return (
    <>
      <div className="position-relative">
        <div className="position-absolute tm-site-header">
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
        <div className="tm-welcome-container text-center text-white">
          <div className="tm-welcome-container-inner">
            <p className="tm-welcome-text mb-1 text-white">Hoşgeldiniz</p>
            <p className="tm-welcome-text mb-5 text-white">
              Bilgilendirici makaleler paylaşıyorum.
            </p>
            <a
              href="#content"
              className="btn tm-btn-animate tm-btn-cta tm-icon-down"
            >
              <span>Keşfet</span>
            </a>
          </div>
        </div>

        <div id="tm-video-container">
          <video autoPlay muted loop id="tm-video">
            <source src="../src/user/video/wheat-field.mp4" type="video/mp4" />
          </video>
        </div>

        <i id="tm-video-control-button" className="fas fa-pause"></i>
      </div>
      <Outlet></Outlet>

      <Footer />
    </>
  );
};

export default HeaderHome;
