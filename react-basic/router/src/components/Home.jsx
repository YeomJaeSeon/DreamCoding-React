import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  // console.log('HOME CREATED');
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          history.push('/profile');
        }}
      >
        profile
      </button>
    </div>
  );
};
export default Home;
