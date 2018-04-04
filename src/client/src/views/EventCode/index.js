import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const EventCode = () => (
  <div className="container">
    <h1>ENTER EVENT CODE</h1>
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
