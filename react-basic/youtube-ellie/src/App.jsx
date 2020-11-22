import React, { useEffect, useState } from 'react';
import Videos from './components/VideoList/Videos';

const APIKEY = process.env.REACT_APP_API_KEY;

const App = () => {
  console.log('App');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=10&chart=mostPopular&key=${APIKEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setItems(result.items);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return <Videos items={items}></Videos>;
};

export default App;
