import React from "react";
import { useParams } from "react-router-dom";
import '../App.css';

const Food=()=>{
    const {food1,food2}=useParams();
    console.log({food1,food2})
    return(
        <div className="menuImg">
            <b>오늘의 식사메뉴</b>
            <br/><br/>
            <img src={`/image/${food1}.jpg`} alt=""/>
            <img src={`/image/${food2}.jpg`} alt=""/>
        </div>
    )
}

export default Food;