import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const labelStyle = {
  fontSize: '3rem',
  top: '35%',
}

const btnStyle = {
  height: '30vh',
}

const Login = () => (
  <div>
    <RaisedButton
      backgroundColor="#000"
      labelColor="#fff"
      className="login-btn"
      href="/auth"
      fullWidth={true}
      label="VJ"
      style={btnStyle}
      labelStyle={labelStyle} />
    <RaisedButton
      backgroundColor="#006698"
      labelColor="#fff"
      className="login-btn"
      href="/code"
      fullWidth={true}
      label="LISTENER"
      style={btnStyle}
      labelStyle={labelStyle} />
  </div>
);

export default Login;
