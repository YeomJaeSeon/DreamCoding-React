import React, { useEffect, useState } from 'react';
import Videos from './components/VideoList/Videos';
import Header from './components/Header/Header';
import Detail from './components/Detail/Detail';
import styles from './App.module.css';

const App = ({ youtube }) => {
  const [items, setItems] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtube.mostPopular().then((items) => setItems(items));
  }, []);

  const handleSubmit = (search) => {
    youtube.search(search).then((items) => setItems(items));
  };

  const click = (item) => {
    setSelectedVideo(item);
  };

  return (
    <div className={styles.app}>
      <Header onHandleSubmit={handleSubmit}></Header>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <Detail item={selectedVideo}></Detail>
          </div>
        )}

        <div className={styles.list}>
          <Videos
            items={items}
            onClick={click}
            display={selectedVideo ? 'list' : 'grid'}
          ></Videos>
        </div>
      </section>
    </div>
  );
};

export default App;
