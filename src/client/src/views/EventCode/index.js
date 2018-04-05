import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from '../Navbar'


const EventCode = () => (
  <div className="container">
    <Navbar />
    <h2>ENTER EVENT CODE</h2>
    <TextField
      hintText="Enter event code"
      fullWidth={true}
      maxLength="4"
    /><br />
    <RaisedButton
      label="Submit" />
  </div>
);

export default EventCode;
