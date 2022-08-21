import React from 'react';
import styles from "./app.module.css";
import DetailMos from './components/detail_mos/detail_mos';
import Header from './components/header/header';

function App() {
  return (
    <div className={styles.app}>
      <Header className={styles.header}/>
      <DetailMos className={styles.detailMos} />
    </div>
  )
}

export default App;
