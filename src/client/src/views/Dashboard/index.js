import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import EventCard from './EventCard'

const Dashboard = (props) => (
  <div className="container">
    <h1>Current Events</h1>
    <EventCard />
    <EventCard />
    <EventCard />
  </div>
);

export default Dashboard;
