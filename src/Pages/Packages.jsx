// Packages.jsx
import React, { useState, useMemo } from "react";
import { Dialog } from "primereact/dialog";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import grid_1 from "../Assets/GridImg/grid_1.png";
import "./Package.css";

/* ----------  helpers ---------- */
const importAll = (r) => r.keys().map(r); //   r == require.context result

/* one memo‑ised object that holds every folder once */
const galleries = {
  Gulfcraft: importAll(
    require.context("../Assets/GridImg/Gulfcraft", false, /\.(jpe?g|png)$/)
  ),
  Majesty: importAll(
    require.context("../Assets/GridImg/Mejesty_70", false, /\.(jpe?g|png)$/)
  ),
  Azimuth: importAll(
    require.context("../Assets/GridImg/Azimut", false, /\.(jpe?g|png)$/)
  ),
  Meridian: importAll(
    require.context("../Assets/GridImg/Meridian_45", false, /\.(jpe?g|png)$/)
  ),
  Cranchi: importAll(
    require.context("../Assets/GridImg/Cranchi", false, /\.(jpe?g|png)$/)
  ),
  Riviera: importAll(
    require.context("../Assets/GridImg/Riviera", false, /\.(jpe?g|png)$/)
  ),
};
console.log("Gulfcraft",galleries)
/* grid cards */
const cards = [
  {
    img: galleries.Gulfcraft[0],
    head: "Gulfcraft",
    length: "60 FT",
    capacity: "22PAX",
    price: "550",
  },
  {
    img: galleries.Majesty[0],
    head: "Majesty",
    length: "70 FT",
    capacity: "35PAX",
    price: "700",
  },
  {
    img: galleries.Azimuth[0],
    head: "Azimuth",
    length: "80 FT",
    capacity: "40PAX",
    price: "900",
  },
  {
    img: galleries.Meridian[2],
    head: "Meridian",
    length: "45 FT",
    capacity: "15PAX",
    price: "450",
  },
  {
    img: galleries.Cranchi[0],
    head: "Cranchi",
    length: "44 FT",
    capacity: "12PAX",
    price: "450",
  },
  {
    img: galleries.Riviera[0],
    head: "Riviera",
    length: "48 FT",
    capacity: "15PAX",
    price: "450",
  },
];


export default function Packages() {
  const [selected, setSelected] = useState(null);

  /* memoise images so we don’t recalc on every render */
  const images = useMemo(
    () => (selected ? galleries[selected] : []),
    [selected]
  );

  return (
    <>
      {/* ---------- cards ---------- */}
      <div className="container mb-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          {cards.map(({ img, head, length, capacity, price }) => (
            <div
              key={head}
              className="col grid"
              data-aos="zoom-in-right"
              style={{ height: 300, marginBottom: 100 }}
              onClick={() => setSelected(head)}
            >
              <div className="card p-0 mb-5">
                <img src={img} className="card_image" alt={head} />
               
                  <div className="d-flex justify-content-center">
                  <h6 className="px-3 py-2 header_title">
                    <b>{head} </b>{" "}
                  </h6>
                </div>
              

                <div className="px-3 py-2 grid_bottom">
                  <p>
                    Length : {length} &nbsp;|&nbsp; Capacity : {capacity}
                  </p>
                  <span>Price : {price} /hr</span>
                  <button
                    className="booking_btn ms-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open("https://wa.me/971525644209", "_blank");
                    }}
                  >
                    Book&nbsp;Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- gallery dialog ---------- */}
      <Dialog
        header={selected ?? ""}
        visible={!!selected}
        modal
        style={{ width: "80vw" }}
        breakpoints={{ "960px": "95vw", "640px": "100vw" }}
        onHide={() => setSelected(null)}
      >
        {!!images.length && (
          <Carousel
            showArrows
            showIndicators
            showThumbs={true}
            infiniteLoop
            emulateTouch
            swipeable
            autoPlay
            interval={4000}
            stopOnHover
            dynamicHeight={false}
            thumbWidth={80}
            thumbHeight={30}
          >
            {images.map((src, i) => (
              <div key={i}>
                <img
                  src={src}
                  alt={`${selected} slide ${i + 1}`}
                  style={{ width: "100%", height: "60vh", objectFit: "cover" }}
                />
              </div>
            ))}
          </Carousel>
        )}
      </Dialog>
    </>
  );
}
