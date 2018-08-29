import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";

const Header = () => (
  <MainHeaderDiv>
    <Logo>
      <Link to={`/`}>
        <img src="./images/logo.png" alt="logo" />
      </Link>
    </Logo>
  </MainHeaderDiv>
);

export default Header;

const MainHeaderDiv = styled("div")`
  background-color: #fff;
  margin: 0;
  height: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & a {
    text-decoration: none;
  }
`;

const Logo = styled("div")``;
