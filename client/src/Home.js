import meemoji from "./assets/meemoji.png";
import styled from "styled-components";

export const Home = () => {
  return (
    <IntroWrapper>
      <div>
        <Img src={meemoji} alt="" />
        <H1>Hi,</H1>
        <H1>I'm Thajanah,</H1>
        <H1>Full-Stack Web Developer</H1>
      </div>
    </IntroWrapper>
  );
};

const Img = styled.img`
  position: relative;
  border-radius: 50%;
  border: dotted 8px #7847e3;
  left: 250px;
  top: 40px;
`;

const IntroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 98%;
  height: 90%;
  justify-content: center;
  align-items: center;
  top: 200px;
`;

const H1 = styled.h1`
  font-size: 50px;
`;
