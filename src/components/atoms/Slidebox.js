import React from "react";
import styled from "react-emotion";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const Slide = props => (
  <MainDiv>
    <VideoDiv>
      <video
        role="presentation"
        preload="auto"
        width="100%"
        height="auto"
        autoPlay="autoplay"
        loop
        src={props.src}
      />
    </VideoDiv>
    <TextDiv />
  </MainDiv>
);

export default Slide;

const MainDiv = styled("div")`
  min-height: 100%;
`;

const TextDiv = styled("div")`
  display: flex;
  height: 700px;
  justify-content: center;
  align-items: center;
`;

const VideoDiv = styled("div")`
  position: absolute;
  min-width: 1920px;
  z-index: -1;
`;
