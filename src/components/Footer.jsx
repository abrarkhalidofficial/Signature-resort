import React from "react";
import { footerlogo, footerrightimg } from "../assets/index.js";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <div className="footer__left__content">
            <img
              className="footer__left__logo"
              src={footerlogo}
              alt="footerlogo"
            />
            <div className="footer__left__info">
              Dream Home is a gated community with a great location. Located
              downtown, you’re within walking distance of Parks, and the best
              shopping, dining and entertainment Getting around is a breeze,
              with easy access to freeways, buses and trolleys. . Laundry is
              available on premises.
            </div>
          </div>
        </div>
        <div className="footer__mid">
          <div className="footer__mid__content">
            <div className="footer__mid__links">
              <div className="footer__mid__heading">Quick Links</div>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer__mid__links">
              <div className="footer__mid__heading">DIfferent</div>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right__content">
            <div className="footer__right__input">
              <input type="text" placeholder="Enter your email" />
              <button className="footer__right__button">Send</button>
            </div>
            <img
              className="footer__right__img"
              src={footerrightimg}
              alt="footerrightimg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
