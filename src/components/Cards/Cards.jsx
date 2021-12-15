import React from "react";

import "./Cards.css";
import CardItem from "./CardItem/CardItem";

import img1 from "../../assets/images/img-9.jpg";
import img2 from "../../assets/images/img-1.jpg";
import img3 from "../../assets/images/img-2.jpg";
import img4 from "../../assets/images/img-3.jpg";
import img5 from "../../assets/images/img-4.jpg";

function Cards(props) {
  return (
    <div className="cards">
      <h1>Chock out these EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="Explore the hidden waterfall deep inside
                the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img2}
              text="Set Sall the Atlantic Ocean Visiting Uncharted Waters"
              label="Island"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src={img4}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={img5}
              text="Experiance Football on Top of the Himilayan Mountaine"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
