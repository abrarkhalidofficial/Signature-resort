import { aboutjsevenimg } from "../assets";
import React from "react";
import { useNavigate } from "react-router-dom";

export function aboutjseven() {
  const navigate = useNavigate();
  return (
    <section className="aboutjseven" id="about">
      <div className="aboutjseven__content">
        <div
          className="aboutjseven__left"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="aboutjseven__left__content">
            <div className="aboutjseven__left__img">
              <img src={aboutjsevenimg} alt="aboutjsevenimg" />
            </div>
          </div>
        </div>
        <div className="aboutjseven__right">
          <div className="aboutjseven__right__content">
            <div
              className="aboutjseven__right__heading"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              <span> About </span> J7
            </div>
            <div
              className="aboutjseven__right__info"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1200"
            >
              Dream Home is a gated community with a great location. Located
              downtown, you’re within walking distance of Parks, and the best
              shopping, dining and entertainment Getting around is a breeze,
              with easy access to freeways, buses and trolleys. . Laundry is
              available on premises.Dream Home is a gated community with a great
              location. Located downtown, you’re within walking distance of
              Parks, and the best shopping, dining and entertainment Getting
              around is a breeze, with easy access to freeways, buses and
              trolleys. . Laundry is available on premises.
            </div>
            <button
              className="aboutjseven__right__button"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                navigate("/hotalapart");
              }}
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1200"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
