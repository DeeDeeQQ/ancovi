import React from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import styled from "react-emotion";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <MenuDiv>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          right
          width={400}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          <Link to={`/`} onClick={() => this.closeMenu()}>
            <FormattedMessage id="Menu.home" defaultMessage="Home" />
          </Link>
          <Link to={`/about`} onClick={() => this.closeMenu()}>
            <FormattedMessage id="Menu.about" defaultMessage="About Us" />
          </Link>
          <Link to={`/srm`} onClick={() => this.closeMenu()}>
            <FormattedMessage
              id="Menu.srm"
              defaultMessage="Security & Risk Management"
            />
          </Link>

          <Link to={`/dps`} onClick={() => this.closeMenu()}>
            <FormattedMessage
              id="Menu.dps"
              defaultMessage="Defense products & services"
            />
          </Link>

          <Link to={`/bes`} onClick={() => this.closeMenu()}>
            <FormattedMessage
              id="Menu.bes"
              defaultMessage="Busines Enablement Services"
            />
          </Link>

          <Link to={`/tcb`} onClick={() => this.closeMenu()}>
            <FormattedMessage
              id="Menu.tcb"
              defaultMessage="Training & Capacity Building"
            />
          </Link>

          <Link to={`/jmgt`} onClick={() => this.closeMenu()}>
            <FormattedMessage
              id="Menu.jmgt"
              defaultMessage="Journey Management & Global Tracking"
            />
          </Link>

          <Link to={`/afc`} onClick={() => this.closeMenu()}>
            <FormattedMessage
              id="Menu.afc"
              defaultMessage="Aerial Firefighting Capability"
            />
          </Link>

          <Link to={`/afc`} onClick={() => this.closeMenu()}>
            <FormattedMessage id="Menu.as" defaultMessage="Aviation services" />
          </Link>
          <Link to={`/afc`} onClick={() => this.closeMenu()}>
            <FormattedMessage id="Menu.cs" defaultMessage="Clear Services" />
          </Link>
          <Link to={`/contact`} onClick={() => this.closeMenu()}>
            <FormattedMessage id="Menu.contact" defaultMessage="Contact Us" />
          </Link>
        </Menu>
      </MenuDiv>
    );
  }
}
export default Example;

const MenuDiv = styled("div")`
  & a {
    color: white;
    margin-top: 10px;
    text-decoration: none;

    & :hover {
      color: #dd693d;
    }
  }
`;
