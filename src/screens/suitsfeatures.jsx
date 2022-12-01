import React from "react";
import { NavLink } from "react-router-dom";
import { suitsfeaturesimg, suitsfeaturesbedimg } from "../assets/index.js";
export default function suitsfeatures() {
  return (
    <>
      {" "}
      <section className="homesection__two " id="home">
        <div className="homesection__two__content">
          <div className="homesection__two__left">
            <div className="homesection__two__left___content">
              <div className="homesection__two__left__heading">
                <span> Hotel </span> suits features
              </div>
              <div className="homesection__two__left__info">
                - Beautifully full furnished Hotel Suite
              </div>
              <div className="homesection__two__left__info">
                - Beautifully full furnished Hotel Suite
              </div>
              <div className="homesection__two__left__info">
                - Beautifully full furnished Hotel Suite
              </div>
              <div className="homesection__two__left__info">
                - Beautifully full furnished Hotel Suite
              </div>
              <button
                className="homesection__two__left__button"
                to="/suitsfeatures"
              >
                Lead form
              </button>
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
      <section className="suitsfeaturesbed">
        <div className="suitsfeaturesbedimg">
          <img src={suitsfeaturesbedimg} alt="suitsfeaturesbedimg" />
        </div>
      </section>
    </>
  );
}
