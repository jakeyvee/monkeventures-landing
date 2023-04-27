import React from "react";
import { SectionHeadingH2, SectionWrapperDiv } from "@/styles/landing/section";
import { PortfolioInt } from "@/intefaces/portfolio";
import {
  BrandsGridDiv,
} from "@/styles/landing/portfolio";
import Brand from "./Brand";

const Portfolio = (props: PortfolioInt) => {
  const brands = props.brands;
  return (
    <SectionWrapperDiv>
      <SectionHeadingH2>Our Portfolio</SectionHeadingH2>
      <BrandsGridDiv>
        {brands.map((brand, idx) => (
          <Brand
            brandImg={`/portfolio/${brand.brandImg}`}
            brandName={brand.brandName}
          />
        ))}
      </BrandsGridDiv>
    </SectionWrapperDiv>
  );
};

export default Portfolio;
