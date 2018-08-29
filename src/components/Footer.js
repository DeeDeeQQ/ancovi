import React from "react";
import styled, { css } from "react-emotion";
import { FormattedMessage } from "react-intl";

const Footer = () => (
  <MainFooterDiv>
    <FormattedMessage
      id="Footer.about"
      defaultMessage="© Ancovi International LLC. 2018."
    />
  </MainFooterDiv>
);

export default Footer;

const MainFooterDiv = styled("div")`
  padding: 20px;
  color: white;
  background-color: #dd693d;
`;
