import styled from "styled-components";

const SliderContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 100px 30px;
  background: linear-gradient(90deg, #111, #000, #121212);
  display: grid;
  place-content: center;

  h1 {
    text-transform: capitalize;
    width: 100%;
  }
  h2 {
    font-size: 2rem;
    color: var(--text2);
  }
  h1:first-child {
    color: var(--text2);
    transition: 600ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    @media screen and (max-width: 620px) {
      font-size: 3rem;
    }
    &:hover {
      color: #a8b2ca;
      cursor: pointer;
    }
  }
  h1:nth-child(2) {
    color: var(--secondary);
    transition: 600ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    @media screen and (max-width: 620px) {
      font-size: 3rem;
    }
    &:hover {
      color: #f187a0;
      cursor: pointer;
    }
  }
  h1:nth-child(3) {
    color: transparent;
    transition: 600ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    -webkit-text-stroke-color: #f2f6f7;
    -webkit-text-stroke-width: 2px;
    @media screen and (max-width: 620px) {
      font-size: 3rem;
    }
    &:hover {
      -webkit-text-stroke-color: #9fd6ce;
      -webkit-text-stroke-width: 2px;
      cursor: pointer;
    }
  }
`;
export { SliderContainer };
