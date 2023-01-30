import { mostluxuryimg, mostluxuryright, mostluxuryright1 } from "../assets";
import React from "react";
import { useNavigate } from "react-router-dom";

export function most__luxury() {
  const navigate = useNavigate();
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
              From the spacious villas to the elegant suites, apartments and
              chalets, every inch of this resort has been designed to transport
              you to a realm of unparalleled comfort and relaxation. With 5-star
              standard services and amenities that are sure to impress, this is
              truly a one-of-a-kind destination in Pakistan. Don't miss your
              chance to experience the ultimate in luxury and elegance at the
              first-of-its-kind theme-based resort in Pakistan
            </div>
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                navigate("/hotalapart");
              }}
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
