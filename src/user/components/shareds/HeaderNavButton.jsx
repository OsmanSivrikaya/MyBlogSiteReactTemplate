import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { changeHeaderFunc } from "../../../redux/headerSlice/headerSlice";
import { useDispatch } from "react-redux";

const HeaderNavButton = () => {
  // Aktif olan linkten active class'ını kaldır
  const removeActiveClass = () => {
    const activeLink = document.querySelector(".navbar-nav .nav-item.active");
    if (activeLink) {
      activeLink.classList.remove("active");
    }
  };

  const dispatch = useDispatch();

  // İlgili linkin active class'ını ekle
  const setActiveClass = (linkId) => {
    // buttonlarda active class'ı var ise siler
    removeActiveClass();
    dispatch(changeHeaderFunc(linkId));
    const link = document.getElementById(linkId);
    if (link) {
      link.closest(".nav-item").classList.add("active");
    }
  };

  const activeButtonFunc = () => {
    // Sayfanın path'ini al
    const path = window.location.pathname;
    switch (path) {
      case "/about":
        setActiveClass("about");
        break;
      case "/contact":
        setActiveClass("contact");
        break;
      default:
        setActiveClass("home");
    }
  };

  // sayfa yüklenince çalışıyor
  useEffect(() => {
    activeButtonFunc();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg mr-0 ml-auto" id="tm-main-nav">
      <button
        className="navbar-toggler tm-bg-black py-2 px-3 mr-0 ml-auto collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-nav"
        aria-controls="navbar-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars tm-menu-closed-icon"></i>
          <i className="fas fa-times tm-menu-opened-icon"></i>
        </span>
      </button>
      <div className="navbar-collapse tm-nav" id="navbar-nav">
        <ul className="navbar-nav text-uppercase">
          <li className="nav-item">
            <Link
              className="nav-link tm-nav-link"
              onClick={() => setActiveClass("home")}
              id="home"
              to="/"
            >
              ANASAYFA
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="nav-link tm-nav-link"
              onClick={() => setActiveClass("about")}
              id="about"
              to="/about"
            >
              HAKKINDA<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link tm-nav-link"
              onClick={() => setActiveClass("contact")}
              id="contact"
              to="/contact"
            >
              İLETİŞİM
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link tm-nav-link"
              onClick={() => setActiveClass("login")}
              id="login"
              to="/login"
            >
              GİRİŞ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNavButton;
