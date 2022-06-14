import React, { useState } from "react";
import '../App.css';

const NineSubApp2=(props)=>{

    const [likeColor,setLikeColor]=useState('#ccccff');

    return(
        <div style={{width:'500px'}}>
            <h4>NineSubApp2 컴포넌트 입니다</h4>
            <div className="form-inline">
                <b>색상 선택 :</b>
                <input type='color' defaultValue={likeColor} onChange={(e)=>{
                    setLikeColor(e.target.value)
                }}
                style={{width:'100px'}}/>

                <button type="button" className="btn btn-warning btn-sm" onClick={(e)=>{
                     props.addCircle(likeColor)
                    
                }}>
                    색상 추가</button> 
            </div>
            
        </div>
    )
}


export default NineSubApp2;