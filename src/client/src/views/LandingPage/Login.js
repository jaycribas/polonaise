import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Login = () => (
  <div className="container">
    <RaisedButton
      className="login-btn"
      href="/auth"
      fullWidth={true}
      label="HOST"
      primary={true} />
    <RaisedButton
      className="login-btn"
      href="/code"
      fullWidth={true}
      label="LISTENER"
      secondary={true} />
  </div>
);

export default Login;
