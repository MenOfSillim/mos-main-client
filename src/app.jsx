import React from 'react';
import styles from "./app.module.css";
import Header from './components/header/header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <section className={styles.content}>
          {/* <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div> */}
        {/* <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div> */}
      </section>
    </div>
  )
}

export default App;
