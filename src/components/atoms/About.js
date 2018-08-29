import React from "react";
import styled from "react-emotion";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const About = () => (
  <AboutDiv>
    <h3>
      <FormattedMessage id="HomeAbout.h3" defaultMessage="About Us" />
    </h3>
    <p>
      <FormattedMessage
        id="HomeAbout.part1"
        defaultMessage="Ancovi International LLC has a new and cutting edge approach to
      consultancy and risk management. We believe in developing solutions with
      our clients that enable programmatic development without stifling project
      staff outreach. Our team is comprised of experts who have extensive Media,
      Commercial, Oil & Gas, and US AID implementing partner backgrounds at the
      program and country management levels."
      />

      <br />
      <br />
      <FormattedMessage
        id="HomeAbout.part2"
        defaultMessage="We know that each situation is unique. One-size-fits-all approaches will
      never help your organization reach its full potential. We deliver custom
      solutions, tailored to your program goals, your culture, your
      one-of-a-kind challenges based on our thorough analysis and on-ground
      expertise."
      />
    </p>
  </AboutDiv>
);

export default About;

const AboutDiv = styled("div")`
  display: flex;
  align-items: center;
  margin-top: 3px;
  flex-direction: column;
  background-color: #e8e8e8;
  padding: 22px 3%;
  & > h3 {
    font-size: 2em;
    color: #dd693d;
  }
  & > p {
    max-width: 1200px;
  }
`;
