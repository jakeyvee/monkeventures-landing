import styled from "styled-components";
import { HeroContentButtonA } from "./landing/hero";

export const ContactContentWrapper = styled.div`
  display: grid;
  padding-bottom: 2.25rem !important;
  @media (min-width: 768px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

export const ContactContentBodyWrapper = styled.div`
  max-width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 768px) {
    margin: 0 auto;
    grid-column: span 6 / span 6;
  }
`;

export const ContactContentBodyP = styled.p`
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.05;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const ContactContentImgWrapper = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    grid-column: span 6 / span 6;
    display: flex;
  }

  animation: spin 24s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ContactContentButton = styled(HeroContentButtonA)`
  width: 100%;
`;
