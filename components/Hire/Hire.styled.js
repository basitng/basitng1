import styled from "styled-components";

const HireContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 150px 50px;
  background-color: #fff;
  display: grid;
  place-content: center;
  text-align: center;
  h1 {
    font-size: 3.5rem;
    padding: 0 280px;
    line-height: 3.8rem;
    padding-bottom: 1rem;
    @media screen and (max-width: 620px) {
      padding: 0;
      font-size: 2.3rem;
    }
    span {
      color: var(--secondary);
    }
  }
  h2 {
    font-size: 3rem;
    color: var(--text2);
    transition: 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
    @media screen and (max-width: 620px) {
      font-size: 1.5rem;
    }
    &:hover {
      text-decoration: underline;
      color: #777;
    }
  }
`;

export { HireContainer };
