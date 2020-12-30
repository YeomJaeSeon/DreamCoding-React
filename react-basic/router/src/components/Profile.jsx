import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = (props) => {
  const history = useHistory();
  useEffect(() => {
    console.log('mounted');
  }, []);
  return (
    <div>
      <h1>Profile</h1>

      <button
        onClick={() => {
          history.push('/');
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Profile;
