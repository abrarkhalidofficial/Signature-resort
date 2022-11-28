import React from "react";
<<<<<<< HEAD

export default function Header() {
  return <div></div>;
=======
import { useState, useLayoutEffect } from "react";
import ClickAwayListener from "react-click-away-listener";
import { headerlogo } from "../assets/index.js";
import { Menu } from "react-feather";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isScroll, setIsScroll] = useState(false);

  function changeIsNavOpen() {
    if (window.innerWidth <= 945) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  }

  useLayoutEffect(() => {
    changeIsNavOpen();
    window.addEventListener("resize", changeIsNavOpen);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
      changeIsNavOpen();
    });
  }, []);

  return (
    <div className="header__section">
      <div
        className={
          isScroll
            ? "header__navbar header__navbar__center__active"
            : "header__navbar"
        }
      >
        {/* <div className="header__navbar__left"></div> */}
        <div className="header__navbar__center">
          <div className="header__logo">
            <img src={headerlogo} alt="logo" />
          </div>
          <div
            className="header__menu"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            {isNavOpen ? <Y /> : <X />}
          </div>
          {isNavOpen ? (
            <ClickAwayListener
              onClickAway={() => {
                if (window.innerWidth <= 945) {
                  setIsNavOpen(false);
                }
              }}
            >
              <div className="header__entries">
                <a href="#" className="header__entry">
                  Home
                </a>
                <a href="#" className="header__entry">
                  About Us
                </a>
                <a href="#" className="header__entry">
                  Features
                </a>
                <a href="#" className="header__entry">
                  Contact Us
                </a>
              </div>
            </ClickAwayListener>
          ) : null}
        </div>
        {/* <div className="header__navbar__right"></div> */}
      </div>
    </div>
  );
}
function X() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="21"
      viewBox="0 0 30 21"
    >
      <g
        id="Icon_feather-menu"
        data-name="Icon feather-menu"
        transform="translate(-3 -7.5)"
      >
        <path
          id="Path_21895"
          data-name="Path 21895"
          d="M4.5,18h27"
          fill="none"
          stroke="#bc993d"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="Path_21896"
          data-name="Path 21896"
          d="M4.5,9h27"
          fill="none"
          stroke="#bc993d"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="Path_21897"
          data-name="Path 21897"
          d="M4.5,27h27"
          fill="none"
          stroke="#bc993d"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </g>
    </svg>
  );
}

function Y() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31.82"
      height="31.82"
      viewBox="0 0 31.82 31.82"
    >
      <path
        id="Icon_ionic-md-add"
        data-name="Icon ionic-md-add"
        d="M29.25,19.5H19.5v9.75h-3V19.5H6.75v-3H16.5V6.75h3V16.5h9.75Z"
        transform="translate(-9.546 15.91) rotate(-45)"
        fill="#bc993d"
      />
    </svg>
  );
>>>>>>> 6613cdfd6525c6d8a4379ca1e4a4f0da2f3b0951
}
