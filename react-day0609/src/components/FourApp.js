import React, { useState } from "react";
import '../App.css';
import img1 from '../components/image/1.jpg'
import img2 from '../components/image/2.jpg'
import img3 from '../components/image/3.jpg'
import img4 from '../components/image/4.jpg'
import img5 from '../components/image/5.jpg'

const FourApp=()=>{
    const [hp1,setHp1]=useState('02');
    const [hp2,setHp2]=useState('');
    const [hp3,setHp3]=useState('');
    const [photo,setPhoto]=useState(1);

    const changePhoto=(e)=>{
        setPhoto(Number(e.target.value));
    }

    return(
        <div>
            <br></br>
            <select className="select1"
            onChange={(e)=>{
                setHp1(e.target.value);
            }}>
                <option value="02" selected>02</option>
                <option value="041">041</option>
                <option value="042">042</option>
                <option value="010">010</option>
                <option value="011">011</option>
            </select>
            &nbsp;-&nbsp;
            <input type="text" maxlength="4" style={{width:'80px'}}
            onKeyUp={(e)=>{
                setHp2(e.target.value);
            }}></input>
            &nbsp;-&nbsp;
            <input type="text" maxlength="4" style={{width:'80px'}}
            onKeyUp={(e)=>{
                setHp3(e.target.value);
            }}></input>
            <br></br><br></br>
            <b style={{marginLeft:'50px'}}>이미지선택</b>
            <select className="form-control"
            onChange={changePhoto}>
                <option value="1">철수</option>
                <option value="2">민희</option>
                <option value="3">영희</option>
                <option value="4">길동</option>
                <option value="5">순자</option>
            </select>
            <h1 className="hp">
                <div className="hp1">{hp1}</div> 
                <span className="s1">-</span>
                <div className="hp2">{hp2}</div>
                <span className="s2">-</span>
                <div className="hp3">{hp3}</div>
            </h1>
            <img src={photo===1?img1:photo===2?img2:photo===3?img3:photo===4?img4:img5} alt="" className="photo"></img>
        </div>
    )
}

export default FourApp;

