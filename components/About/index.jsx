import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { About } from "./About.styled";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function _AboutSection() {
  const containerRef = useRef();
  const q = gsap.utils.selector(containerRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.fromTo(
      q("span"),
      {
        opacity: 0,
        display: "block",
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
        },
        opacity: 1,
        duration: 0.8,
        ease: "sine.out",
        y: 0,
        stagger: 0.3,
      }
    );
  });

  return (
    <About ref={containerRef}>
      <div>
        <h1>
          <span className="flow">I consider myself a</span>
          <span className="flow">
            {" "}
            <span className="color-base"> problem-solving design studio.</span>
          </span>
        </h1>
      </div>
      <div>
        <Link href={"#services"}>Read & Continue</Link>

        <p>
          I believe in an intelligent, future-focused approach to
          problem-solving, where I combine creativity and data to enhance user
          experience and business performance. As a talented developer I help
          designer, strategists, and entrepreneurs helps turn big ideas into
          engaging and empowering product.
        </p>
      </div>
    </About>
  );
}
