import {
  CTAA,
  CTADiv,
  CTAInnerDiv,
  NavLinkA,
  NavbarBrandA,
  NavbarBrandImg,
  NavbarDiv,
  NavbarNav,
  NavbarWrapper,
} from "@/styles/globals";
import brandImg from "@/assets/MV_Logo_White.png";
export const Navigation = () => {
  return (
    <NavbarWrapper>
      <NavbarDiv>
        <NavbarBrandA>
          <NavbarBrandImg
            loading="lazy"
            src={brandImg}
            alt={"MonkeVentures Logo"}
          ></NavbarBrandImg>
        </NavbarBrandA>
        <NavbarNav>
          <NavLinkA>
            About
          </NavLinkA>
          <NavLinkA>
            Thesis
          </NavLinkA>
          <NavLinkA>
            Portfolio
          </NavLinkA>
          <NavLinkA>
            Contact
          </NavLinkA>
          <CTADiv>
            <CTAA href="https://app.monkeventures.io">
              <CTAInnerDiv>
                Launch App
              </CTAInnerDiv>
            </CTAA>
          </CTADiv>
        </NavbarNav>
      </NavbarDiv>
    </NavbarWrapper>
  );
};
