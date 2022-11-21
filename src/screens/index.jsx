import { Head, Link } from "router";
import { homesectionimg, locationpointerimg } from "../assets/index.js";
import React from "react";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  return "";
};

export default function Index() {
  const data = useLoaderData();
  return (
    <>
      <section className="homesection ">
        <div className="homesection__left">
          <div className="homesection__left___content">
            <div className="homesection__left__heading">
              <span> Most luxury </span> resorts for more discering Customers
            </div>
            <div className="homesection__left__info">
              Dream Home is a gated community with a great location. Located
              downtown, you’re within walking distance of Parks, and the best
              shopping, dining and entertainment Getting around is a breeze,
              with easy access to freeways, buses and trolleys. . Laundry is
              available on premises.
            </div>
            <button className="homesection__left__button">Lead form</button>
          </div>
        </div>
        <div className="homesection__right">
          <div className="homesection__right__content">
            <div className="homesection__right__img">
              <img src={homesectionimg} alt="homesectionimg" />
            </div>
            <div className="homesection__right__button__svg">
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
      </section>
      <section className="locationpointer">
        <div className="locationpointer__left">
          <div className="locationpointer__left__Content">
            <div className="locationpointer__left__img">
              <img src={locationpointerimg} alt="locationpointerimg" />
            </div>
          </div>
        </div>
        <div className="locationpointer__right">
          <div className="locationpointer__right__content">
            <div className="locationpointer__right__heading">
              <span> Location </span> pointer
            </div>
            <div className="locationpointer__right__info">
              <a href="#">
                <span>1.</span> Tourism highway 0 km
              </a>
              <a href="#">
                <span>2.</span> Patriata Chairlift just 1.5 km away
              </a>
              <a href="#">
                <span>3.</span> Gloria Jean located at just 7 km
              </a>
              <a href="#">
                <span>4.</span> Murree Express way just at 7 km
              </a>
              <a href="#">
                <span>5.</span> McDonald’s Murree 8 km
              </a>
              <a href="#">
                <span>6.</span> Mall Road 12 km
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className=""></section>
    </>
  );
}
