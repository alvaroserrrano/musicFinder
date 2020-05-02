import React, { Fragment } from 'react';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';
const Index = props => {
  return (
    <Fragment>
      <Search></Search>
      <Tracks />
    </Fragment>
  );
};

Index.propTypes = {};

export default Index;
