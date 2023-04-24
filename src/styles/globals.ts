import Image from "next/image";
import styled, { css } from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  position: relative;
  width: 100%;
`;

export const MainContentDiv = styled.div`
  margin: 0 0 auto;
`;

const Container = css`
  padding: 0 0.875rem;
  width: 100%;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    padding: 0 1.25rem;
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

export const FooterFooter = styled.footer`
  color: #fff;
  background-color: rgba(30, 30, 38);
`;

export const FooterDiv = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  @media (min-width: 768px) {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    flex-direction: row;
  }
  ${Container}
`;

export const FooterP = styled.p`
  text-align: left;
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
`;

export const FooterSpan = styled.span`
  display: inline-flex;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-top: 0;
    justify-content: start;
  }
`;

export const FooterA = styled.a`
  cursor: pointer;
`;

export const NavbarWrapper = styled.div`
  position: fixed;
  display: block;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: transparent;
  z-index: 1000;
`;

export const NavbarDiv = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  ${Container}
`;

export const NavbarBrandA = styled.a`
  text-decoration: none;
`;

export const NavbarBrandImg = styled(Image)`
  width: 9rem;
  height: auto;

  @media (min-width: 768px) {
    width: 11rem;
  }
`;

export const NavbarNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLinkA = styled.a`
  padding: 0rem 2.5rem 0rem 1rem;
  color: #fff;
  font-size: 1.125rem;
  line-height: 1.3;
  font-weight: 600;
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  text-align: left;
  margin-left: auto;
  margin-right: auto;

  :hover {
    color: #ffc919;
  }
`;

export const CTADiv = styled.div`
  margin-left: 1rem;
`;

export const CTAA = styled.a`
  max-width: none;
  min-width: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  max-height: 48px;
  max-width: 180px;
  min-height: 48px;
  min-width: auto;
  padding: 0rem 1.4rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #ffa600;
  border-radius: 0.5rem;
  box-shadow: inset 0 0 8px 4px hsla(39, 100%, 50%, 0.2),
    inset 0 0 8px 4px hsla(39, 100%, 50%, 0.2);
  color: #ffa600;
  font-size: 1.125rem;
  line-height: 1.6;
  text-decoration: none;
  :hover {
    color: #fff;
    background-color: #ffa600;
  }
`;

export const CTAInnerDiv = styled.div`
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;
