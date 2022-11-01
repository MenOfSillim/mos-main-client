import React, { useState } from 'react';
import { useEffect } from 'react';
import Member from '../member/member';
import styles from "./detail_member.module.css";

const DetailMember = () => {

    const [memberData, setMemberData] = useState();

    useEffect(() => {
        fetch('http://192.168.0.16:30004/mos-members', { 
            method : "GET",
         }) 
        .then(res => res.json())
        .then(res => {    
            console.log(res);
            setMemberData(res);
        }); 
    }, [])


    return(
        // member maps 보내기
        <div className={styles.memberContainer}>
            {memberData && memberData.map((item) => (
                <Member key={item.memberSeq} member={item} />
            ))}
        </div>
    );
}

export default DetailMember;