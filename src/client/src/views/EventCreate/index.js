import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from '../Navbar'

const EventCreate = () => (
  <div className="container">
    <Navbar />
    <h2>CREATE EVENT</h2>
    <TextField
      hintText="Enter event title"
      fullWidth={true}
    /><br />
    <RaisedButton
      label="Submit" />
  </div>
);

export default EventCreate;
