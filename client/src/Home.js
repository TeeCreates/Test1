import meemoji from "./assets/meemoji.png";
import styled from "styled-components";

export const Home = () => {
  return (
    <IntroWrapper>
      <Img src={meemoji} alt="" />
      <TextContainer>
        <H1>Hi,</H1>
        <H1>I'm Thajanah,</H1>
        <Role>
          <H1>Full-Stack </H1>
          <H1>Web Developer</H1>
        </Role>
      </TextContainer>
    </IntroWrapper>
  );
};

const Img = styled.img`
  height: 180px;
  width: 180px;
  position: relative;
  border-radius: 50%;
  border: dotted 8px #7847e3;
  top: 40px;
  margin-bottom: 40px;
`;

const IntroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 98%;
  height: 90%;
  /* justify-content: center;
  align-items: center; */
  top: 190px;

  @media (max-width: 700px) {
    top: 100px;
    display: flex;
  }
`;

const H1 = styled.h1`
  font-size: 50px;
  @media (max-width: 700px) {
    margin-bottom: 10px;
    margin-top: 20px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Role = styled.div`
  display: flex;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
