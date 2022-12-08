import { nextpageimg, nextpageimg1, nextpageimg2 } from "../assets";
import { NavLink } from "react-router-dom";
import React from "react";

export function nextpagelink() {
  return (
    <section className="nextpagelink">
      <div className="Overlay__Cards">
        <div
          className="Overlay__Card__con"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="overlay__img">
            <NavLink
              to="/signaturevilla"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div href="suitsfeatures" className="Overlay__Card__img">
                <img src={nextpageimg} alt="overlaycard" />
              </div>
            </NavLink>
            <div className="overlay__heading">Signature villa</div>
          </div>
        </div>
        <div
          className="Overlay__Card__con"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="overlay__img">
            <NavLink
              to="/suitsfeatures"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div href="suitsfeatures" className="Overlay__Card__img">
                <img src={nextpageimg1} alt="overlaycard" />
              </div>{" "}
            </NavLink>
            <div className="overlay__heading">Hotel suite</div>
          </div>
        </div>
        <div
          className="Overlay__Card__con"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="overlay__img">
            <NavLink
              to="/hotalapart  "
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div href="suitsfeatures" className="Overlay__Card__img">
                <img src={nextpageimg2} alt="overlaycard" />
              </div>
            </NavLink>
            <div className="overlay__heading">Hotel Apartment</div>
          </div>
        </div>
      </div>
    </section>
  );
}
