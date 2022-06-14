import React, { useRef, useState } from "react";
import '../App.css';
import SixSubApp from "./SixSubApp";
import SixSubApp2 from "./SixSubApp2";
import SixSubApp3 from "./SixSubApp3";

const SixApp=()=>{
    const [number,setNumber]=useState(10);
    //증가하는 이벤트 함수
    const numberIncre=()=>{
        setNumber(number+1);
    }

    //감소하는 이벤트 함수
    const numberDecre=()=>{
        setNumber(number-1);
    }

    return(
        <div>
            <h3 className="alert alert-danger">SixApp-부모,자식 컴포넌트간의 통신</h3>
            <SixSubApp name="캔디" age="23"/>
            <SixSubApp name="테리우스" age="31"/>
            <SixSubApp name="마징가" age="29"/>
            <br/><br/>
            <SixSubApp2 flower="장미꽃" price="12000" linecolor="red"/>
            <SixSubApp2 flower="안개꽃" price="26000" linecolor="blue"/>
            <SixSubApp2 flower="개나리꽃" price="17000" linecolor="green"/>
            <br/><br/>
            <div className="number">{number}</div>
            <SixSubApp3 incre={numberIncre} decre={numberDecre}/>
        </div>
    )
}

export default SixApp;