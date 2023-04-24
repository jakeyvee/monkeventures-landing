import Image from "next/image";
import styled from "styled-components";
import { Container } from "../globals";

export const HeroWrapper = styled.div`
  display: grid;
  padding-top: 5rem !important;
  padding-bottom: 2rem !important;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    padding-top: 5rem !important;
    padding-bottom: 2rem !important;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  ${Container}
`;

export const HeroContentDiv = styled.div`
  margin-right: auto;
  place-self: center;
  @media (min-width: 768px) {
    grid-column: span 7 / span 7;
  }
`;

export const HeroContentH1 = styled.div`
  margin-bottom: 1rem;
  max-width: 42rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.025em;
  @media (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 1;
  }
`;

export const HeroContentP = styled.p`
  margin-bottom: 1.5rem;
  max-width: 42rem;
  color: #d1d5db;
  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const HeroContentButtonsDiv = styled.div`
  gap: 1rem;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const HeroContentButtonA = styled.a`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: #fff;
  border-style: solid;
  padding: 0.75rem 1.25rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  @media (min-width: 768px) {
    width: auto;
  }

  :hover {
    background-color: #fff;
    color: #000;
  }
`;

export const HeroImgDiv = styled.div`
  @media (min-width: 768px) {
    margin-top: 0;
    grid-column: span 5 / span 5;
    display: flex;
  }
`;

export const HeroImgImage = styled(Image)`
  max-width: 42rem;
`;
