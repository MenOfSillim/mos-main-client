import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from "./app.module.css";
import DetailContact from './components/detail_contact/detail_contact';
import DetailMos from './components/detail_mos/detail_mos';
import DetailWorks from './components/detail_works/detail_works';
import Header from './components/header/header';

function App() {
  return (
    <div className={styles.app}>
      <Header className={styles.header}/>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<DetailMos className={styles.content}/>}
          ></Route>
          <Route
            path="/mos"
            element={<DetailMos className={styles.content} />}
          ></Route>
          <Route
            path="/works"
            element={<DetailWorks className={styles.content} />}
          ></Route>
          <Route
            path="/contact"
            element={<DetailContact className={styles.content} />}
          ></Route>
        </Routes>
      </BrowserRouter>
        {/* <DetailWorks className={styles.detailMos} /> */}
    </div>
  )
}

export default App;
