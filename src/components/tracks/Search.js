import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../context';
import axios from 'axios';

const Search = () => {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState('');
  const [trackTitle, setTtrackTitle] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MUSIXMATCH_API_KEY}`
      )
      .then(res => {
        let track_list = res.data.message.body.track_list;
        setState({ track_list: track_list, heading: 'Search Results' });
      })
      .catch(err => console.log(err));
  });

  const onChange = e => {
    setUserInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setTtrackTitle(userInput);
  };

  return (
    <div className='card card-body mt-4 mb-4 p-4'>
      <h1 className='display-4 text-center'>
        <i className='fas fa-music'></i>Search for a Song
      </h1>
      <p className='lead text-center'>Get the lyrics for any song</p>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control form-control-lg'
            name='trackTitle'
            placeholder='Song title'
            value={userInput}
            onChange={onChange}
          />
        </div>
        <button className='btn btn-primary btn-lg btn-block mb-5' type='submit'>
          Get track lyrics
        </button>
      </form>
    </div>
  );
};

export default Search;
