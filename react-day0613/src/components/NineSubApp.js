import React from "react";
import '../App.css';

const NineSubApp=(props)=>{

    return(
        <div>
            <input type='color' onChange={(e)=>{
                props.onColor(e.target.value);
            }}/>
            &nbsp;&nbsp;
            <select onChange={(e)=>{
                props.onPhoto(e.target.value);
            }}>
                {
                    [...new Array(10)].map((item,i)=>(<option>{`s${i+1}`}</option>))
                }
            </select>
            &nbsp;&nbsp;
            <input type='text' onChange={(e)=>{
                props.onMessage(e.target.value);
            }}/>
        </div>
    )
}

export default NineSubApp;