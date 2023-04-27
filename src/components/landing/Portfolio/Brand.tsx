import {
  BrandContent,
  BrandDiv,
  BrandDummy,
  BrandImgDiv,
  BrandNameDiv,
  BrandNameP,
} from "@/styles/landing/portfolio";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Brand = ({
  brandName,
  brandImg,
}: {
  brandName: string;
  brandImg: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BrandDiv
      onMouseEnter={() => setIsHovered(true)}
      onClick={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BrandDummy />
      <BrandContent>
        <BrandImgDiv>
          <Image src={brandImg} alt={brandName} fill objectFit="cover" />
        </BrandImgDiv>
        {isHovered && (
          <BrandNameDiv>
            <BrandNameP>{brandName}</BrandNameP>
          </BrandNameDiv>
        )}
      </BrandContent>
    </BrandDiv>
  );
};

export default Brand;
