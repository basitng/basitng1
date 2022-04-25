import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  padding: 20px 40px;
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  img {
    width: 200px;
  }
`;

const NavMenu = styled.div`
  display: block;
  cursor: pointer;
  div {
    width: 40px;
    height: 2px;
    margin: 4px;
    background-color: black;
  }
`;

export { NavBar, NavMenu };
