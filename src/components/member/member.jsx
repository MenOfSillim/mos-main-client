import React from 'react';
import styles from "./member.module.css";

const DEFAULT_IMAGE = '/images/logo.png';

const Member = ({ member }) => {
    const {
        memberSeq,
        nickName,
        emailAddress,
        firstName,
        lastName,
        imagePath,
        introduction,
        description
      } = member;
      const url = imagePath || DEFAULT_IMAGE;
      return (
        <div className={styles.memberBox}>       
          <img className={styles.profileImg} src={url} alt="profile photo" />
          <div className={styles.info}>
            <h1 className={styles.nickName}>{nickName}</h1>
            <p className={styles.lastName}>{lastName}</p>
            <p className={styles.firstName}>{firstName}</p>
            <p className={styles.emailAddress}>{emailAddress}</p>
            <p className={styles.introduction}>{introduction}</p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      );
    }
export default Member;