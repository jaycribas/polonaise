import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const EventCreate = () => (
  <div className="container">
    <h1>CREATE EVENT</h1>
    <TextField
      hintText="Enter event title"
      fullWidth={true}
    /><br />
    <RaisedButton
      label="Submit" />
  </div>
);

export default EventCreate;
