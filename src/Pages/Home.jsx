import React, { useEffect } from "react";
import homepagepic from "../Assets/4d.jpg";
import homepagepic1 from "../Assets/HomePic1.jpg";
import banner from "../Assets/banner-bg-1.png";
import "./Home.css";
import BlogPages from "./BlogPages";
import Packages from "./Packages";
import OfferPanner from "./OfferPanner";
import VideoPage from "./VideoPage";
import SliderePage from "./SliderePage";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <section
        className="hero-layout"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // height: "600px",
        }}
      >
        <div className="hero-mask">
          <div
            className="vs-carousel"
            id="hero-slider"
            data-slide-show="1"
            autoplay="false"
          >
            <div className="">
              <div className="container" style={{ paddingTop: "80px" }}>
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6">
                    <div className="hero-content" data-aos="fade-right">
                      <span className="hero-subtitle">Let's Go Now</span>
                      <h1 className="hero-title">
                        Explore Sea And Find The Beauty
                      </h1>
                      <p className="hero-text">
                        Step away from the ordinary and into a world of floating
                        elegance. Cruise along Dubai’s stunning coastline,
                        iconic landmarks, and serene blue waters—all in the
                        comfort of your own private yacht.
                      </p>
                      <button className="btn btn-read">Read More</button>
                    </div>
                  </div>
                  <div className="col-lg-6 col d-none d-lg-block">
                    <div className="hero-img align-items-center justify-content-center">
                      <img className="img1" src={homepagepic} alt="hero" />
                      <img className="img2" src={homepagepic1} alt="hero" />
                    </div>
                  </div>
                  <div className="wave-divider">
                    <svg viewBox="0 0 1440 320">
                      <path
                        fill="#fff"
                        fillOpacity="1"
                        d="M0,224L48,208C96,...Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogPages />
      <Packages />
      <OfferPanner />
      <VideoPage />
      <SliderePage />
      <Footer />
      {/* <GridPage/>
      <Footer/> */}
    </>
  );
};

export default Home;
