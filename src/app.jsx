import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from "./app.module.css";
import DetailAbout from './components/detail_about/detail_about';
import DetailContact from './components/detail_contact/detail_contact';
import DetailMember from './components/detail_member/detail_member';
import DetailMos from './components/detail_mos/detail_mos';
import DetailProject from './components/detail_project/detail_project';
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
            path="/about"
            element={<DetailAbout className={styles.content} />}
          ></Route>
          <Route
            path="/about/members"
            element={<DetailMember className={styles.content} />}
          ></Route>
          <Route
            path="/project"
            element={<DetailProject className={styles.content} />}
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
