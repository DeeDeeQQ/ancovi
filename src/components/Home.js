import React from "react";
import styled, { css } from "react-emotion";
import Slider from "./atoms/Slider";

const Home = () => (
  <MainHomeDiv>
    <Slider />
  </MainHomeDiv>
);

export default Home;

const MainHomeDiv = styled("div")`
  max-height: 600px;
  background-color: yellow;
`;
