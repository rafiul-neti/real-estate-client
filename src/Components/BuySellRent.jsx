import React from "react";
import { Link } from "react-router";

const BuySellRent = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="bsr-cards">
        <div className="bsr-images">
          <img
            src="https://finder.madrasthemes.com/real-estate/wp-content/uploads/sites/2/2021/11/buy.svg"
            alt=""
          />
        </div>
        <div className="bsr-cardsBody">
          <h3 className="text-h3">Buy a property</h3>
          <p className="text-gray-500 text-sm font-semibold">
            Find your dream home with trusted listings and expert guidance every
            step of the way.
          </p>
          <Link to={`/all-properties`} className="bsr-btns">
            Find a Home
          </Link>
        </div>
      </div>

      <div className="bsr-cards">
        <div className="bsr-images">
          <img
            src="https://finder.madrasthemes.com/real-estate/wp-content/uploads/sites/2/2021/11/sell.svg"
            alt=""
          />
        </div>
        <div className="bsr-cardsBody">
          <h3 className="text-h3">Sell a Property</h3>
          <p className="text-gray-500 text-sm font-semibold">
            Get the best value for your property with our smart marketing and
            professional support.
          </p>
          <Link to={`/add-property`} className="bsr-btns">
            Place an Ad
          </Link>
        </div>
      </div>

      <div className="bsr-cards">
        <div className="bsr-images">
          <img
            src="https://finder.madrasthemes.com/real-estate/wp-content/uploads/sites/2/2021/11/rent.svg"
            alt=""
          />
        </div>
        <div className="bsr-cardsBody">
          <h3 className="text-h3">Rent a Property</h3>
          <p className="text-gray-500 text-sm font-semibold">
            Discover affordable rental options that match your lifestyle and
            location preferences easily.
          </p>
          <Link to={`/all-properties`} className="bsr-btns">
            Find a Rental
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuySellRent;
