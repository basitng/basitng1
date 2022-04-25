import styled from "styled-components";

const SkillsSection = styled.div`
  width: 100%;
  padding: 100px;
  background-image: url("/assets/media/bg3.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  @media screen and (max-width: 620px) {
    padding: 80px 20px;
  }
  div:nth-child(1) {
    display: grid;
    place-content: center;
    text-align: center;
    h4 {
      font-size: 1.3rem;
      font-family: "header";
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.5);
    }
    h1 {
      font-size: 2.8rem;
      max-width: 100%;
      padding: 0 150px;
      display: block;
      text-align: center;
      @media screen and (max-width: 620px) {
        padding: 0;
        width: 100%;
        font-size: 2rem;
        color: #121212;
      }
    }
  }
`;
const SkillsGrid = styled.div`
  padding-top: 5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const SkillCard = styled.div`
  background-color: #ccc;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: grid;
  place-content: center;
`;

export { SkillsSection, SkillCard, SkillsGrid };
