import React, { useState } from "react";
import { list } from "../../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecentCard = () => {
  const [heartClickStates, setHeartClickStates] = useState(
    list.map(() => false)
  );

  const handleHeartClick = (index) => {
    // Toggle the state of the heart icon at the specified index
    const newHeartClickStates = [...heartClickStates];
    newHeartClickStates[index] = !newHeartClickStates[index];
    setHeartClickStates(newHeartClickStates);
  };
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
      {isMobile() ? ( // Check if it's a mobile device
        <Slider {...carouselSettings}>
          {list.map((val, index) => {
            const { cover, category, location, name, price, type } = val;
            const isHeartClicked = heartClickStates[index];
            return (
              <div className="box shadow" key={index}>
                <div className="img">
                  <img src={cover} alt="" />
                </div>
                <div className="text">
                  <div className="category flex">
                    <span
                      style={{
                        background:
                          category === "For Sale" ? "#25b5791a" : "#ff98001a",
                        color: category === "For Sale" ? "#25b579" : "#ff9800",
                      }}
                    >
                      {category}
                    </span>
                    <i
                      className="fa fa-heart"
                      style={{
                        color: isHeartClicked ? "#27ae60" : "",
                      }}
                      onClick={() => handleHeartClick(index)}
                    ></i>
                  </div>
                  <h4>{name}</h4>
                  <p>
                    <i className="fa fa-location-dot"></i> {location}
                  </p>
                </div>
                <div className="button flex">
                  <div>
                    <button className="btn2">{price}</button>{" "}
                    <label htmlFor="">/sqft</label>
                  </div>
                  <span>{type}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        // Render regular card grid on larger screens
        <div className="content grid3 mtop">
          {list.map((val, index) => {
            const { cover, category, location, name, price, type } = val;
            const isHeartClicked = heartClickStates[index];
            return (
              <div className="box shadow" key={index}>
                <div className="img">
                  <img src={cover} alt="" />
                </div>
                <div className="text">
                  <div className="category flex">
                    <span
                      style={{
                        background:
                          category === "For Sale" ? "#25b5791a" : "#ff98001a",
                        color: category === "For Sale" ? "#25b579" : "#ff9800",
                      }}
                    >
                      {category}
                    </span>
                    <i
                      className="fa fa-heart"
                      style={{
                        color: isHeartClicked ? "#27ae60" : "",
                      }}
                      onClick={() => handleHeartClick(index)}
                    ></i>
                  </div>
                  <h4>{name}</h4>
                  <p>
                    <i className="fa fa-location-dot"></i> {location}
                  </p>
                </div>
                <div className="button flex">
                  <div>
                    <button className="btn2">{price}</button>{" "}
                    <label htmlFor="">/sqft</label>
                  </div>
                  <span>{type}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default RecentCard;
