import React from "react";
import offerpanner from "../Assets/Img/bg/offer-bg.jpg";
import offer from "../Assets/Img/Shape/offer-1-1.png";
import "./OfferPanner.css";

const OfferPanner = () => {
  return (
    <section
      className="s"
      style={{
        backgroundImage: `url(${offerpanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "406px",
      }}
    >
      <div className="container text-align-center">
        <div className="row align-items-center justify-content-between p-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-5 col-xxl-5">
            <div className="title-area white-title mb-md-0">
              <span className="sec-subtitle " style={{color:"white"}}>Go & Discover</span>
              <h2 className="sec-title h1" style={{color:"white"}}>Get Special Offer</h2>
              <p className="sec-text" style={{color:"white"}}>
               Uncover unforgettable moments on Dubai’s dazzling waters.
Book today and enjoy exclusive yacht rental deals!.
              </p>
              <a href="#" className="vs-btn style-orange">
                View More
              </a>
            </div>
          </div>
          <div className="col-12 d-none d-lg-block col-md-6 col-lg-6 col-xl-5 col-xxl-5 text-align-center">
            <div className="img-box1">
              <img
                className="img-1-1"
                src={offer}
                alt="Offer image"
                style={{ width: "493", height: "280px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferPanner;
