import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./team.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Team = () => {
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
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Featured Agents"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          {isMobile() ? (
            <Slider {...carouselSettings}>
              {team.map((val, index) => (
                <div className="box" key={index}>
                  <button className="btn3">{val.list} Listings</button>
                  <div className="details">
                    <div className="img">
                      <img src={val.cover} alt="" />
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <i className="fa fa-location-dot"></i>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>

                    <ul>
                      {val.icon.map((icon, index) => (
                        <li key={index}>{icon}</li>
                      ))}
                    </ul>
                    <div className="button flex">
                      <button>
                        <i className="fa fa-envelope"></i>
                        Message
                      </button>
                      <button className="btn4">
                        <i className="fa fa-phone"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="content mtop grid3">
              {team.map((val, index) => (
                <div className="box" key={index}>
                  <button className="btn3">{val.list} Listings</button>
                  <div className="details">
                    <div className="img">
                      <img src={val.cover} alt="" />
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <i className="fa fa-location-dot"></i>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>

                    <ul>
                      {val.icon.map((icon, index) => (
                        <li key={index}>{icon}</li>
                      ))}
                    </ul>
                    <div className="button flex">
                      <button>
                        <i className="fa fa-envelope"></i>
                        Message
                      </button>
                      <button className="btn4">
                        <i className="fa fa-phone"></i>
                      </button>
                    </div>
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

export default Team;
