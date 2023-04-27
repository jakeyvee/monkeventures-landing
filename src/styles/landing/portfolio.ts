import Image from "next/image";
import styled from "styled-components";
import { Container } from "../globals";

export const BrandsGridDiv = styled.div`
  display: grid;
  gap: 0.75rem; /* 8px */
  margin: 0 auto;

  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: 640px) {
    max-width: 640px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) {
    max-width: 768px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export const BrandDiv = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: 0.375rem;
  :hover {
    background-color: #111116;
  }
  width: 50%;
  @media (min-width: 640px) {
    width: 100%;
  }
`;

export const BrandDummy = styled.div`
  margin-top: 100%;
`;

export const BrandContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BrandImgDiv = styled.div`
  position: relative;
  width: 40%;
  height: 40%;
  margin: auto;
`;

export const BrandNameP = styled.p`
  text-align: center;
  font-weight: 600;
  color: #ffa600;
`;

export const BrandNameDiv = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 75%;
`;
