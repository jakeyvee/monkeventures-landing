import {
  NavbarBrandA,
  NavbarBrandImg,
  NavbarDiv,
  NavbarNav,
} from "@/styles/globals";
import brandImg from "@/assets/MV_Logo_White.png";
export const Navigation = () => {
  return (
    <NavbarNav>
      <NavbarDiv>
        <NavbarBrandA>
          <NavbarBrandImg
            loading="lazy"
            src={brandImg}
            alt={"MonkeVentures Logo"}
          ></NavbarBrandImg>
        </NavbarBrandA>
      </NavbarDiv>
    </NavbarNav>
  );
};
