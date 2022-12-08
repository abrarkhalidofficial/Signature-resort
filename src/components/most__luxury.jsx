import { mostluxuryimg, mostluxuryright, mostluxuryright1 } from "../assets";
import React from "react";

export function most__luxury() {
  return (
    <section className="most__luxury">
      <div className="most__luxury__content">
        <div className="most__luxury__left">
          <div
            className="most__luxury__left__img"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img
              className="mostluxryimg"
              src={mostluxuryimg}
              alt="mostluxuryimg"
            />
          </div>
        </div>
        <div className="most__luxury__right">
          <div className="most__luxury__right__content">
            <div
              className="most__luxury__right__main__heading"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <span>Most luxury </span> resorts for more discering
            </div>
            <div
              className="most__luxury__right__info"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1300"
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
              className="most__luxury__right__button"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1300"
            >
              Read More
            </button>
            <div
              className="most__luxury__right__pics"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1500"
            >
              <div className="most__luxury__right__picture">
                <img
                  className="most__luxury__right__image"
                  src={mostluxuryright1}
                  alt="mostluxuryright"
                />
              </div>
              <div className="most__luxury__right__picture">
                <img
                  className="most__luxury__right__image"
                  src={mostluxuryright}
                  alt="mostluxuryright"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
