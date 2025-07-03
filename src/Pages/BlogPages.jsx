import React from "react";
import circle from "../Assets/Img/Shape/circle1.png";
import dot from "../Assets/Img/Shape/Dot.png";
import blog from "../Assets/Img/blog/blog1.png";
import blog1 from "../Assets/Img/blog/blog2.png";
import "./BlogPages.css";
import content_backgroung_img from "../Assets/Img/Shape/blog-bg.png";

const BlogPages = () => {
  return (
    <div className="space-top space-extra-bottom blog-wrapper1 shape-mockup-wrap">
      <div
        className="shape-mockup d-none d-xl-block spin z-index-negative"
        data-top="-5%"
        data-left="-5%"
        // style={{top:"-5px",left:"-5px"}}
        style={{ marginTop: "-170px", left: "-70px" }}
      >
        <img src={circle} alt="circle" />
      </div>

      <div className="container">
        <div className="row justify-content-center text-center">
          <div
            className="col-xxl-6 col-xl-7 col-lg-8 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="title-area">
              <span className="sec-subtitle">Travel Essentials Tips</span>
              <h2 className="sec-title h1">
                Awesome Tips That Makes Your Travel Beautiful
              </h2>
            </div>
          </div>
        </div>

        {/* Blog 1 */}
        <div className="blog-style4 d-flex align-items-center">
          <div className="blog-image">
            <img src={blog} alt="blog image" />
          </div>
          <div
            className="blog-content"
            style={{
              backgroundImage: `url(${content_backgroung_img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-bg-src={content_backgroung_img}
          >
            <h3 className="blog-title">
              <a href="blog-details.html">
                Crafting a Premium Experience on the Water
              </a>
            </h3>
            <p className="blog-text d-none d-xl-block d-lg-block">
              A city known for luxury, innovation, and unforgettable experiences
              — is now home to a new level of marine leisure with our yacht
              booking platform. As a dedicated yacht owner, we’ve developed a
              seamless and elegant solution for tourists, party planners, and
              corporate event organizers to enjoy unforgettable moments aboard
              Dubai’s most exquisite yachts.
            </p>
          </div>
        </div>
        {/* Blog 2 */}
        {/* <div className="blog-style41 d-flex flex-column-reverse flex-lg-row align-items-center">
          <div
            className="blog-content1"
            style={{
              backgroundImage: `url(${content_backgroung_img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              left: "100px",
              zIndex: "1",
            }}
          >
            <h3 className="blog-title">
              <a href="blog-details.html">
                Crafting a Premium Experience on the Water
              </a>
            </h3>
            <p className="blog-text d-none d-xl-block d-lg-block">
              A city known for luxury, innovation, and unforgettable experiences
              — is now home to a new level of marine leisure with our yacht
              booking platform...
            </p>
          </div>

          <div className="blog-image1">
            <img src={blog} alt="blog image" />
          </div>
        </div> */}



        {/* <div
          className="shape-mockup d-none d-xl-block jump z-index-negative d-flex justify-content-end"
          data-bottom="5%"
          data-right="5%"
        >
          <img src={dot} alt="Dots" />
        </div> */}
      </div>
    </div>
  );
};

export default BlogPages;
