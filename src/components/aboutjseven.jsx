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
              J7 Global is where commercial success meets the highest degree of opulence. It is an upcoming real estate project in the capital city, offering lucrative investment opportunities in its Mega Shopping Mall and Luxury Hotel.Being a project of J7 Group . one of the biggest real estate developers . J7 Global promises to surpass all your expectations with the J7 Group’s ultramodern resources, highly talented team, acclaimed punctuality and quality work.
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
