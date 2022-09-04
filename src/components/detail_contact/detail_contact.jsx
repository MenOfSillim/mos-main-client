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

        
      };

    return (
        // name, phone, email, message
        <div className={styles.form}>
            <div>
                <form ref={formRef} className={styles.form}>
                <div>
                    <label for="name">Name</label>
                    <input
                    ref={nameRef}
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Name"
                    />
                </div>
                <div>
                    <label for="phone">Phone</label>
                    <input
                    ref={phoneRef}
                    className={styles.input}
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    />
                </div>
                <div>
                    <label for="email">Email</label>
                    <input
                    ref={emailRef}
                    className={styles.input}
                    type="text"
                    name="email"
                    placeholder="Email"
                    />
                </div>
                <div>
                    <label for="message">Message</label>
                    <textarea
                    ref={messageRef}
                    className={styles.textarea}
                    name="message"
                    placeholder="Message"
                    />
                </div>
                
                <button onClick={onSubmit}>submit</button>
            </form>
        </div>
      </div>
    );
};

export default DetailContact;