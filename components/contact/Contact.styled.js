import styled from "styled-components";

const ContactContainer = styled.div`
  position: fixed;
  bottom: 2%;
  left: 2%;
  display: flex;
  flex-direction: column;
  a {
    display: block;
    font-size: 1.3rem;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--text2);
    transition: 600ms cubic-bezier(0.17, 0.67, 0.67, 0.46);
    text-decoration: none;
    &::before {
      display: none;
    }
    &:hover {
      cursor: pointer;
      color: var(--secondary);
    }
  }
`;

export { ContactContainer };
