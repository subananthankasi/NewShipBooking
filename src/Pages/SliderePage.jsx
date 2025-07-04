import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import newyear from "../Assets/PartyImages/newyear.jpg";
import birthda_image from "../Assets/PartyImages/birthadayimage.jpg";
import proposal from "../Assets/PartyImages/proposal.jpg";
import team_building from "../Assets/PartyImages/TeamBuilding.jpeg";
import party from "../Assets/PartyImages/Party.jpg";
import water_sports from "../Assets/PartyImages/watersports.webp";
import bespoke from "../Assets/PartyImages/BESPOKE SUPERYACHT CHARTERS.jpg";
import fishing from "../Assets/PartyImages/fishing.jpg";

import "./Slider.css";
const GulfImages = [
  {
    title: "New Year",
    img: newyear,
    content: `On New Year’s Eve, rent a luxury yacht in Dubai and watch the
fireworks explode high above the city. Celebrate with us when
you join us for our yacht New Year’s Eve party.`,
  },
  {
    title: "Birthday Party",
    img: birthda_image,
    content: ` If you are planning to celebrate your or your loved one's
                birthday in Dubai in an elegant way and you are running out of
                birthday party ideas in Dubai, then think about a yacht birthday
                party in Dubai.`,
  },
  {
    title: "Proposal",
    img: proposal,
    content: `  Anniversaries are moments to be celebrated and cherished, no
                matter how many years you've lived together. titan Yachts
                gives couples the opportunity to celebrate their special day in
                grand style with a wonderful yacht trip. `,
  },
  {
    title: "Team Building",
    img: team_building,
    content: ` Corporate team building activities on a yacht will really test
                the survival skills of the participants. It will also make them
                more aware of their strengths and weaknesses. `,
  },
  {
    title: "Party",
    img: party,
    content: `Dubai Yacht Party is the most perfect and fun party in Dubai.
                Celebrate a successful promotion or get together with friends at
                a yacht party, your friends may never have experienced such a
                wonderful event and will be amazed.`,
  },
  {
    title: "Water Sports",
    img: water_sports,
    content: `Dubai is one of the most popular destinations for adventure
                lovers. As well as adventure sports such as jet skiing, wake
                boarding and surf boarding, beach activities in Dubai are
                becoming increasingly popular, the fun never ends. `,
  },
  {
    title: "Bespoke",
    img: bespoke,
    content: ` Our collection of amazing yachts will provide you with all the
                fun, enjoyment and happiness that you have been waiting for.
                With our Bespoke Superyacht Charters, whether it is a party, a
                romantic date or just a relaxing holiday `,
  },
  {
    title: "Fishing",
    img: fishing,
    content: `  Fishing in Dubai is one of the most popular activities,
                especially for those who enjoy being on the water. The warm
                Arabian waters are full of all types of fish. Fishing in Dubai
                is a favourite pastime for locals and tourists alike, `,
  },
  // newyear,
  // birthda_image,
  // proposal,
  // team_building,
  // party,
  // water_sports,
  // bespoke,
  // fishing
];
console.log("gu", GulfImages);

const SliderePage = () => {
  const [products, setProducts] = useState([]);
  const autoScrollRef = useRef(null);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    // setProducts(GulfImages.map((img, index) => ({ id: index, image: img })));
    setProducts(
      GulfImages.map((item, index) => ({
        image: item.img,
        title: item.title,
        content: item.content,
      }))
    );
  }, [GulfImages]);
  console.log("pro", products);
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % products.length;
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(autoScrollRef.current);
  }, [products]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const productTemplate = (product) => {
    return (
      //   <div className="p-2 text-center">
      //     <img
      //       src={product.image}
      //       alt="yacht"
      //       style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "12px" }}
      //     />
      //   </div>
      <div className="col">
        <div className="card p-0 position-relative hover-container">
          <img
            src={product.image}
            alt=""
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
          <div className="celebration_title">{product.title} </div>
          <div className="hover-text-overlay">
            <h5 className="text-white">{product.title} </h5>
            <p className="text-white ">{product.content}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-5" style={{marginBottom:"200px"}}> 
    <Carousel
      value={products}
      numVisible={4}
      numScroll={1}
      responsiveOptions={responsiveOptions}
      itemTemplate={productTemplate}
      autoplayInterval={5000}
      circular
    />
    </div> 
  );
};

export default SliderePage;
