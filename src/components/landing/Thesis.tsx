import { SectionHeadingH2, SectionWrapperDiv } from "@/styles/landing/section";
import { ThesisContentP, ThesisContentUl } from "@/styles/landing/thesis";
import React from "react";

const Thesis = () => {
  return (
    <SectionWrapperDiv>
      <SectionHeadingH2>Our Thesis</SectionHeadingH2>
      <ThesisContentP>
        At the core of every investment, we focus on three main fundamental
        pillars:
      </ThesisContentP>
      <ThesisContentUl>
        <li>Superior value proposition vs incumbent solution</li>
        <li>Visible product-market fit</li>
        <li>Top-tier team</li>
      </ThesisContentUl>
      <br></br>
      <ThesisContentP>
        Our focus and expertise in applying fundamental analysis to cryptoassets
        separates us from the rest. We adopt an active approach and partner with
        teams to bootstrap necessary network effects for them to scale. At the
        same time, we provide invaluable thought leadership and guidance on
        critical aspects such as token economics, governance scaling and
        community building. We believe investing is more than just a standalone
        transaction and we are in this for the long term with our founders.
      </ThesisContentP>
    </SectionWrapperDiv>
  );
};

export default Thesis;
