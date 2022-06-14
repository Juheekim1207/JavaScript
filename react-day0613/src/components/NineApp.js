import React, { useState } from "react";
import '../App.css';
import NineSubApp from "./NineSubApp";
import NineSubApp2 from "./NineSubApp2";

const NineApp=()=>{
    const [color,setColor]=useState('magenta');
    const [message,setMessage]=useState('Have a Nice Day!!!');
    const [photo,setPhoto]=useState('s5');
    const [likeColor,setLikeColor]=useState(['pink','yellow','gray']);

    const msgChange=(msg)=>{
       setMessage(msg)
    }

    const photoChange=(photo)=>{
        setPhoto(photo)
     }

     const colorChange=(color)=>{
        setColor(color)
     }

     //삭제 이벤트
    const deleteLikeColor=(idx)=>{
        setLikeColor(likeColor.filter((a,i)=>(i!==idx)));
     }

     //추가 이벤트
     const addEvent=(co)=>{
        setLikeColor(likeColor.concat(co));
     }
   
    return(
        <div>
            <h2 className="alert alert-info">NineApp - 부모,자식 컴포넌트 통신 문제</h2>
            <br/>
            <h1 style={{color:color}} onChange={msgChange}>{message}</h1>
            <img src={`../image/${photo}.JPG`} alt=""/>
            <br/>
            {
                likeColor.map((co,idx)=>(<div className="circle" key={idx}
                onDoubleClick={()=>{
                    deleteLikeColor(idx)
                }}
                style={{backgroundColor:co}}>{idx}</div>))
            }
            <br style={{clear:'both'}}/><br/>
            <NineSubApp onColor={colorChange} onMessage={msgChange} onPhoto={photoChange}/>
            <br/>
            <NineSubApp2 addCircle={addEvent}/>
        </div>
    )
}

export default NineApp;