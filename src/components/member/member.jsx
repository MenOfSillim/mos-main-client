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
        profilePath,
        introduction,
        description
      } = member;
      const url = profilePath || DEFAULT_IMAGE;
      console.log(profilePath);

      return (
        <div className={styles.memberBox}>
          <div className={styles.imgContainer}>
            <img className={styles.profileImg} src={url} alt="profile photo" />
          </div>
          <div className={styles.info}>
            <div className={styles.nickName}>{nickName}<span className={styles.name}>{firstName}{lastName}</span></div>
            <div className={styles.emailAddress}>{emailAddress}</div>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      );
    }
export default Member;