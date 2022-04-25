import styled from "styled-components";

const About = styled.div`
  padding: 170px 70px;
  background-color: #000;
  @media screen and (max-width: 620px) {
    padding: 170px 20px;
  }
  div:nth-child(1) {
    h1 {
      font-size: 4.5rem;
      color: #fff;
      font-family: "header" !important;
      text-transform: capitalize;
      text-decoration: underline;
      font-weight: 900;
      width: 70%;
      @media screen and (max-width: 620px) {
        font-size: 2.2rem;
        width: 100%;
      }
    }
  }
  div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    padding-top: 100px;
    @media screen and (max-width: 620px) {
      grid-template-columns: repeat(1, 1fr);
    }
    p {
      line-height: 2.5rem;
      font-size: 24px;
      @media screen and (max-width: 620px) {
        padding-top: 2rem;
      }
    }
    a {
      color: #fff;
      font-size: 30px;
      display: block;
      font-weight: 900;
      text-decoration: none;
      position: relative;
      transition: 700ms cubic-bezier(0.075, 0.82, 0.165, 1);
      &:hover ::before {
        width: 40%;
      }
      &:hover {
        color: var(--secondary);
      }
    }
  }
  div {
    display: grid;
    place-content: center;
    img {
      width: 100%;
      border: none;
    }
  }
`;
export { About };
