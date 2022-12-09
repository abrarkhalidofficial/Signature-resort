import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import React from "react";
import { ourproject } from "../components/ourproject";
import { aboutjseven } from "../components/aboutjseven";
import { nextpagelink } from "../components/nextpagelink";
import { locationfeatures } from "../components/locationfeatures";
import { locationpointer } from "../components/locationpointer";
import { ourbest } from "../components/ourbest";
import { most__luxury } from "../components/most__luxury";
import { homesection } from "../components/homesection";
import { useNavigate } from "react-router-dom";
export default function Index() {
  AOS.init();
  const navigate = useNavigate();
  return (
    <>
      {homesection()}
      {most__luxury()}
      {ourbest()}
      {locationpointer()}
      {locationfeatures()}
      {nextpagelink()}
      {aboutjseven()}
      {ourproject()}
    </>
  );
}
