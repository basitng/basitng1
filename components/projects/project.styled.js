import styled from "styled-components";

const ProjectSection = styled.div`
  width: 100%;
  padding: 150px 50px;
  background: linear-gradient(90deg, #121212, #000);
  @media screen and (max-width: 620px) {
    padding: 100px 20px;
  }
  header {
    h1 {
      font-size: 3.8rem;
      padding: 100px;
      font-family: "header";
      color: rgba(225, 225.8, 225, 0.61);
      @media screen and (max-width: 620px) {
        padding: 0px;
        font-size: 2.5rem;
        padding-bottom: 6rem;
      }
      span {
        color: var(--secondary);
      }
    }
  }
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ProjectCard = styled.div`
  width: 100%;
  background: #111;
`;
const ProjectUri = styled.div`
  a {
    font-size: 2rem;
    color: var(--text2);
    padding: 10px;
    text-decoration: none;
    position: relative;
    transition: 700ms ease-in-out;
    @media screen and (max-width: 620px) {
      font-size: 1.4rem;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      transition: 700ms ease-in-out;
      bottom: 0;
      width: 20%;
      height: 0.3rem;
      border-radius: 0;
      background: var(--secondary);
    }
    &:hover ::before {
      width: 100%;
      border-radius: 10px;
    }
    &:hover {
      color: rgba(225, 225, 225, 0.78);
    }
  }
`;
const ProjectContent = styled.div`
  padding: 7px 5px;
`;
const ProjectImage = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: zoom-out;
    transition: 900ms cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: scale(1);
    &:hover {
      transform: scale(1.6);
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export {
  ProjectSection,
  ProjectImage,
  ProjectCard,
  ProjectUri,
  Row,
  ProjectContent,
};
