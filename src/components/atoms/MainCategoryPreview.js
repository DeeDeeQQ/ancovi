import React from "react";

import styled from "react-emotion";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const CategoryPreview = () => (
  <div>
    <MainDiv>
      <Link
        to={`/srm`}
        style={{
          textDecoration: "none",
          backgroundImage: "url(./images/security.jpg)",
          backgroundSize: "cover"
        }}
      >
        <FormattedMessage
          id="CategoryPreview.srm"
          defaultMessage="SECURITY & RISK MANAGEMENT"
        />
      </Link>
      <Link
        to={`/dps`}
        style={{
          textDecoration: "none",
          backgroundImage: "url(./images/defense.jpg)",
          backgroundSize: "cover"
        }}
      >
        <FormattedMessage
          id="CategoryPreview.dps"
          defaultMessage="DEFENSE PRODUCTS & SERVICES"
        />
      </Link>
      <Link
        to={`/bes`}
        style={{
          textDecoration: "none",
          backgroundImage: "url(./images/business.jpg)",
          backgroundSize: "cover"
        }}
      >
        <FormattedMessage
          id="CategoryPreview.bes"
          defaultMessage="BUSINESS ENABLEMENT SERVICES"
        />
      </Link>

      <Link
        to={`/afc`}
        style={{
          textDecoration: "none",
          backgroundImage: "url(./images/aviation.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "right"
        }}
      >
        <FormattedMessage
          id="CategoryPreview.as"
          defaultMessage="Aviation services"
        />
      </Link>
    </MainDiv>
    <MainDiv>
      <Link
        to={`/jmgt`}
        style={{
          textDecoration: "none",
          backgroundImage: "url(./images/tracking.jpg)",
          backgroundSize: "cover"
        }}
      >
        <FormattedMessage
          id="CategoryPreview.jmgt"
          defaultMessage="JOURNEY MANAGEMENT & GLOBAL TRACKING"
        />
      </Link>
      <Link
        to={`/afc`}
        style={{
          textDecoration: "none",
          backgroundImage: "url(./images/firefight.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "left"
        }}
      >
        <FormattedMessage
          id="CategoryPreview.afc"
          defaultMessage="AERIAL FIREFIGHTING CAPABILITY"
        />
      </Link>
      <Link
        to={`/tcb`}
        style={{
          textDecoration: "none",
          backgroundImage: "url(./images/training.jpg)",
          backgroundSize: "cover"
        }}
      >
        <FormattedMessage
          id="CategoryPreview.tcb"
          defaultMessage="TRAINING & CAPACITY BUILDING"
        />
      </Link>
      <Link
        to={`/afc`}
        style={{
          textDecoration: "none",
          backgroundImage: "url(./images/logic.jpg)",
          backgroundSize: "cover"
        }}
      >
        <FormattedMessage
          id="CategoryPreview.cs"
          defaultMessage="Clear Services"
        />
      </Link>
    </MainDiv>
  </div>
);

export default CategoryPreview;

const MainDiv = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-top: 3px solid white;
  & :hover {
    opacity: 0.8;
    filter: alpha(opacity=100) black;
  }
  & > a {
    display: flex;
    background-position: center;
    align-items: flex-end;
    overflow: hidden;
    text-transform: uppercase;
    flex-grow: 1;
    max-width: 24.87%;
    text-align: center;
    height: 250px;
    color: white;
    border-right: 3px solid white;
    :last-child {
      border-right: none;
    }
    & > span {
      width: 100%;
      line-height: 2em;
      vertical-align: middle;
      font-size: 13px;
      height: 25px;
      background: rgba(221, 105, 61, 1);
    }
  }
`;
