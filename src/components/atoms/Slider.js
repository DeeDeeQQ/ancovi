import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "react-emotion";
import Slidebox from "./Slidebox";

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
      <Slidebox
        src={"./images/Run_5_wo_metadata_h264420_720p_UHQ.mp4"}
        text={"Strategies that works"}
        id={"Slide.1"}
      />
      <div>
        <video
          role="presentation"
          preload="auto"
          width="100%"
          height="auto"
          autoPlay="autoplay"
          loop
          src="./images/Video%20Of%20People%20Walking.mp4"
        />
      </div>
    </Slider>
  </MainSlideDiv>
);

export default Slide;

const MainSlideDiv = styled("div")`
  max-height: 700px;
  overflow: hidden;
  background-color: yellow;
`;
