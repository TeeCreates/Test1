import { Link } from "react-router-dom";
import { WiStars } from "react-icons/wi";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/Work">Work</StyledLink>
      <StyledLink to="About">About</StyledLink>
      <WiStars size={30} />
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.div`
  position: absolute;
  right: 0px;
  margin-right: 70px;
  display: flex;
  margin-top: 5px;
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
  }
`;
