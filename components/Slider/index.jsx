import React from "react";
import Marquee from "react-marquee-slider";
import { SliderContainer } from "./Slider.styled";

export default function _Slider() {
  return (
    <SliderContainer>
      <Marquee velocity={100} minScale={0.7} resetAfterTries={200}>
        <h1 style={{ color: "var(--secondary)" }}>Creativity is natural-</h1>
        <h1>Design & Artistic is talent-</h1>
        <h1 style={{ color: "var(--primary)" }}>Scheme & Color is Feelings-</h1>
      </Marquee>
      <h2>Shout out to my supporters</h2>
      <Marquee
        velocity={60}
        direction="ltr"
        minScale={0.7}
        resetAfterTries={200}
      >
        <h1 style={{ color: "var(--secondary)" }}>Allah-</h1>
        <h1>Gary simon-</h1>
        <h1 style={{ color: "var(--secondary)" }}>William Candillon-</h1>
        <h1>Dennis ivy-</h1>
        <h1 style={{ color: "var(--secondary)" }}>Programming with mosh-</h1>
        <h1>Flux-</h1>
        <h1>Reactive-</h1>
        <h1 style={{ color: "var(--secondary)" }}>Design course-</h1>
        <h1>The net ninjas-</h1>
      </Marquee>
    </SliderContainer>
  );
}
