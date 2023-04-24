import {
    HeroContentButtonA,
    HeroContentButtonsDiv,
  HeroContentDiv,
  HeroContentH1,
  HeroContentP,
  HeroImgDiv,
  HeroImgImage,
  HeroWrapper,
} from "@/styles/landing/hero";
import heroImg from "@/assets/tree.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContentDiv>
        <HeroContentH1>
          We back disruptive <br /> crypto/Web3 companies and protocols
        </HeroContentH1>
        <HeroContentP>
          The internet defined the past few decades of innovation. We believe
          crypto/Web3 will define the next few decades.
        </HeroContentP>
        <HeroContentButtonsDiv>
            <HeroContentButtonA>
                Join our community
            </HeroContentButtonA>
            <HeroContentButtonA>
                Visit investment portal
            </HeroContentButtonA>
        </HeroContentButtonsDiv>
      </HeroContentDiv>
      <HeroImgDiv>
        <HeroImgImage src={heroImg} alt={"Hero Image"}/>
      </HeroImgDiv>
    </HeroWrapper>
  );
};
