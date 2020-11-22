import React, { useEffect, useState } from 'react';
import Videos from './components/Videos';

const APIKEY = 'AIzaSyDh1GDRXKc5ZO5-8IYEncSOgsBWltPejCw';

const App = () => {
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
      .then((response) => response.text())
      .then((result) => {
        setItems(JSON.parse(result).items);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return <Videos items={items}></Videos>;
};

export default App;
