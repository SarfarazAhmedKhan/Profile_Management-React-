import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Navbar } from "shards-react";
import { connect } from 'react-redux';

class MainNavbar extends Component {
  render() {
    return (
      <div className={classes}>
        <Container className="p-0 m-0">
          <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
            <h1 style={{
              fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
              marginLeft: "22px", paddingTop: "5px", fontSize: "34px", color: "#3D5170", textAlign: "center"
            }}>{this.props.Title}</h1>
            <div style={{ right: "0" }} >
            </div>
          </Navbar>
        </Container>
      </div>
    );
  }
}
const classes = classNames(
  "main-navbar",
  "bg-white",
  "sticky-top"
);
MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};
const mapStateToProps = (state) => {
  console.log("redux he bhai=>", state.pageTitle);
  return {
    Title: state.pageTitle,
  }
}

export default connect(mapStateToProps)(MainNavbar);
