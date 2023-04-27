import Contact from "./landing/Contact";
import About from "./landing/About";
import { Hero } from "./landing/Hero";
import Portfolio from "./landing/Portfolio/Index";
import Thesis from "./landing/Thesis";
import { PortfolioInt } from "@/intefaces/portfolio";

export const Landing = (props: PortfolioInt) => {
  return (
    <>
      <Hero />
      <About />
      <Thesis />
      <Portfolio brands={props.brands}/>
      <Contact />
    </>
  );
};
