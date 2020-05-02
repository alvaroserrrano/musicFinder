import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props => {
  return (
    <nav className='navbar navbar-dark bg-dark mb4'>
      <span className='navbar-brand mb-0 h1 mx-auto'>LyricsFinder</span>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
