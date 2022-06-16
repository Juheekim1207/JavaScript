import React from "react";
import '../App.css';

const About=()=>{
    
    return(
        <div>
            <h2>오시는 길</h2>
            <br/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.1369506586484!2d126.97119815054883!3d37.551837082628914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b581daaaaaaab%3A0xd16346279906acfb!2zQ0rsmKzrpqzruIzrhKTtirjsm43siqQg67O47IKs!5e0!3m2!1sko!2skr!4v1655365944689!5m2!1sko!2skr" 
            width="1000" height="450" style={{border:0}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <b>서울특별시 용산구 한강대로 372, 24층 (동자동, KDB타워)</b>
        </div>
    )
}

export default About;