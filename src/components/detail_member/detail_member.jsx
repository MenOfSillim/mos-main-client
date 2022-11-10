import React, { useState } from 'react';
import { useEffect } from 'react';
import Member from '../member/member';
import styles from "./detail_member.module.css";

const DetailMember = () => {

    const [memberData, setMemberData] = useState(
    //     {
    //     1: {
    //         "memberSeq": 1,
    //         "nickName": "Rubok",
    //         "emailAddress": "truespring1@gmail.com",
    //         "firstName": "석",
    //         "lastName": "규환",
    //         "profilePath": "/images/profile/profile_rubok.jpeg",
    //         "introduction": "YEAH! I'M RUBOK, BACK-END DEVELOPER.",
    //         "description": "안녕하세요. 저는 백엔드 개발자인 석규환입니다. 다양한 언어와 기술에 관심이 많으며, 현재는 좀 더 좋은 품질의 소프트웨어 개발을 위한 고민을 하며 개발하고 있습니다.",
    //         "skills": []
    //       },
    //     2: {
    //         "memberSeq": 2,
    //         "nickName": "Kellogg",
    //         "emailAddress": "kyondoku@gmail.com",
    //         "firstName": "주",
    //         "lastName": "경덕",
    //         "profilePath": "/images/profile/profile_kellogg.JPG",
    //         "introduction": "HI! I'M KELLOGG, FRONT-END DEVELOPER.",
    //         "description": "안녕하세요! 백엔드 개발자에서 프론트엔드 개발자로 변신 중인 주경덕 입니다. 백엔드 개발자로서 일했던 경험을 바탕으로 폭넓은 사고를 하는 프론트엔드 개발자가 되고 싶어요 :^)",
    //         "skills": []
    //       },
    //     3: {
    //         "memberSeq": 3,
    //         "nickName": "Rubok",
    //         "emailAddress": "truespring1@gmail.com",
    //         "firstName": "석",
    //         "lastName": "규환",
    //         "profilePath": "/images/profile/profile_rubok.jpeg",
    //         "introduction": "YEAH! I'M RUBOK, BACK-END DEVELOPER.",
    //         "description": "안녕하세요. 저는 백엔드 개발자인 석규환입니다. 다양한 언어와 기술에 관심이 많으며, 현재는 좀 더 좋은 품질의 소프트웨어 개발을 위한 고민을 하며 개발하고 있습니다.",
    //         "skills": []
    //       },
    //     4: {
    //         "memberSeq": 4,
    //         "nickName": "Kellogg",
    //         "emailAddress": "kyondoku@gmail.com",
    //         "firstName": "주",
    //         "lastName": "경덕",
    //         "profilePath": "/images/profile/profile_kellogg.JPG",
    //         "introduction": "HI! I'M KELLOGG, FRONT-END DEVELOPER.",
    //         "description": "안녕하세요! 백엔드 개발자에서 프론트엔드 개발자로 변신 중인 주경덕 입니다. 백엔드 개발자로서 일했던 경험을 바탕으로 폭넓은 사고를 하는 프론트엔드 개발자가 되고 싶어요 :^)",
    //         "skills": []
    //       },
    // }
    );

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
        // <div className={styles.memberContainer}>
        //     {memberData && Object.keys(memberData).map((key) => (
        //         <Member key={key} member={memberData[key]} />
        //     ))}
        // </div>
        // member maps 보내기
        <div className={styles.memberContainer}>
            {memberData && memberData.map((item) => (
                <Member key={item.memberSeq} member={item} />
            ))}
        </div>
    );
}

export default DetailMember;