import React, {useState} from "react";
import '../App.css';

// const SixSubApp3=(props)=>{
const SixSubApp3=({incre,decre})=>{
    return(
        <div>
            <button type="button" className="btn btn-info" onClick={()=>{
            // props.decre(); //부모 컴포넌트 이벤트 발생 
            decre();
            }}
            style={{marginLeft:'80px'}}>감소</button>
            <button type="button" className="btn btn-info" onClick={()=>{
            // props.incre(); //부모 컴포넌트 이벤트 발생 
            incre();
            }}
            style={{marginLeft:'5px'}}>증가</button>
        </div>
    )
}

export default SixSubApp3 ;