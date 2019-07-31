import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { connect } from 'react-redux';
import { pageTitle } from '../Redux/action';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      pagetitle: "Profile Management System"
    }
  }
  componentWillMount() {
    const { pagetitle } = this.state;
    this.props.UpdateTitle(pagetitle);
  }
  // shouldComponentUpdate() {
  //   const { pagetitle } = this.state;
  //   if (this.props.Title == pagetitle) {
  //     return (false);
  //   }
  //   else {
  //     this.UpdateTitle.props("Profile Management System");
  //     return (true);
  //   }
  // }
  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="Dashboard" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("redux he bhai=>", state.pageTitle);
  return {
    Title: state.pageTitle,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    UpdateTitle: (title) => dispatch(pageTitle(title))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);