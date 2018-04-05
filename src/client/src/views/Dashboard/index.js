import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import EventCard from './EventCard'
import Navbar from '../Navbar'

const Dashboard = (props) => (
  <div className="container">
    <Navbar />
    <h2>Current Events</h2>
    <EventCard />
    <EventCard />
    <EventCard />
  </div>
);

export default Dashboard;
