import React, { useState } from "react";
import '../App.css';

const SixApp=()=>{
    const [show,setShow]=useState(false);
    const [visible,setVisible]=useState('hidden');
    const [line,setLine]=useState('solid');
    const [bcolor,setBcolor]=useState('gray')

    return(
        <div>
            <h2 className="alert alert-info">SixApp입니다!!!!</h2>
            <button type="button" className="btn btn-info"
            onClick={()=>{
                setShow(!show);
                // if(show===true){
                //     setShow(false);
                // }else{
                //     setShow(true);
                // }   
            }}>
                boolean 으로 이미지 보였다 안보였다 하기
            </button>
            <img src="../image2/s1.JPG" alt=""/>
            {show && <img src="../image2/s1.JPG" alt=""/>}
            <br/><br/>
            <button type="button" className="btn btn-warning"
            onClick={()=>{
                setVisible(visible==='hidden'?'visible':'hidden');
                // if(visible==='hidden'){
                //     setVisible('visible');
                // }else{
                //     setVisible('hidden');
                // }   
            }}>
                style로 이미지 보였다 안보였다 하기
            </button>
            <img src="../image2/s2.JPG" alt=""/>
            <img src="../image2/s2.JPG" alt=""
            style={{visibility:visible, borderStyle:line, borderColor:bcolor}}
            className="greenline"/>
            <select onChange={(e)=>{
                setLine(e.target.value);
            }}>
                <option>solid</option>
                <option>dashed</option>
                <option>groove</option>
                <option>dotted</option>
                <option>inset</option>
            </select>
            <select onChange={(e)=>{
                setBcolor(e.target.value)
            }}>
                <option>pink</option>
                <option>orange</option>
                <option>blue</option>
                <option>black</option>
                <option>yellow</option>
            </select>
        </div>
    )
}


export default SixApp;