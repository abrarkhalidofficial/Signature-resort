import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  locctionswiperimg,
  locctionswiperimg1,
  locctionswiperimg2,
  locctionswiperimg3,
  locctionswiperimg4,
  locctionswiperimg5,
} from "../assets";
import React from "react";

export function locationpointer() {
  return (
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
  );
}
