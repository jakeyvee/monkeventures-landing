import { AboutContentDiv, AboutContentP } from "@/styles/landing/about";
import { SectionHeadingH2, SectionWrapperDiv } from "@/styles/landing/section";
import React from "react";

const About = () => {
  return (
    <SectionWrapperDiv>
      <SectionHeadingH2>About Us</SectionHeadingH2>
      <AboutContentDiv>
        <AboutContentP>
          We are a collective of Web3-native designers, product leaders, business architects,
          engineers, and growth hackers. Most importantly, we supports our founders.
        </AboutContentP>
      </AboutContentDiv>
    </SectionWrapperDiv>
  );
};

export default About;
