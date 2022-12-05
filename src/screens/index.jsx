import { NavLink } from "react-router-dom";
import React from "react";
import {
  homesectionimg,
  locationfeaturesimg,
  aboutjsevenimg,
  mostluxuryimg,
  mostluxuryright,
  basedright,
  basedleft,
  swiperimg,
  swiperimg1,
  swiperimg2,
  swiperimg3,
  swiperimg4,
  swiperimg5,
  locctionswiperimg,
  locctionswiperimg1,
  locctionswiperimg2,
  locctionswiperimg3,
  locctionswiperimg4,
  locctionswiperimg5,
  nextpageimg,
} from "../assets/index.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Index() {
  AOS.init();
  return (
    <>
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
                <span> Most luxury </span> resorts for more discering Customers
              </div>
              <div
                className="homesection__left__info"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1500"
              >
                Dream Home is a gated community with a great location. Located
                downtown, you’re within walking distance of Parks, and the best
                shopping, dining and entertainment Getting around is a breeze,
                with easy access to freeways, buses and trolleys. . Laundry is
                available on premises.
              </div>
              <button
                className="homesection__left__button"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1600"
                to="/suitsfeatures"
              >
                Lead form
              </button>
            </div>
          </div>
          <div className="homesection__right">
            <div className="homesection__right__content">
              <div
                className="homesection__right__img"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1100"
              >
                <img src={homesectionimg} alt="homesectionimg" />
              </div>
              <div
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
      <section className="most__luxury">
        <div className="most__luxury__content">
          <div className="most__luxury__left">
            <div
              className="most__luxury__left__img"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                className="mostluxryimg"
                src={mostluxuryimg}
                alt="mostluxuryimg"
              />
            </div>
          </div>
          <div className="most__luxury__right">
            <div className="most__luxury__right__content">
              <div
                className="most__luxury__right__main__heading"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <span>Most luxury </span> resorts for more discering
              </div>
              <div
                className="most__luxury__right__info"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                Dream Home is a gated community with a great location. Located
                downtown, you’re within walking distance of Parks, and the best
                shopping, dining and entertainment Getting around is a breeze,
                with easy access to freeways, buses and trolleys. . Laundry is
                available on premises.Dream Home is a gated community with a
                great location. Located downtown, you’re within walking distance
                of Parks, and the best shopping, dining and entertainment
                Getting around is a breeze, with easy access to freeways, buses
                and trolleys. . Laundry is available on premises.
              </div>
              <button
                className="most__luxury__right__button"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                Read More
              </button>
              <div
                className="most__luxury__right__pics"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1500"
              >
                <div className="most__luxury__right__picture">
                  <img
                    className="most__luxury__right__image"
                    src={mostluxuryright}
                    alt="mostluxuryright"
                  />
                </div>
                <div className="most__luxury__right__picture">
                  <img
                    className="most__luxury__right__image"
                    src={mostluxuryright}
                    alt="mostluxuryright"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourbest">
        <div className="ourbest__content">
          <div className="ourbest__left">
            <div className="ourbest__left__content">
              <div
                className="ourbest__left__text"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                Our best luxury features
              </div>
              <div
                className="ourbest__left__heading"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <span>Pakistan first</span> theme based resort
              </div>

              <div className="our__best__luxury__card__card_main">
                <div
                  className="our__best__luxury__card"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="our__best__luxury__card__left">
                    <img
                      className="our__best__luxury__card__left__img"
                      src={basedleft}
                      alt="basedleft"
                    />
                  </div>
                  <div className="our__best__luxury__card__right">
                    <div className="our__best__luxury__card__right__text">
                      Club facility
                    </div>
                    <div className="our__best__luxury__card__right__para">
                      Dream Home is a gated community with a great location
                      located downtown.
                    </div>
                  </div>
                </div>
                <div
                  className="our__best__luxury__card"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="our__best__luxury__card__left">
                    <img
                      className="our__best__luxury__card__left__img"
                      src={basedleft}
                      alt="basedleft"
                    />
                  </div>
                  <div className="our__best__luxury__card__right">
                    <div className="our__best__luxury__card__right__text">
                      Club facility
                    </div>
                    <div className="our__best__luxury__card__right__para">
                      Dream Home is a gated community with a great location
                      located downtown.
                    </div>
                  </div>
                </div>
                <div
                  className="our__best__luxury__card"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="our__best__luxury__card__left">
                    <img
                      className="our__best__luxury__card__left__img"
                      src={basedleft}
                      alt="basedleft"
                    />
                  </div>
                  <div className="our__best__luxury__card__right">
                    <div className="our__best__luxury__card__right__text">
                      Club facility
                    </div>
                    <div className="our__best__luxury__card__right__para">
                      Dream Home is a gated community with a great location
                      located downtown.
                    </div>
                  </div>
                </div>
                <div className="our__best__luxury__card">
                  <div className="our__best__luxury__card__left">
                    <img
                      className="our__best__luxury__card__left__img"
                      src={basedleft}
                      alt="basedleft"
                    />
                  </div>
                  <div className="our__best__luxury__card__right">
                    <div className="our__best__luxury__card__right__text">
                      Club facility
                    </div>
                    <div className="our__best__luxury__card__right__para">
                      Dream Home is a gated community with a great location
                      located downtown.
                    </div>
                  </div>
                </div>
                <div className="our__best__luxury__card">
                  <div className="our__best__luxury__card__left">
                    <img
                      className="our__best__luxury__card__left__img"
                      src={basedleft}
                      alt="basedleft"
                    />
                  </div>
                  <div className="our__best__luxury__card__right">
                    <div className="our__best__luxury__card__right__text">
                      Club facility
                    </div>
                    <div className="our__best__luxury__card__right__para">
                      Dream Home is a gated community with a great location
                      located downtown.
                    </div>
                  </div>
                </div>
                <div className="our__best__luxury__card">
                  <div className="our__best__luxury__card__left">
                    <img
                      className="our__best__luxury__card__left__img"
                      src={basedleft}
                      alt="basedleft"
                    />
                  </div>
                  <div className="our__best__luxury__card__right">
                    <div className="our__best__luxury__card__right__text">
                      Club facility
                    </div>
                    <div className="our__best__luxury__card__right__para">
                      Dream Home is a gated community with a great location
                      located downtown.
                    </div>
                  </div>
                </div>
                <div className="our__best__luxury__card">
                  <div className="our__best__luxury__card__left">
                    <img
                      className="our__best__luxury__card__left__img"
                      src={basedleft}
                      alt="basedleft"
                    />
                  </div>
                  <div className="our__best__luxury__card__right">
                    <div className="our__best__luxury__card__right__text">
                      Club facility
                    </div>
                    <div className="our__best__luxury__card__right__para">
                      Dream Home is a gated community with a great location
                      located downtown.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="ourbest__right"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="ourbest__right__content">
              <img
                className="ourbest__right__img"
                src={basedright}
                alt="basedright"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="locationpointer">
        <div className="locationpointer__left">
          <div className="locationpointer__left__Content">
            <div
              className="swiper__all"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <img
                    className="locationpointer__swipe__img"
                    src={locctionswiperimg}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="locationpointer__swipe__img"
                    src={locctionswiperimg1}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="locationpointer__swipe__img"
                    src={locctionswiperimg2}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="locationpointer__swipe__img"
                    src={locctionswiperimg3}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="locationpointer__swipe__img"
                    src={locctionswiperimg4}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="locationpointer__swipe__img"
                    src={locctionswiperimg5}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="locationpointer__swipe__img"
                    src={locctionswiperimg}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="locationpointer__swipe__img"
                    src={locctionswiperimg1}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="locationpointer__swipe__img"
                    src={locctionswiperimg2}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="locationpointer__swipe__img"
                    src={locctionswiperimg3}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="locationpointer__swipe__img"
                    src={locctionswiperimg4}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="locationpointer__swipe__img"
                    src={locctionswiperimg5}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="locationpointer__right">
          <div className="locationpointer__right__content">
            <div
              className="locationpointer__right__heading"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <span> Location </span> pointer
            </div>
            <div className="locationpointer__right__info">
              <div
                className="locationpointer__right__info__tag"
                href="#"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <span>1.</span> Tourism highway 0 km
              </div>
              <div
                className="locationpointer__right__info__tag"
                href="#"
                data-aos="fade-up"
                data-aos-delay="55"
                data-aos-duration="1200"
              >
                <span>2.</span> Patriata Chairlift just 1.5 km away
              </div>
              <div
                className="locationpointer__right__info__tag"
                href="#"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                <span>3.</span> Gloria Jean located at just 7 km
              </div>
              <div
                className="locationpointer__right__info__tag"
                href="#"
                data-aos="fade-up"
                data-aos-delay="65"
                data-aos-duration="1400"
              >
                <span>4.</span> Murree Express way just at 7 km
              </div>
              <div
                className="locationpointer__right__info__tag"
                href="#"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1500"
              >
                <span>5.</span> McDonald’s Murree 8 km
              </div>
              <div
                className="locationpointer__right__info__tag"
                href="#"
                data-aos="fade-up"
                data-aos-delay="75"
                data-aos-duration="1600"
              >
                <span>6.</span> Mall Road 12 km
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="locationfeatures" id="features">
        <div className="locationfeatures__content">
          <div className="locationfeatures__left">
            <div className="locationfeatures__left__content">
              <div
                className="locationfeatures__left__heading"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <span> Location </span> features
              </div>
              <div
                className="locationfeatures__left__info"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                Dream Home is a gated community with a great location. Located
                downtown, you’re within walking distance of Parks, and the best
                shopping, dining and entertainment Getting around is a breeze,
                with easy access to freeways, buses and trolleys. . Laundry is
                available on premises.
              </div>
              <div className="locationfeatures__left__points">
                <div
                  href="#"
                  className="locationfeatures__left__points__tags"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1100"
                >
                  <span className="spanpoint">.</span> Located just in front of
                  tourism highway.
                </div>
                <div
                  href="#"
                  className="locationfeatures__left__points__tags"
                  data-aos="fade-up"
                  data-aos-delay="55"
                  data-aos-duration="1200"
                >
                  <span className="spanpoint">.</span> Located just in front of
                  tourism highway.
                </div>
                <div
                  href="#"
                  className="locationfeatures__left__points__tags"
                  data-aos="fade-up"
                  data-aos-delay="60"
                  data-aos-duration="1300"
                >
                  <span className="spanpoint">.</span> Located just in front of
                  tourism highway.
                </div>
              </div>
              <button
                className="locationfeatures__left__button"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                Read More
              </button>
            </div>
          </div>
          <div
            className="locationfeatures__right"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="locationfeatures__right__content">
              <div className="locationfeatures__right__img">
                <img src={locationfeaturesimg} alt="locationfeaturesimg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="nextpagelink">
        <div className="Overlay__Cards">
          <div
            className="Overlay__Card__con"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="overlay__img">
              <NavLink to="/suitsfeatures">
                <div href="suitsfeatures" className="Overlay__Card__img">
                  <img src={nextpageimg} alt="overlaycard" />
                </div>
              </NavLink>
              <div className="overlay__heading">Hotel Apartment</div>
            </div>
          </div>
          <div
            className="Overlay__Card__con"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="overlay__img">
              <NavLink to="/suitsfeatures">
                <div href="suitsfeatures" className="Overlay__Card__img">
                  <img src={nextpageimg} alt="overlaycard" />
                </div>
              </NavLink>
              <div className="overlay__heading">Hotel Apartment</div>
            </div>
          </div>
          <div
            className="Overlay__Card__con"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="overlay__img">
              <NavLink to="/suitsfeatures">
                <div href="suitsfeatures" className="Overlay__Card__img">
                  <img src={nextpageimg} alt="overlaycard" />
                </div>
              </NavLink>
              <div className="overlay__heading">Hotel Apartment</div>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutjseven" id="about">
        <div className="aboutjseven__content">
          <div
            className="aboutjseven__left"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="aboutjseven__left__content">
              <div className="aboutjseven__left__img">
                <img src={aboutjsevenimg} alt="aboutjsevenimg" />
              </div>
            </div>
          </div>
          <div className="aboutjseven__right">
            <div className="aboutjseven__right__content">
              <div
                className="aboutjseven__right__heading"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
              >
                <span> About </span> J7
              </div>
              <div
                className="aboutjseven__right__info"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1200"
              >
                Dream Home is a gated community with a great location. Located
                downtown, you’re within walking distance of Parks, and the best
                shopping, dining and entertainment Getting around is a breeze,
                with easy access to freeways, buses and trolleys. . Laundry is
                available on premises.Dream Home is a gated community with a
                great location. Located downtown, you’re within walking distance
                of Parks, and the best shopping, dining and entertainment
                Getting around is a breeze, with easy access to freeways, buses
                and trolleys. . Laundry is available on premises.
              </div>
              <button
                className="aboutjseven__right__button"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1200"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="ourproject" id="contact">
        <div className="ourproject__content">
          <div className="ourproject__left">
            <div className="ourproject__left__content">
              <div className="ourproject__left__heading">
                <span> Other </span> Projects
              </div>
            </div>
          </div>
          <div className="ourproject__right">
            <div>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <img
                    className="ourproject__swiper__img"
                    src={swiperimg}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="ourproject__swiper__img"
                    src={swiperimg2}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="ourproject__swiper__img"
                    src={swiperimg3}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="ourproject__swiper__img"
                    src={swiperimg4}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="ourproject__swiper__img"
                    src={swiperimg5}
                    alt=" swiperimg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
