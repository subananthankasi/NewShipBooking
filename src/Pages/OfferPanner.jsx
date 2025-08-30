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
        // height: "406px",
        height: "auto",
      }}
    >
      <div className="container text-align-center">
        <div className="row align-items-center justify-content-between p-5">
          {/* Text Column */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="title-area white-title">
              <span className="sec-subtitle" style={{ color: "white" }}>
                Go & Discover
              </span>
              <h2 className="sec-title h1" style={{ color: "white" }}>
                Get Special Offer
              </h2>
              <p className="sec-text" style={{ color: "white" }}>
                Enjoy unlimited soft drinks, bottled water, ice cubes, and
                top-notch music systems. Equipped with fishing rods for your
                leisure, our yachts offer more than just a ride—uncover
                unforgettable moments on Dubai’s stunning waters. Book now to
                unlock exclusive deals and create memories that last a lifetime!
              </p>
              <a href="#" className="vs-btn style-orange">
                View More
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-12 col-md-6 text-center">
            <div className="img-box1">
              <img
                className="img-1-1 img-fluid"
                src={offer}
                alt="Offer"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferPanner;
