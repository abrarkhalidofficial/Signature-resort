import React from "react";
import { Menu, X } from "react-feather";
import { useNavigate } from "react-router-dom";
import { signlogo } from "../assets/index.js";
import { useLayoutEffect, useState } from "react";
export default function Header() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    function navStatus() {
      if (window.innerWidth < 1100) {
        setActive(false);
      } else {
        setActive(true);
      }
    }
    navStatus();
    window.addEventListener("resize", navStatus);
  }, []);
  return (
    <section id="home" className="oakland_section">
      {/* <div className="oakland_section__weaper__overlay__navbar">
        <div className="oakland_section__weaper__overlay__navbar__left">
          <img
            className="oakland_section__weaper__overlay__navbar__left__logo"
            src={signlogo}
            alt=""
          />
        </div>

        {active ? (
          <div
            navigate={navigate}
            setActive={setActive}
            className="oakland_section__weaper__overlay__navbar__right"
          >
            <a href="#home" className="navbar__style">
              Home
            </a>
            <a href="#first__section__header" className="navbar__style">
              About Us
            </a>
            <a href="#feature" className="navbar__style">
              Features
            </a>
            <a href="#contact" className="navbar__style">
              Contact Us
            </a>
          </div>
        ) : null}
        <button
          className="menu__btn"
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? (
            <X width={30} color="#b29c3f" />
          ) : (
            <Menu width={30} color="#b29c3f" />
          )}
        </button>
      </div> */}
    </section>
  );
}
