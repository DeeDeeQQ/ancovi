import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "react-emotion";
import { FormattedMessage } from "react-intl";

var settings = {
  className: "slider",
  dots: false,
  autoplay: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Slide = () => (
  <MainSlideDiv>
    <Slider {...settings}>
      <MainDiv>
        <VideoDiv>
          <video
            role="presentation"
            preload="auto"
            width="100%"
            height="auto"
            // autoPlay="autoplay"
            loop
            src="./images/Run_5_wo_metadata_h264420_720p_UHQ.mp4"
          />
        </VideoDiv>
        <TextDiv>
          <h2>
            <p>
              <FormattedMessage
                id="Slider.slide1_highlight"
                defaultMessage="Strategies"
              />
            </p>

            <FormattedMessage
              id="Slider.slide1_text"
              defaultMessage="that work"
            />
          </h2>
        </TextDiv>
      </MainDiv>
      <MainDiv>
        <VideoDiv>
          <video
            role="presentation"
            preload="auto"
            width="100%"
            height="auto"
            autoPlay="autoplay"
            loop
            src="./images/Video%20Of%20People%20Walking.mp4"
          />
        </VideoDiv>
        <TextDiv>
          <h2>
            <p>
              <FormattedMessage
                id="Slider.slide2_highlight"
                defaultMessage="Advice"
              />
            </p>

            <FormattedMessage
              id="Slider.slide2_text"
              defaultMessage="you can rely on"
            />
          </h2>
        </TextDiv>
      </MainDiv>
      <MainDiv>
        <VideoDiv>
          <video
            role="presentation"
            preload="auto"
            width="100%"
            height="auto"
            autoPlay="autoplay"
            loop
            src=""
          />
        </VideoDiv>
        <TextDiv>
          <h2>
            <p>
              <FormattedMessage
                id="Slider.slide3_highlight"
                defaultMessage="Experts"
              />
            </p>

            <FormattedMessage
              id="Slider.slide3_text"
              defaultMessage="Who've been there"
            />
          </h2>
        </TextDiv>
      </MainDiv>
    </Slider>
  </MainSlideDiv>
);

export default Slide;

const MainSlideDiv = styled("div")`
  overflow: hidden;
`;

const MainDiv = styled("div")`
  min-height: 100%;
`;

const TextDiv = styled("div")`
  display: flex;
  flex-direction: column;
  height: 700px;
  justify-content: center;
  align-items: center;
  & > h2 {
    text-transform: uppercase;
    text-align: center;
    font-size: 2.5em;
    & > p {
      color: #dd693d;
      font-size: 2em;
      margin: 0;
    }
  }
`;

const VideoDiv = styled("div")`
  position: absolute;
  min-width: 1920px;
  z-index: -1;
`;
