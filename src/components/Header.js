import React from "react";
import styled, { css } from "react-emotion";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";
import "rc-menu/assets/index.css";
import animate from "css-animation";

function handleClick(info) {
  console.log(`clicked ${info.key}`);
  console.log(info);
}

const animation = {
  enter(node, done) {
    let height;
    return animate(node, "rc-menu-collapse", {
      start() {
        height = node.offsetHeight;
        node.style.height = 0;
      },
      active() {
        node.style.height = `${height}px`;
      },
      end() {
        node.style.height = "";
        done();
      }
    });
  },

  appear() {
    return this.enter.apply(this, arguments);
  },

  leave(node, done) {
    return animate(node, "rc-menu-collapse", {
      start() {
        node.style.height = `${node.offsetHeight}px`;
      },
      active() {
        node.style.height = 0;
      },
      end() {
        node.style.height = "";
        done();
      }
    });
  }
};

function onOpenChange(value) {
  console.log("onOpenChange", value);
}
const commonMenu = (
  <Menu onClick={handleClick} onOpenChange={onOpenChange}>
    <MenuItem key="1">
      <Link to={`/`}>
        <FormattedMessage id="Menu.home" defaultMessage="Home" />
      </Link>
    </MenuItem>
    <MenuItem key="2">
      <Link to={`/about`}>
        <FormattedMessage id="Menu.about" defaultMessage="About" />
      </Link>
    </MenuItem>
    <SubMenu
      title={
        <Link to={`/services`}>
          <FormattedMessage id="Menu.services" defaultMessage="Services" />
        </Link>
      }
      css={`
        color: blue;
        font-size: 5px;

        &:hover {
          color: green;
        }

        & .some-class {
          font-size: 20px;
        }
      `}
      key="3"
      popupOffset={[0, 5]}
    >
      <MenuItem key="4">
        <Link to={`/srm`} style={{ textDecoration: "none", color: "black" }}>
          <FormattedMessage
            id="Menu.srm"
            defaultMessage="SECURITY & RISK MANAGEMENT"
          />
        </Link>
      </MenuItem>
      <MenuItem key="5">
        <Link to={`/dps`} style={{ textDecoration: "none", color: "black" }}>
          <FormattedMessage
            id="Menu.dps"
            defaultMessage="DEFENSE PRODUCTS & SERVICES"
          />
        </Link>
      </MenuItem>
      <MenuItem key="6">
        <Link to={`/bes`} style={{ textDecoration: "none", color: "black" }}>
          <FormattedMessage
            id="Menu.bes"
            defaultMessage="BUSINESS ENABLEMENT SERVICES"
          />
        </Link>
      </MenuItem>
      <MenuItem key="7">
        <Link to={`/tcb`} style={{ textDecoration: "none", color: "black" }}>
          <FormattedMessage
            id="Menu.tcb"
            defaultMessage="TRAINING & CAPACITY BUILDING"
          />
        </Link>
      </MenuItem>
      <MenuItem key="8">
        <Link to={`/jmgt`} style={{ textDecoration: "none", color: "black" }}>
          <FormattedMessage
            id="Menu.jmgt"
            defaultMessage="JOURNEY MANAGEMENT & GLOBAL TRACKING"
          />
        </Link>
      </MenuItem>
      <MenuItem key="9">
        <Link to={`/afc`} style={{ textDecoration: "none", color: "black" }}>
          <FormattedMessage
            id="Menu.afc"
            defaultMessage="AERIAL FIREFLIGHTING CAPABILITY"
          />
        </Link>
      </MenuItem>
    </SubMenu>

    <MenuItem key="10">
      <Link to={`/contact`}>
        <FormattedMessage id="Menu.contact" defaultMessage="Contacts" />
      </Link>
    </MenuItem>
  </Menu>
);

const horizontalMenu = React.cloneElement(commonMenu, {
  mode: "horizontal",
  // use openTransition for antd
  openAnimation: "slide-up"
});

const Header = () => (
  <MainHeaderDiv>
    <Logo>
      <Link to={`/`}>
        <img src="./images/logo.png" />
      </Link>
    </Logo>
    <Menus>{horizontalMenu}</Menus>
  </MainHeaderDiv>
);

export default Header;

const MainHeaderDiv = styled("div")`
  background-color: #fff;
  margin: 0;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & a {
    text-decoration: none;
  }
`;

const Logo = styled("div")``;

const Menus = styled("div")`
  & > ul {
    margin: 0;
    padding: 0 20px;
    border-radius: 5px;
    background-color: #f0f8ff;

    & a {
      padding: 15px 25px 15px 25px;
      text-decoration: none;
    }
    & > li {
      padding: 0;
    }
  }
`;
