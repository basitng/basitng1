import React, { useRef } from "react";
import _NavBar from "../components/NavBar";
import _Banner from "../components/Banner";
import _AboutSection from "../components/About";
import _MyWork from "../components/mywork";
import _Skills from "../components/skills";
import _ProjectSections from "../components/projects";
import _HireMe from "../components/Hire";
import _Slider from "../components/Slider";
import _Contact from "../components/contact";
export default function Home() {
  return (
    <React.Fragment>
      <div data-scroll-section>
        <_NavBar />
        <_Banner />
        <_AboutSection />
        <_MyWork />
        <_Skills />
        <_ProjectSections />
        <_HireMe />
        <_Slider />
        <_Contact />
      </div>
    </React.Fragment>
  );
}
