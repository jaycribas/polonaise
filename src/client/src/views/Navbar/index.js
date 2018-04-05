import React from 'react'
import {Link} from 'react-router';

const Navbar = () => (
  <Link
    to='/'
    style={{
      color: 'black',
      textDecoration: 'none',
    }}
    >
    <h1>Polonaise</h1>
  </Link>
);

export default Navbar;
