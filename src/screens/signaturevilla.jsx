import {
  SignatureVillaimg,
  signaturevillaimgchange,
  suitsfeaturesimg,
  signatureapartimgchange,
} from "../assets";

import { ImageSelector } from "../components/ImageSelector";
import React from "react";

export default function SignatureVilla() {
  const images = [
    signaturevillaimgchange,
    signatureapartimgchange,
    signaturevillaimgchange,
  ];
  return (
    <>
      <section className="homesection__two " id="home">
        <div className="homesection__two__content">
          <div className="homesection__two__left">
            <div className="homesection__two__left___content">
              <div className="homesection__two__left__heading">
                <span> Signature </span> Villa Features
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Separate car parking area for each villa
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Mountain Facing view for each villa
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Extra Land along with every villa
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Spacious Bedrooms with full luxurious furnishing
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Luxury Spacious washroom
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Fresh & friendly environment with nonpolluting
                air
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> No Road in surrounding for traffic chaos
              </div>
              <div className="homesection__three__left__info">
                <span>-</span> Common Parking for all the residents
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
