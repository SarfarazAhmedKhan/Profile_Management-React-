import React, { Component } from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import { pageTitle } from '../../Redux/action';
import { connect } from 'react-redux';

class UserAccountDetails extends Component {
  componentWillMount() {
    this.props.UpdateTitle("Freelancers Registration Field");
  }
  render() {
    return (
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Form Details</h6>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    {/* First Name */}
                    <Col md="4" className="form-group">
                      <label>First Name</label>
                      <FormInput
                        placeholder="First Name"
                      />
                    </Col>
                    {/* Last Name */}
                    <Col md="4" className="form-group">
                      <label >Last Name</label>
                      <FormInput
                        placeholder="Last Name"
                      />
                    </Col>
                    {/* Gender */}
                    <Col md="4" className="form-group">
                      <label >Select Gender</label>
                      <FormSelect>
                        <option>
                          Male
                    </option>
                        <option>
                          Female
                    </option>
                      </FormSelect>
                    </Col>
                  </Row>
                  <Row form>
                    {/* Email */}
                    <Col md="4" className="form-group">
                      <label>Email</label>
                      <FormInput
                        type="email"
                        placeholder="Email Address"
                        autoComplete="email"
                      />
                    </Col>
                    {/* Password */}
                    <Col md="4" className="form-group">
                      <label>Password</label>
                      <FormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </Col>
                    <Col md="2" className="form-group">
                      <label>Date of Birth</label>
                      <FormSelect>
                        <option>
                          January
                   </option>
                        <option>
                          February
                   </option>
                        <option>
                          March
                   </option>
                        <option>
                          April
                   </option>
                        <option>
                          May
                   </option>
                        <option>
                          June
                   </option>
                        <option>
                          July
                   </option>
                        <option>
                          August
                   </option>
                        <option>
                          October
                   </option>
                        <option>
                          September
                   </option>
                        <option>
                          November
                   </option>
                        <option>
                          December
                   </option>
                      </FormSelect>
                    </Col>
                    <Col md="1" className="form-group">
                      <label ></label>
                      <FormInput style={{ marginTop: "7px" }}
                        placeholder="Day"
                        type="number>2000"
                      />
                    </Col>
                    <Col md="1" className="form-group">
                      <label ></label>
                      <FormInput style={{ marginTop: "7px" }}
                        placeholder="year"
                        type="number"
                      />
                    </Col>
                  </Row>
                  <Row form>
                    {/* City */}
                    <Col md="8" className="form-group">
                      <label >Address</label>
                      <FormInput
                        placeholder="1234 street,...."
                      />
                    </Col>
                    {/* State */}
                    <Col md="4" className="Contact">
                      <label>Contact</label>
                      <FormInput
                        placeholder="Mobile #"
                      />
                    </Col>
                  </Row>
                  <Row form>
                    {/* City */}
                    <Col md="6" className="form-group">
                      <label >City</label>
                      <FormInput
                        placeholder="City"
                      />
                    </Col>
                    {/* State */}
                    <Col md="4" className="form-group">
                      <label>State</label>
                      <FormInput
                        placeholder="Country"
                      />
                    </Col>
                    {/* Zip Code */}
                    <Col md="2" className="form-group">
                      <label >Zip</label>
                      <FormInput
                        placeholder="Postal Code"
                      />
                    </Col>
                  </Row>
                  <hr />
                  <h4 style={{ marginBottom: "30px", marginTop: "10px" }} >Education</h4>
                  {/* School Name */}
                  <Row form>
                    <Col md="3" className="form-group">
                      <label >Last Qualification</label>
                      <FormSelect>
                        <option>
                          School
                    </option>
                        <option>
                          College
                    </option>
                        <option>
                          University
                    </option>
                      </FormSelect>
                    </Col>
                    <Col md="3" className="form-group">
                      <label >Name</label>
                      <FormInput placeholder="school,college..."></FormInput>
                    </Col>
                    <Col md="2" className="form-group">
                      <label >Start Date</label>
                      <FormSelect>
                        <option>
                          January
                   </option>
                        <option>
                          February
                   </option>
                        <option>
                          March
                   </option>
                        <option>
                          April
                   </option>
                        <option>
                          May
                   </option>
                        <option>
                          June
                   </option>
                        <option>
                          July
                   </option>
                        <option>
                          August
                   </option>
                        <option>
                          October
                   </option>
                        <option>
                          September
                   </option>
                        <option>
                          November
                   </option>
                        <option>
                          December
                   </option>
                      </FormSelect>
                    </Col>
                    <Col md="1" className="form-group">
                      <label ></label>
                      <FormInput placeholder="year" style={{ marginTop: "7px" }}></FormInput>
                    </Col>
                    <Col md="2" className="form-group">
                      <label >End Date</label>
                      <FormSelect>
                        <option>
                          January
                   </option>
                        <option>
                          February
                   </option>
                        <option>
                          March
                   </option>
                        <option>
                          April
                   </option>
                        <option>
                          May
                   </option>
                        <option>
                          June
                   </option>
                        <option>
                          July
                   </option>
                        <option>
                          August
                   </option>
                        <option>
                          October
                   </option>
                        <option>
                          September
                   </option>
                        <option>
                          November
                   </option>
                        <option>
                          December
                   </option>
                      </FormSelect>
                    </Col>
                    <Col md="1" className="form-group">
                      <label ></label>
                      <FormInput style={{ marginTop: "7px" }}
                        placeholder="year"
                      />
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="2" className="form-group">
                      <label >Major</label>
                      <FormInput placeholder="Field"></FormInput>
                    </Col>
                    <Col md="2" className="form-group">
                      <label >Result</label>
                      <FormInput
                        placeholder="Avg Result"
                      />
                    </Col>
                    <Col md="8" className="form-group">
                      <label >Address</label>
                      <FormInput
                        placeholder="street,city...."
                      />
                    </Col>
                  </Row>
                  <hr />
                  <h4 style={{ marginBottom: "30px", marginTop: "10px" }} >Skills</h4>
                  <Row form>
                    {/* Skills */}
                    <Col md="4" className="form-group">
                      <label htmlFor="feCity">Software Skills</label>
                      <FormInput
                        placeholder=""
                      />
                    </Col>
                    {/* Skills */}
                    <Col md="4" className="form-group">
                      <label>Technical Skills</label>
                      <FormInput
                        placeholder=""
                      />
                    </Col>
                    {/* Skills */}
                    <Col md="4" className="form-group">
                      <label htmlFor="feZipCode">Other Skills</label>
                      <FormInput
                        placeholder=""
                      />
                    </Col>
                  </Row>
                  <hr />
                  <h4 style={{ marginBottom: "30px", marginTop: "10px" }} >Projects</h4>
                  <Row form>
                    {/* Skills */}
                    <Col md="3" className="form-group">
                      <label htmlFor="feCity">Name</label>
                      <FormInput
                        placeholder=""
                      />
                    </Col>
                    {/* Skills */}
                    {/* Description */}
                    {/* Skills */}
                    <Col md="3" className="form-group">
                      <label htmlFor="feZipCode">Utilized Skills</label>
                      <FormInput
                        placeholder=""
                      />
                    </Col>
                    <Col md="3" className="form-group">
                      <label>Add</label>
                      <FormInput type="file"
                        placeholder=""
                      />
                    </Col>
                    <Col md="3" className="form-group">
                      <label >Contracts</label>
                      <FormInput type="number" placeholder="1,2,3...." />
                    </Col>
                    <Col md="12" className="form-group">
                      <label htmlFor="feDescription">Description</label>
                      <FormTextarea id="feDescription" rows="5" />
                    </Col>
                  </Row>
                  <Button theme="accent">Create Account</Button>
                </Form>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    UpdateTitle: (title) => dispatch(pageTitle(title))
  }
}

export default connect(null,mapDispatchToProps)(UserAccountDetails);
