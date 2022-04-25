import Link from "next/link";
import React from "react";
import { Header, InHouse, ServiceContainer, Services } from "./myWork.styled";

export default function _MyWork() {
  return (
    <div>
      <Header>
        <h2>
          I offer high quality plus user friendly services to my clients both
          internationally and locally that match their scale of preference.
        </h2>
        <h1>My works</h1>
      </Header>
      <Services>
        <ServiceContainer>
          <div>
            <h1>
              At your service,{" "}
              <span className="color-base">every step of the digital way.</span>
            </h1>
            <a>
              <Link href="">Our services</Link>
            </a>
          </div>
          <div>
            <p>
              We offer strategic direction and product design for businesses
              seeking to create new products or enhance existing ones.
            </p>
            <p>
              Delivering great products is no easy task, but we’ve got your
              needs covered. With our design, strategy and tech know-how we
              deliver intuitive and custom-made solutions.
            </p>
          </div>
          <InHouse>
            <h6>In House Capabilities</h6>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI Design</li>
            <li>Remote Controls</li>
            <li>And More</li>
          </InHouse>
        </ServiceContainer>
      </Services>
    </div>
  );
}
