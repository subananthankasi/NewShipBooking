import React, { useState } from "react";
// import logo from "../../../src/Assets/logo.png";
import logo from "../../src/Assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import facebook from "../../../src/Assets/facebook-svgrepo-com.svg";
// import Instagram from "../../../src/Assets/instagram-1-svgrepo-com.svg";
// import whatsapp from "../../../src/Assets/whatsapp-icon-logo-svgrepo-com.svg";
// import twiter from "../../../src/Assets/twitter-svgrepo-com.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="">
      <div className="header1">
        <div className="row justify-content-between align-items-center mx-5">
          <div className="col d-none d-lg-block text-start p-1 ">
            <div className="d-flex gap-3">
              <div className="d-flex gap-2">
                <div className="header-call">
                  <EmailIcon
                    className="header-icon"
                    sx={{ fontSize: 18, color: "#ff681a" }}
                  />
                </div>
                <p className="header-mail m-0">titanyachtsofficial@gmail.com</p>
              </div>
              <div className="d-flex gap-2 header-left">
                <div className="header-call">
                  <CallIcon
                    className="header-icon"
                    sx={{ fontSize: 18, color: "#ff681a" }}
                  />
                </div>
                <p className="header-mail m-0">+97152564209</p>
              </div>
            </div>
          </div>
          <div className="col-auto col d-none d-lg-block">
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/titanyachtsofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook_icon"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FacebookIcon sx={{ fontSize: 21 }} />
              </a>
              {/* <FacebookIcon className="facebook_icon" sx={{ fontSize: 21 }} /> */}
              {/* <InstagramIcon className="insta_icon" sx={{ fontSize: 21 }} /> */}
              <a
                href="https://instagram.com/titan_yachts_official"
                target="_blank"
                rel="noopener noreferrer"
                className="insta_icon"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InstagramIcon sx={{ fontSize: 21 }} />
              </a>
              {/* <WhatsAppIcon className="whatsapp_icon" sx={{ fontSize: 21 }} /> */}
              <a
                href="https://wa.me/+971525644209"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp_icon"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 21 }} />
              </a>
              <TwitterIcon className="twitter_icon" sx={{ fontSize: 21 }} />
            </div>
          </div>
        </div>
      </div>

      <div className="header2">
        <div className="row align-items-center justify-content-between mx-lg-5">
          <div className="col-auto">
            <div className="vs-logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "100px", height: "80px" }}
                />
              </Link>
            </div>
          </div>

          <div className="col text-end text-xl-center d-none d-lg-block">
            <nav className="main-menu menu-style1">
              <div className="d-flex justify-content-center align-items-center gap-4">
                <Link to="#" className="menu-item">
                  Home
                </Link>

                <Link to="/" className="menu-item">
                  Yacht Rental
                </Link>
                <Link to="/" className="menu-item">
                  Yacht Booking
                </Link>
                <Link to="/" className="menu-item">
                  Luxury Yachts
                </Link>
                <Link to="/" className="menu-item">
                  Standard Yachts
                </Link>
                <Link to="#" className="menu-item">
                  About Us
                </Link>
                <Link to="/" className="menu-item">
                  Contact
                </Link>
              </div>
            </nav>
          </div>

          <div className="col-auto d-lg-none">
            <button
              className="menu-toggle-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-container d-lg-none ${
          menuOpen ? "open" : "closed"
        }`}
      >
        <div className="mobile-menu">
          <ul className="text-start">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Yacht Rental
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Yacht Booking
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Luxury Yachts
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Standard Yachts
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
