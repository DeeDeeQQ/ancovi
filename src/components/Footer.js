import React from "react";
import styled, { css } from "react-emotion";
import { FormattedMessage } from "react-intl";

const Footer = () => (
  <MainFooterDiv>
    <FormattedMessage id="Footer.about" defaultMessage="Home" />
  </MainFooterDiv>
);

export default Footer;

const MainFooterDiv = styled("div")`
  height: 250px;
  color: white;
  background-color: blue;
`;
