import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDom, { Router, Route, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import LandingPage from './views/LandingPage'
import EventCode from './views/EventCode'
import EventCreate from './views/EventCreate'
import Dashboard from './views/Dashboard'


export default class ReactRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const landingPageComponent = (props, state, params) =>
      <LandingPage />

    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="/code" component={EventCode} />
          <Route path="/create" component={EventCreate} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="*" component={landingPageComponent} />
        </Router>
      </MuiThemeProvider>
    )
  }
}
