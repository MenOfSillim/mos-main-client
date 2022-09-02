import React from 'react';
import styles from "./detail_contact.moduls.css";

const DetailContact = () => {

    return (
        <div>
            <form ref={formRef} className={styles.form}>
            <input
            ref={nameRef}
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name"
            />
            <input
            ref={companyRef}
            className={styles.input}
            type="text"
            name="company"
            placeholder="Company"
            />
            <input
            ref={titleRef}
            className={styles.input}
            type="text"
            name="title"
            placeholder="Title"
            />
            <input
            ref={emailRef}
            className={styles.input}
            type="text"
            name="email"
            placeholder="Email"
            />
            <textarea
            ref={messageRef}
            className={styles.textarea}
            name="message"
            placeholder="Message"
            />
            <div className={styles.fileInput}>
            <FileInput name={file.fileName} onFileChange={onFileChange} />
            </div>
            <Button name="Add" onClick={onSubmit} />
        </form>
      </div>
    );
};

export default DetailContact;