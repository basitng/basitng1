import React from "react";
import Image from "next/image";
import { SkillCard, SkillsGrid, SkillsSection } from "./Skills.styled";

export default function _Skills() {
  return (
    <SkillsSection>
      <div>
        <h4>My skills</h4>
        <h1>
          As a great developer, I Keep up with the latest trends in my stack.
          Check out my skills set
        </h1>
      </div>
      <SkillsGrid>
        <SkillCard>
          <Image
            src={"/assets/media/png/001-html.png"}
            width={"50%"}
            height={"50%"}
          />
        </SkillCard>
        <SkillCard>
          <Image
            src={"/assets/media/png/002-physics.png"}
            width={"50%"}
            height={"50%"}
          />
        </SkillCard>
        <SkillCard>
          <Image
            src={"/assets/media/png/003-css.png"}
            width={"50%"}
            height={"50%"}
          />
        </SkillCard>
        <SkillCard>
          <Image
            src={"/assets/media/png/004-sass.png"}
            width={"50%"}
            height={"50%"}
          />
        </SkillCard>
        <SkillCard>
          <Image
            src={"/assets/media/png/005-typescript.png"}
            width={"50%"}
            height={"50%"}
          />
        </SkillCard>
        <SkillCard>
          <Image
            src={"/assets/media/png/006-github.png"}
            width={"50%"}
            height={"50%"}
          />
        </SkillCard>
        <SkillCard>
          <Image
            src={"/assets/media/png/007-nodejs.png"}
            width={"50%"}
            height={"50%"}
          />
        </SkillCard>
        <SkillCard>
          <Image
            src={"/assets/media/png/008-docker.png"}
            width={"50%"}
            height={"50%"}
          />
        </SkillCard>
        <SkillCard>
          <Image
            src={"/assets/media/png/009-javascript.png"}
            width={"50%"}
            height={"50%"}
          />
        </SkillCard>
        <SkillCard>
          <Image
            src={"/assets/media/png/010-git.png"}
            width={"50%"}
            height={"50%"}
          />
        </SkillCard>
        <SkillCard>
          <Image
            src={"/assets/media/next-js-seeklogo.com.svg"}
            width={"70%"}
            height={"70%"}
          />
        </SkillCard>
      </SkillsGrid>
    </SkillsSection>
  );
}
