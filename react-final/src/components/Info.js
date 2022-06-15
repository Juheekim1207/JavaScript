import React from "react";
import '../App.css';
import infoImg from '../image/info.png'

const Info=()=>{
    return(
        <div>
            <img src={infoImg} alt="" style={{width: '250px'}}/>
            <br/><br/>
            <div className="infoDetail">
            <b>씨제이올리브영 주식회사</b>
            <br/>
            대표이사 : 구창근 | 사업자등록번호 : 809-81-01574
            <br/>
            주소 : (04323) 서울특별시 용산구 한강대로 372, 24층
            (동자동, KDB타워) |
            호스팅사업자 : CJ 올리브네트웍스
            <br/>
            통신판매업신고번호 : 2019-서울용산-1428
            <br/>
            이메일 : oliveweb@cj.net
            </div>
        </div>
    )
}

export default Info;