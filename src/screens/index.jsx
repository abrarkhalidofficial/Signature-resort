import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import React from "react";
import { ourproject } from "../components/ourproject";
import { aboutjseven } from "../components/aboutjseven";
import { nextpagelink } from "../components/nextpagelink";
import { locationfeatures } from "../components/locationfeatures";
import { locationpointer } from "../components/locationpointer";
import { ourbest } from "../components/ourbest";
import { most__luxury } from "../components/most__luxury";
import { homesection } from "../components/homesection";

export default function Index() {
  AOS.init();
  return (
    <>
      {homesection()}
      {most__luxury()}
      {ourbest()}
      {locationpointer()}
      {locationfeatures()}
      {nextpagelink()}
      {aboutjseven()}
      {ourproject()}
      <section className="formsection">
        <div className="formsection__content">
          <div className="formsection__content__all__input">
            <div className="formsection__content__input">
              <input type="Name" name="Name" id="Name" placeholder="Name" />
            </div>
          </div>
          <div className="formsection__content__all__input">
            <div className="formsection__content__input">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div className="formsection__content__all__input">
            <div className="formsection__content__input">
              <input type="tel" name="tel" id="tel" placeholder="Number" />
            </div>
          </div>
          <div className="formsection__content__all__input">
            <div className="formsection__content__input">
              <input type="Text" name="text" id="text" placeholder="City" />
            </div>
          </div>
          <div className="formsection__content__all__msg">
            <div className="formsection__content__msg">
              <textarea
                type="text"
                name="text"
                id="text"
                placeholder="Message"
                cols={30}
                rows={8}
              />
            </div>
          </div>
          <div className="formsection__content__all__button">
            <button>Submit</button>
          </div>
        </div>
      </section>
    </>
  );
}
