import styled, {keyframes} from "styled-components";
import { Spiral as Hamburger } from "hamburger-react";
import getWindowDimensions from "../../commonFunctions/Dimentions";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const { width } = getWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
        {/* <Logo src="/assets/logos/logo3.png" alt="nav-logo" /> */}
        {width > 800 && <MenuLogoText >Physio Teacher</MenuLogoText>}

      </Link>

      {width < 800 && (
        <HamburgerContainer>       <Hamburger
        label="Show menu"
        size={40}
        toggled={isOpen}
        toggle={setOpen}
      ></Hamburger></HamburgerContainer>
 
      )}

      {(isOpen || width > 800) && (
        <Menu isOpen={isOpen}>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
            {" "}
            <Menulink onClick={() => setOpen(!isOpen)}>Hjem</Menulink>
          </Link>
 <Link to="about" spy={true} smooth={true} offset={-100} duration={300}>
            {" "}
            <Menulink onClick={() => setOpen(!isOpen)}>Om</Menulink>
          </Link>
          <Link to="app" spy={true} smooth={true} offset={-100} duration={300}>
            {" "}
            <Menulink onClick={() => setOpen(!isOpen)}>App</Menulink>
          </Link>
          <Link to="design" spy={true} smooth={true} offset={-100} duration={300}>
            {" "}
            <Menulink onClick={() => setOpen(!isOpen)}>Design</Menulink>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={300}>
            {" "}
            <Menulink onClick={() => setOpen(!isOpen)}>Kontakt</Menulink>
          </Link>
        </Menu>
      )}
    </Container>
  );
};

export default Navbar;



const Container = styled.div`
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-2);
  height: 5em;
  width: 100%;
  margin: 0 auto;
  z-index: 100;
  /* @media (max-width: 800px) {
    position: relative;
  } */
`;

// const Logo = styled.img`
//   max-height: 5em;
//   justify-self: start;
//   margin-left: 20px;
// `;

const animationOne = keyframes`
0%{
  opacity: 0;
},
100%{
  opacity: 1;

}

`;


const animationTwo = keyframes`
0%{
  right: -100%;
},
100%{
  right: 0;
}

`;

const Menu = styled.div`
  display: flex;
  background-color: var(--color-2);
  flex-direction: row;
  @media (max-width: 800px) {
    z-index: 100;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 60vh;
    position: absolute;
    top: 5em;
    left: auto;
    animation: ${animationTwo} .3s linear;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  }
`;


const Menulink = styled.p`
  margin: auto 1.2rem;
  font-size: 1.3rem;
  cursor: pointer;
  color: var( --color-text);
  &:hover {
    color: var(--color-1);
  }
  @media (max-width: 800px) {
    margin: 1.2rem;
    
  }
`;

const HamburgerContainer = styled.div`
  margin: auto 1.2rem;
  @media (max-width: 800px) {
    margin: 1.2rem;
    
  }
`;

const MenuLogoText = styled.h1`
  margin: auto 1.2rem;
  font-size: 1.5rem;
  color: #091922;
  transition: all 0.3s ease;
  font-family: 'Licorice', cursive;
  @media (max-width: 800px) {
    font-size: 1.2rem;
    margin: 1.2rem;
  }
`;