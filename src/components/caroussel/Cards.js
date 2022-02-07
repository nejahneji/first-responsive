import React, { useState } from "react";

import Carousel from "react-elastic-carousel";
// import Item from "./Item";
import './cards.css'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Card() {
  const [items, setItems] = useState([
    { id: 1, src: "/kia.jpg" },
    { id: 2, src: "/hundai.jpg" },
    { id: 3, src: "/suzuki.jpg" },
    { id: 4, src: "/mitsubushi.jpg" },
    { id: 5, src: "/ford.jpg" },
    { id: 6, src: "/honda.jpg" },
    { id: 7, src: "/jeep.jpg" },
    { id: 8, src: "/toyota.jpg" },
    { id: 9, src: "/mazda.jpg" },
    { id: 10, src: "/nissan.jpg" },
    { id: 11, src: "/mahindra.jpg" },
    { id: 12, src: "/tata.jpg" },
    { id: 13, src: "/sangyong.jpg" },
    { id: 14, src: "/chery.jpg" },
  ]);

  return (
    <div className="marques" id="marques">
      <h1>MARQUES</h1>

      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <div key={item.id}>
              <img src={`${item.src}`} alt=''/>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default Card;
