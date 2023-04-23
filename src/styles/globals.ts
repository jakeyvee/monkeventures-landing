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
  width: 100%;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
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

// <footer className="text-gray-600 body-font"  style={{ backgroundColor: "rgba(30,30,38)" }}>
// <div className="container px-5 py-3 lg:py-5 mx-auto flex items-center sm:flex-row flex-col">

export const FooterFooter = styled.footer`
  color: #fff;
  background-color: rgba(30, 30, 38);
`;

export const FooterDiv = styled.div`
  padding: 0.875rem 1.25rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  @media (min-width: 768px) {
    padding: 1.25rem;
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

export const NavbarNav = styled.nav`
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
  ${Container}
`;

export const NavbarBrandA = styled.a`
  position: relative;
  float: left;
  text-decoration: none;
`;

export const NavbarBrandImg = styled(Image)`
  width: 11rem;
  height: auto;
`;
