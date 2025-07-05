import React from "react";
import newsLetter from "../Assets/Img/newsletter.png";
import "./Footer.css";
import backimg from "../Assets/Img/bg/footer-bg.jpg";
import logo from "../Assets/TITAN C (3).png";

const Footer = () => {
  return (
    <>
      <footer
        className="footer-wrapper footer-layout1"
        style={{ backgroundImage: `url(${backimg})`, color: "white" }}
      >
        <div className="footer-top">
          <div className="shadow-color"></div>
          <div className="container">
            <div
              className="cta-style1"
              style={{
                backgroundColor: "#ff681a",
                position: "relative",
                top: "-100px",
              }}
            >
              <div className="row g-5 align-items-center justify-content-between">
                <div className="col-lg-6">
                  <div className="cta-content">
                    <h2 className="cta-title">Ready to get started?</h2>
                    <p className="cta-text">
                      It only takes a few minutes to register your FREE Titan Yacht
                      account.
                    </p>
                    <a href="#" className="vs-btn style2 m-1">
                      Open An Account
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-5 col-sm-6 d-lg-block d-none"
                  style={{ width: "350px", height: "237px" }}
                >
                  <div className="cta-image d-lg-block d-none">
                    <img
                      src={newsLetter}
                      alt="CTA Image"
                      style={{ width: "300px", height: "250px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-area">
          <div className="container">
            <div className="row g-5 justify-content-between">
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <div className="vs-widget-about">
                    <div className="footer-logo">
                      <a href="#">
                        <img src={logo} alt="TITAN YACHTS" className="logo" />
                      </a>
                    </div>
                    <p className="footer-text" style={{ color: "white" }}>
                      Titan Yachts offers premium cruising experiences crafted for celebrations, romance, or pure relaxation
                    </p>
                    <div className="social-style1">
                      <a    href="https://www.facebook.com/titanyachtsofficial" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a   href="https://instagram.com/titan_yachts_official" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a   href="https://wa.me/+971525644209" target="_blank">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-2">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title"> Company</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <i className="fas fa-angle-right"></i> Home
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-angle-right"></i> About us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-angle-right"></i> Tour Pachages
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-angle-right"></i> Yachts
                        </a>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <h4 className="widget_title">Our Services</h4>
                  <div className="sidebar-gallery">
                    {/* <a href="assets/img/footer/insta1.jpg" className="popup-image">
                      <img
                        src="assets/img/footer/insta1.jpg"
                        alt="Gallery Image"
                        className="w-100"
                      />
                    </a>
                    <a href="assets/img/footer/insta2.jpg" className="popup-image">
                      <img
                        src="assets/img/footer/insta2.jpg"
                        alt="Gallery Image"
                        className="w-100"
                      />
                    </a>
                    <a href="assets/img/footer/insta3.jpg" className="popup-image">
                      <img
                        src="assets/img/footer/insta3.jpg"
                        alt="Gallery Image"
                        className="w-100"
                      />
                    </a>
                    <a href="assets/img/footer/insta4.jpg" className="popup-image">
                      <img
                        src="assets/img/footer/insta4.jpg"
                        alt="Gallery Image"
                        className="w-100"
                      />
                    </a>
                    <a href="assets/img/footer/insta5.jpg" className="popup-image">
                      <img
                        src="assets/img/footer/insta5.jpg"
                        alt="Gallery Image"
                        className="w-100"
                      />
                    </a>
                    <a href="assets/img/footer/insta6.jpg" className="popup-image">
                      <img
                        src="assets/img/footer/insta6.jpg"
                        alt="Gallery Image"
                        className="w-100"
                      />
                    </a> */}
                    <ul>
                      <li> Yacht Rental</li>
                      <li> Yacht Booking</li>
                      <li> Luxury Yachts</li>
                      <li> Standard Yachts</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <h4 className="widget_title">Subscribe</h4>
                  <form className="newsletter-form">
                    <p className="form_text">
                      Subscribe Our Newsletter For Getting Quick Updates
                    </p>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Your Email Address"
                    />
                    <button type="submit" className="vs-btn mt-2">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright-wrap">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-auto">
                <p className="copyright-text">
                  Copyright <i className="fas fa-copyright"></i>
                  <script>document.write(new Date().getFullYear())</script>{" "}
                  <a href="#">Titan</a>. All Rights Reserved By{" "}
                  <a href="#">Titan Yacht</a>
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <div className="copyright-menu">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li
                      style={{
                        borderLeft: "1px solid orange",
                        marginLeft: "10px",
                      }}
                    >
                      <a href="#" style={{ marginLeft: "10px" }}>
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
