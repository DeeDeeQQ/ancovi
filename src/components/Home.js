import React from "react";
import styled, { css } from "react-emotion";

import Slider from "./atoms/Slider";
import CategoryPreview from "./atoms/MainCategoryPreview";
import About from "./atoms/About";
import Partners from "./atoms/Partners";

const Home = () => (
  <MainHomeDiv>
    <Slider />
    <CategoryPreview />
    <About />
    <Partners />
  </MainHomeDiv>
);

export default Home;

const MainHomeDiv = styled("div")``;
