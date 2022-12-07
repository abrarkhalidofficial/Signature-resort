import {
  SignatureVillaimg,
  signatureapartimgchange,
  suitsfeaturesimg,
} from "../assets";

import { ImageSelector } from "../components/ImageSelector";
import React from "react";

export default function hotalapart() {
  const images = [signatureapartimgchange, SignatureVillaimg, suitsfeaturesimg];
  return (
    <>
      <section className="homesection__two " id="home">
        <div className="homesection__two__content">
          <div className="homesection__two__left">
            <div className="homesection__two__left___content">
              <div className="homesection__two__left__heading">
                <span> Hotal </span> Apartment Features
              </div>
              <div className="homesection__three__left__info__heading">
                Every apartment is corner apartment along with
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Aesthetic Mountain view
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Spacious Space for grandeur living
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Fully luxurious furnishing
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Modern Designed Interior
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Luxury washroom
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Master Bedroom with lap of luxury
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Artistic designed balcony with all
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Bonfire Area with the fire and stars
              </div>
            </div>
          </div>
          <div className="homesection__two__right">
            <div className="homesection__two__right__content">
              <div className="homesection__two__right__img">
                <img src={suitsfeaturesimg} alt="homesection__twoimg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="SignatureVilla">
        <img src={SignatureVillaimg} alt="SignatureVillaimg" />
      </section>
      <ImageSelector images={images} />
    </>
  );
}
