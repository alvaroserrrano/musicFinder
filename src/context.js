import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Context = React.createContext();

export const ContextController = ({ children }) => {
  let initialState = {
    track_list: [
      { track: { track_name: 'abc' } },
      { track: { track_name: '123' } }
    ],
    heading: 'Top 10 Songs'
  };

  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export const consumer = Context.Consumer;
