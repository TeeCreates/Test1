import { Link } from "react-router-dom";
import { WiStars } from "react-icons/wi";
import styled from "styled-components";
import { useState } from "react";

const Navbar = () => {
  const [extendNavBar, setExtendNavbar] = useState(false);
  return (
    <Container extendNavBar={extendNavBar}>
      <NavWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/Work">Work</StyledLink>
        <StyledLink to="About">About</StyledLink>
        <StyledLink>
          <WiStars size={30} />
        </StyledLink>
      </NavWrapper>

      <ExtendContainter>
        <OpenTabsButton
          onClick={() => {
            setExtendNavbar((curr) => !curr);
            console.log(extendNavBar, "extend?");
          }}
        >
          {extendNavBar ? <>&#10005;</> : <>&#8801;</>}
        </OpenTabsButton>
        {extendNavBar && (
          <ExtendedNavbar>
            <ExtendedLinks to="/">Home</ExtendedLinks>
            <ExtendedLinks to="/Work">Work</ExtendedLinks>
            <ExtendedLinks to="About">About</ExtendedLinks>
            <ExtendedLinks>
              <WiStars size={30} />
            </ExtendedLinks>
          </ExtendedNavbar>
        )}
      </ExtendContainter>
    </Container>
  );
};
export default Navbar;

const Container = styled.div`
  /* height: ${(props) => (props.extendNavBar ? "100vh" : "80px")}; */
`;

const NavWrapper = styled.nav`
  display: none;

  /* box-sizing: border-box;
  width: 100vw;
  height: 100px;
  position: absolute;
  display: flex;
  flex-direction: column;

  align-items: flex-end;
  margin-top: 5px; */

  @media (min-width: 700px) {
    /* display: none; */
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 30px;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
  font-size: 24px;
  color: black;
  cursor: pointer;
  font-family: "Merriweather";
  :hover {
    text-decoration: underline #7847e3 5px;
    ${(props) =>
      props.extendNavBar
        ? "  background-color: #CBC3E3t"
        : "text-decoration: underline #7847e3 5px"};
  }
`;

const OpenTabsButton = styled.button`
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

const ExtendedNavbar = styled.div`
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: black;
  position: relative;
  left: -10px;
`;

const ExtendContainter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    display: none;
  }
`;

const ExtendedLinks = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  width: 100%;

  :hover {
    background-color: #dcd0ff;
    color: black;
  }
`;
