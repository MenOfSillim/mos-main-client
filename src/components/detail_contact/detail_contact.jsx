import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from "./detail_contact.module.css";

const DetailContact = () => {

    const isPc = useMediaQuery({
        query : "(min-width: 1024px)"
    });

    const isTablet = useMediaQuery({
        query : "(min-width: 768px) and (max-width: 1023px)"
    });

    const isMobile = useMediaQuery({
        query : "(max-width: 767px)"
    });

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
        
        console.log(mail);

        // return false;

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

          formRef.current.reset();
      };

    return (
        <>
        {isPc &&
            <div className={styles.detail}>
                {/* name, phone, email, message */}
                <div className={styles.mosMessage}/>
                <div className={styles.form}>
                    <div className={styles.contact}>
                        <div className={styles.contactTitle}>Contact us</div>                
                        <form ref={formRef} className={styles.form} data-email="menofsillim@gmail.com">
                        {/* <form method="POST" className={styles.form} data-email="menofsillim@gmail.com"> */}
                        <div className={styles.inputContainer}>
                            <div className={styles.namePhoneContainer}>
                                <div>
                                    <label className={styles.label} htmlFor="name">Name</label>
                                    <input
                                    ref={nameRef}
                                    className={styles.input}
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    />
                                </div>
                                <div>
                                    <label className={styles.label}  htmlFor="phone">Phone</label>
                                    <input
                                    ref={phoneRef}
                                    className={styles.input}
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    />
                                </div>
                            </div>
                            <div className={styles.emailContainer}>
                                <label className={styles.label}   htmlFor="email">Email</label>
                                <input
                                ref={emailRef}
                                className={`${styles.input} ${styles.inputEmail}`}
                                type="text"
                                name="email"
                                placeholder="Email"
                                required
                                />
                            </div>
                            <div className={styles.textareaContainer}>
                                <label className={styles.label}   htmlFor="message">Message</label>
                                <textarea
                                ref={messageRef}
                                className={styles.textarea}
                                name="message"
                                placeholder="Message"
                                required
                                />
                            </div>
                        </div>
                        <div className={styles.submitContainer}>
                            {/* <button type="submit">submit</button> */}
                            {/* <button onClick={onSubmit}>submit</button> */}
                            <div type="submit" className={styles.submit} onClick={onSubmit}>Submit</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>        
        }
        {isTablet &&
            <div className={styles.detail}>
                {/* name, phone, email, message */}
                <div className={styles.form}>
                    <div className={styles.taContact}>
                        <div className={styles.contactTitle}>Contact us</div>                
                        <form ref={formRef} className={styles.form} data-email="menofsillim@gmail.com">
                        {/* <form method="POST" className={styles.form} data-email="menofsillim@gmail.com"> */}
                        <div className={styles.inputContainer}>
                            <div className={styles.namePhoneContainer}>
                                <div>
                                    <label className={styles.label} htmlFor="name">Name</label>
                                    <input
                                    ref={nameRef}
                                    className={styles.input}
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    />
                                </div>
                                <div>
                                    <label className={styles.label}  htmlFor="phone">Phone</label>
                                    <input
                                    ref={phoneRef}
                                    className={styles.input}
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    />
                                </div>
                            </div>
                            <div className={styles.emailContainer}>
                                <label className={styles.label}   htmlFor="email">Email</label>
                                <input
                                ref={emailRef}
                                className={`${styles.input} ${styles.inputEmail}`}
                                type="text"
                                name="email"
                                placeholder="Email"
                                required
                                />
                            </div>
                            <div className={styles.textareaContainer}>
                                <label className={styles.label}   htmlFor="message">Message</label>
                                <textarea
                                ref={messageRef}
                                className={styles.textarea}
                                name="message"
                                placeholder="Message"
                                required
                                />
                            </div>
                        </div>
                        <div className={styles.submitContainer}>
                            {/* <button type="submit">submit</button> */}
                            {/* <button onClick={onSubmit}>submit</button> */}
                            <div type="submit" className={styles.submit} onClick={onSubmit}>Submit</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>        
        }        
        {isMobile &&
            <div className={styles.detail}>
                {/* name, phone, email, message */}
                <div className={styles.form}>
                    <div className={styles.moContact}>
                        <div className={styles.moContactTitle}>Contact us</div>                
                        <form ref={formRef} className={styles.form} data-email="menofsillim@gmail.com">
                        {/* <form method="POST" className={styles.form} data-email="menofsillim@gmail.com"> */}
                        <div className={styles.moInputContainer}>
                            <div className={styles.moNamePhoneContainer}>
                                <div>
                                    <label className={styles.moLabel} htmlFor="name">Name</label>
                                    <input
                                    ref={nameRef}
                                    className={styles.moInput}
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    />
                                </div>
                                <div>
                                    <label className={styles.moLabel}  htmlFor="phone">Phone</label>
                                    <input
                                    ref={phoneRef}
                                    className={styles.moInput}
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    />
                                </div>
                            </div>
                            <div className={styles.moEmailContainer}>
                                <label className={styles.moLabel}   htmlFor="email">Email</label>
                                <input
                                ref={emailRef}
                                className={`${styles.moInput} ${styles.moInputEmail}`}
                                type="text"
                                name="email"
                                placeholder="Email"
                                required
                                />
                            </div>
                            <div className={styles.moTextareaContainer}>
                                <label className={styles.moLabel}   htmlFor="message">Message</label>
                                <textarea
                                ref={messageRef}
                                className={styles.moTextarea}
                                name="message"
                                placeholder="Message"
                                required
                                />
                            </div>
                        </div>
                        <div className={styles.moSubmitContainer}>
                            {/* <button type="submit">submit</button> */}
                            {/* <button onClick={onSubmit}>submit</button> */}
                            <div type="submit" className={styles.moSubmit} onClick={onSubmit}>Submit</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>        
        }
      </>
    );
};

export default DetailContact;