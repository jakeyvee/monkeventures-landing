import Image from "next/image";
import styled, { css } from "styled-components";
import { Container } from "../globals";

export const SectionWrapperDiv = styled.div`
  margin: 0 auto;
  padding-top: 2.25rem !important;
  padding-bottom: 2.25rem !important;
  ${Container}
`;

export const SectionHeadingH2 = styled.h2`
  color: #ffa600;
  font-weight: 600;
  margin-bottom: 1.75rem;
  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;
