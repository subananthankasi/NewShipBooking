import React from "react";
import "./VideoPage.css";
import firstpic from "../Assets/Img/gallery/gallery-1-1.jpg";
import secondpic from "../Assets/Img/gallery/gallery-1-3.jpg";
import demovidoe_1 from "../Assets/Videos/demovideo_1.mp4";
import demovidoe_2 from "../Assets/Videos/demovideo_2.mp4";
import demovidoe_3 from "../Assets/Videos/demovideo_3.mp4";
import demovidoe_4 from "../Assets/Videos/demovideo_4.mp4";

const VideoPage = () => {
  return (
    <>
      <section className="space space-extra-bottom gallery-style1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="title-area mb-4">
                <span className="sec-subtitle text-uppercase">
                  Go & Discover
                </span>
                <h2 className="sec-title h1">Breathtaking Cities</h2>
                <p className="sec-text mb-4">
                  Curabitur aliquet quam id dui posuere blandit. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
              </div>
              <div className="row gx-3">
                <div className="col-6 mb-3">
                  <div
                    className="gallery-image-container"
                    style={{ aspectRatio: "1/1" }}
                  >
                    {/* <img
                      className="img-fluid w-100 h-100 object-fit-cover"
                      src={firstpic}
                      alt="city view"
                    /> */}
                    <video
                      src={demovidoe_1}
                      autoPlay
                      muted
                      loop
                      controls
                      playsInline
                       className="img-fluid w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div
                    className="gallery-image-container"
                    style={{ aspectRatio: "1/1" }}
                  >
                    {/* <img
                      className="img-fluid w-100 h-100 object-fit-cover"
                      src={firstpic}
                      alt="city view"
                    /> */}
                    <video
                      src={demovidoe_4}
                      autoPlay
                      muted
                      loop
                      controls
                      playsInline
                       className="img-fluid w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="gallery-video position-relative">
                <div
                  className="gallery-image-container"
                  style={{ aspectRatio: "420/350" }}
                >
                  {/* <img
                    className="img-fluid w-100 h-100 object-fit-cover"
                    src={secondpic}
                    alt="gallery-image"
                  /> */}
                   <video
                      src={demovidoe_2}
                      autoPlay
                      muted
                      loop
                      controls
                      playsInline
                       className="img-fluid w-100 h-100 object-fit-cover"
                    />
                </div>
                <div className="gallery-btn position-absolute bottom-0 start-0 p-4 d-flex align-items-center">
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video bg-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <i className="fas fa-play text-dark"></i>
                  </a>
                  <span className="text-white">Watch Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPage;
