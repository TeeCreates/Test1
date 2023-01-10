import styled from "styled-components";
import { Link } from "react-router-dom";
import { WiStars } from "react-icons/wi";
import { useState } from "react";
const Navbar2 = () => {
  const [extendNavbar, setExtendedNavbar] = useState(false);
  console.log(extendNavbar, "is navbar extended?");
  return (
    <>
      <NavbarContainer extendNavBar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer></LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <LinkStyled to="/">Home</LinkStyled>
              <LinkStyled to="/work">Work</LinkStyled>
              <LinkStyled to="/about">About</LinkStyled>
              <StarIconStyle>
                <WiStars size={30} />
              </StarIconStyle>
              <OpenLinksButton
                onClick={() => setExtendedNavbar((curr) => !curr)}
              >
                {extendNavbar ? <>&#10005;</> : <>&#8801; </>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <ExtendedLink
              onClick={() => setExtendedNavbar((curr) => !curr)}
              to="/"
            >
              Home
            </ExtendedLink>
            <ExtendedLink
              onClick={() => setExtendedNavbar((curr) => !curr)}
              to="/work"
            >
              Work
            </ExtendedLink>
            <ExtendedLink
              onClick={() => setExtendedNavbar((curr) => !curr)}
              to="/about"
            >
              About
            </ExtendedLink>
            <StarIconStyle>
              <WiStars size={30} />
            </StarIconStyle>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </>
  );
};

export default Navbar2;
const NavbarContainer = styled.nav`
  width: 100%;

  height: ${(props) => (props.extendNavBar ? "100vh" : "80px")};

  display: flex;

  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  /* background-color: red; */
`;

const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  /* background-color: blue; */
`;

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  height: 100%;
  @media (min-width: 700px) {
    display: none;
  }
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
  font-size: 24px;
  color: black;
  cursor: pointer;
  font-family: "Merriweather";
  :hover {
    text-decoration: underline #7847e3 5px;
    /* ${(props) =>
      props.extendNavBar
        ? "  background-color: #CBC3E3t"
        : "text-decoration: underline #7847e3 5px"}; */
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size: 45px;
  cursor: pointer;
  margin-right: 30px;

  @media (min-width: 700px) {
    display: none;
  }
`;

const StarIconStyle = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;

const ExtendedLink = styled(Link)`
  color: #e6e6fa;
  text-decoration: none;
  font-size: x-large;
  font-family: "Merriweather";
  margin: 10px;
  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(2);
  }
`;
