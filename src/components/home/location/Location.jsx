import React from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Location = () => {
  function isMobile() {
    return window.innerWidth < 768;
  }
  const carouselSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
  };
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="Explore By Location"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />

          {isMobile() ? ( // Check if it's a mobile device
            <Slider {...carouselSettings}>
              {location.map((item, index) => (
                <div className="box" key={index}>
                  <img src={item.cover} alt="" />
                  <div className="overlay">
                    <h5>{item.name}</h5>
                    <p>
                      <label>{item.Villas}</label>
                      <label>{item.Offices}</label>
                      <label>{item.Apartments}</label>
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="content grid3 mtop">
              {location.map((item, index) => (
                <div className="box" key={index}>
                  <img src={item.cover} alt="" />
                  <div className="overlay">
                    <h5>{item.name}</h5>
                    <p>
                      <label>{item.Villas}</label>
                      <label>{item.Offices}</label>
                      <label>{item.Apartments}</label>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Location;
