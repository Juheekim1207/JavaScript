import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import '../App.css';

const Food=()=>{
    const {food1,food2}=useParams();
    const navi=useNavigate();


    return(
        <div className="menuImg">
            <b>오늘의 식사메뉴</b>&nbsp;
            <button type="button" className="btn btn-primary" onClick={()=>{
                navi(-1);
            }}>이전페이지</button>
            <br/><br/>
            <img src={`/image/${food1}.jpg`} alt=""/>
            <img src={`/image/${food2}.jpg`} alt=""/>
        </div>
    )
}

export default Food;