import { homesectionimg } from "../assets";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function homesection() {
  const navigate = useNavigate();
  return (
    <section className="homesection " id="home">
      <div className="homesection__content">
        <div className="homesection__left">
          <div className="homesection__left___content">
            <div
              className="homesection__left__heading"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <span> THE FIRST OF </span> ITS KIND 5-STAR RESORT IN PAKISTAN
            </div>
            <div
              className="homesection__left__info"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1500"
            >
              Spread over 50 kanals in the majestic Queen of Hills, Murree,
              Signature Resort offers a truly unparalleled experience in
              hospitality. Imagine stepping into a world where international
              standards of luxury blend seamlessly with unique, neverbefore-seen
              theme-based architecture and amenities. From the moment you arrive
              Signature Resort, you'll experience a world of elegance and
              refinement, where every detail has been carefully crafted to
              exceed your expectations.
            </div>

            <button
              onClick={() => {
                navigate("/signaturevilla");
              }}
              className="homesection__left__button"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="1600"
            >
              More Details
            </button>
          </div>
        </div>
        <div className="homesection__right">
          <div className="homesection__right__content">
            <div className="homesection__right__img">
              <img src={homesectionimg} alt="homesectionimg" />
            </div>
            <div
              onClick={() => {
                navigate("/hotalapart");
              }}
              className="homesection__right__button__svg"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              <button className="homesection__right__button">
                Layout plan
              </button>
              <div className="homesection__right__svg">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.38825 1.66323L2.75904 1.25632L3.1285 1.66444L10.3707 9.66444L10.6744 10L10.3707 10.3356L3.1285 18.3356L2.75904 18.7437L2.38825 18.3368L1.63042 17.5051L1.32456 17.1694L1.62933 16.8328L7.81485 10L1.62933 3.16722L1.32456 2.83056L1.63042 2.49489L2.38825 1.66323Z"
                    fill=""
                    stroke=""
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
