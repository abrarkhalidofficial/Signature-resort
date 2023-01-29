import { locationfeaturesimg } from "../assets";
import React from "react";

export function locationfeatures() {
  return (
    <section className="locationfeatures" id="features">
      <div className="locationfeatures__content">
        <div className="locationfeatures__left">
          <div className="locationfeatures__left__content">
            <div
              className="locationfeatures__left__heading"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <span> Location </span> features
            </div>
            <div
              className="locationfeatures__left__info"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1300"
            >
              Nestled atop the picturesque Patriata, Top, Murree, Signature
              resort offers a serene and peaceful getaway connected to the
              capital through five well-built roads. Discover the beauty of
              Murree Hills while enjoying the convenience of easy access. Come
              and see for yourself why Signature Resort is the ideal location
              for your next getaway.
            </div>
            <div className="locationfeatures__left__points">
              <div
                href="#"
                className="locationfeatures__left__points__tags"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1100"
              >
                <span className="spanpoint">.</span> Murree Expressway
              </div>
              <div
                href="#"
                className="locationfeatures__left__points__tags"
                data-aos="fade-up"
                data-aos-delay="55"
                data-aos-duration="1200"
              >
                <span className="spanpoint">.</span> GT Road
              </div>
              <div
                href="#"
                className="locationfeatures__left__points__tags"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                <span className="spanpoint">.</span> Angori Road
              </div>
              <div
                href="#"
                className="locationfeatures__left__points__tags"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                <span className="spanpoint">.</span> Karor Road
              </div>
              <div
                href="#"
                className="locationfeatures__left__points__tags"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                <span className="spanpoint">.</span> Kotli Sattian Road
              </div>
            </div>
            <button
              className="locationfeatures__left__button"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1300"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                navigate("/hotalapart");
              }}
            >
              Book Now
            </button>
          </div>
        </div>
        <div
          className="locationfeatures__right"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="locationfeatures__right__content">
            <div className="locationfeatures__right__img">
              <img src={locationfeaturesimg} alt="locationfeaturesimg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
