import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Banner } from "./Banner.styled";
import gsap from "gsap";

export default function _Banner() {
  const rh1 = useRef();
  let q = gsap.utils.selector(rh1);
  const rA = useRef();

  // after dom has been rendered
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      q("span"),
      {
        opacity: 0,
        display: "block",
        y: 500,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: "sine.out",
        y: 0,
        stagger: 0.3,
      }
    ).fromTo(
      rA.current,
      {
        transform: "translateY(50px) rotate(-45deg)",
        opacity: 0,
      },
      {
        opacity: 1,
        transform: "translateY(0) rotate(0)",
        duration: 1.5,
        ease: "power4.out",
      }
    );
  });
  return (
    <Banner>
      <div>
        <h1 style={{ overflow: "hidden" }} ref={rh1}>
          <div className="flow">
            {" "}
            <span>Hi, I am a Ajaga Abdul-Basit </span>
          </div>
          <div className="flow">
            <span className="color-base">
              fullstack A web and mobile app developer
            </span>{" "}
          </div>
          <div className="flow">
            <span>from Lagos Nigeria.</span>
          </div>
        </h1>
        <div ref={rA}>
          <a>
            <Link href="#contact">Get in touch</Link>
          </a>
        </div>
      </div>
    </Banner>
  );
}
