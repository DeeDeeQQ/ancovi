import React from "react";
import styled, { css } from "react-emotion";

import Slider from "./atoms/Slider";
import CategoryPreview from "./atoms/MainCategoryPreview";
import About from "./atoms/About";

const Home = () => (
  <MainHomeDiv>
    <Slider />
    <CategoryPreview />
    <About />
  </MainHomeDiv>
);

export default Home;

const MainHomeDiv = styled("div")``;
