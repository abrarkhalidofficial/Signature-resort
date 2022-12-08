import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  swiperimg,
  swiperimg1,
  swiperimg2,
  swiperimg3,
  swiperimg4,
  swiperimg5,
} from "../assets";
import React from "react";

export function ourproject() {
  return (
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
                  src={swiperimg1}
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
                  src={swiperimg1}
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
  );
}
