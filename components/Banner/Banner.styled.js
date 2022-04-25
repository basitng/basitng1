import styled from "styled-components";

const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/media/bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
  background-size: cover;
  padding: 100px 50px;
  display: grid;
  align-items: center;
  @media screen and (max-width: 620px) {
    padding: 100px 20px;
  }
  h1 {
    font-size: 4rem;
    width: 90%;
    padding-bottom: 2rem;
    font-weight: 900;
    line-height: 5rem;
    color: #121212;
    font-family: "header";
  }
  a {
    font-family: "header";
    font-size: 2rem;
    text-decoration: none;
    &::before {
      width: 70%;
      border-radius: 0px;
    }
    &:hover ::before {
      width: 100%;
      border-radius: 10px;
    }
  }
  @media screen and (max-width: 620px) {
    h1 {
      font-size: 2rem;
      line-height: 3rem;
      width: 100%;
      min-width: 50%;
    }
  }
`;

export { Banner };
