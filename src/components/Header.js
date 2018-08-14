import React from "react";
import styled, { css } from "react-emotion";
import { Link } from "react-router-dom";

const Header = () => (
  <MainHeaderDiv>
    <Logo>
      <Link to={`/`}>
        <img src="./images/logo.png" />
      </Link>
    </Logo>

    <Menu>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/about`}>About</Link>
      </li>
      <li>
        <Link to={`/services`}>Services</Link>
      </li>
      <li>
        <Link to={`/AFC`}>Aerial Firefighting Capability</Link>
      </li>
      <li>
        <Link to={`/contact`}>Contacts</Link>
      </li>
    </Menu>
  </MainHeaderDiv>
);

export default Header;

const MainHeaderDiv = styled("div")`
  background-color: #f2f2f2;
  margin: 0;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled("div")``;

const Menu = styled("ul")`
  display: flex;
  list-style-type: none;
  & > li {
    margin-left: 50px;
  }
`;
