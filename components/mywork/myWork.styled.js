import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  background: #fff;
  padding: 150px;
  place-content: center;
  display: grid;
  text-align: center;
  @media screen and (max-width: 620px) {
    padding: 100px 30px;
  }
  h2 {
    color: #737479;
  }
  h1 {
    font-size: 3rem;
    text-decoration: underline;
  }
`;

const Services = styled.div`
  width: 100%;
  padding: 200px 70px;
  background-image: url("/assets/media/bg2.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: contain;
  background-attachment: scroll;
  @media screen and (max-width: 620px) {
    padding: 130px 30px;
  }
`;

const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 620px) {
    grid-template-columns: 1fr;
  }
  h1 {
    font-size: 3.6rem;
    color: #fff;
    width: 85%;
    margin-bottom: 2rem;
    @media screen and (max-width: 620px) {
      width: 100%;
      font-size: 2.8rem;
    }
  }
  a {
    font-size: 2rem;
    color: #ccc;
    transition: 500ms ease-in-out;
    text-decoration: none;
    &:hover {
      color: #fc262d;
    }
  }
  div:nth-child(2) {
    p:first-child {
      line-height: 2.5rem;
      padding-bottom: 3rem;
      width: 80%;
      font-size: 1.5rem;
      @media screen and (max-width: 620px) {
        width: 100%;
      }
    }
    p:last-child {
      line-height: 2.5rem;
      padding-bottom: 3rem;
      width: 80%;
      font-size: 1.5rem;
      @media screen and (max-width: 620px) {
        width: 100%;
      }
    }
  }
`;

const InHouse = styled.div`
  float: right;
  padding-top: 3rem;
  @media screen and (max-width: 620px) {
    float: none;
    width: 100%;
  }
  h6 {
    font-size: 1.3rem;
    font-family: "header";
    color: #fff;
    padding-right: 7rem;
    @media screen and (max-width: 620px) {
      padding-right: 0;
      padding-bottom: 0.5rem;
    }
  }
  li {
    list-style: square;
    list-style-position: outside;
    color: #737479;
    list-style-type: square;
    font-family: "header";
    /* color: #fff; */
    font-size: 1.5rem;
    cursor: pointer;
    transition: 500ms cubic-bezier(0.52, 0.53, 0.83, 0.67);
    &:hover {
      color: #fc262d;
      text-decoration: line-through;
    }
  }
`;

export { Header, Services, ServiceContainer, InHouse };
