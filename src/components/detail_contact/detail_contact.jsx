import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import styles from "./detail_contact.module.css";

const DetailContact = () => {
    const formRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const onSubmit = event => {
        event.preventDefault();
        const mail = {
          id: Date.now(), //key
          name: nameRef.current.value || '',
          phone: phoneRef.current.value || '',
          email: emailRef.current.value || '',
          message: messageRef.current.value || '',
        };
        formRef.current.reset();
        console.log(mail);

        try {
            //응답 성공 
            const response = axios.post('https://script.google.com/macros/s/AKfycbyf-5RP8bbXfo03w93s3dnvXyQaNHnkZXnj1qFvbVfizCrEkJvuB8dnZwB9wij7Ovp-RQ/exec',
                  //보내고자 하는 데이터 
                JSON.stringify({
                    name: nameRef.current.value || '',
                    phone: phoneRef.current.value || '',
                    email: emailRef.current.value || '',
                    message: messageRef.current.value || '',
                })
            );
            console.log(response);
          } catch (error) {
            //응답 실패
            console.error(error);
          }
      };

    return (
        // name, phone, email, message
        <div className={styles.form}>
            <div>
                <form ref={formRef} className={styles.form} data-email="menofsillim@gmail.com">
                {/* <form method="POST" data-email="menofsillim@gmail.com"
                    action="https://script.google.com/macros/s/AKfycbyf-5RP8bbXfo03w93s3dnvXyQaNHnkZXnj1qFvbVfizCrEkJvuB8dnZwB9wij7Ovp-RQ/exec"> */}
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                    ref={nameRef}
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Name"
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                    ref={phoneRef}
                    className={styles.input}
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                    ref={emailRef}
                    className={styles.input}
                    type="text"
                    name="email"
                    placeholder="Email"
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                    ref={messageRef}
                    className={styles.textarea}
                    name="message"
                    placeholder="Message"
                    />
                </div>
                {/* <button type="submit">submit</button> */}
                <button onClick={onSubmit}>submit</button>
            </form>
        </div>
      </div>
    );
};

export default DetailContact;