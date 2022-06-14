import React, { useState } from "react";
import '../App.css';

const EwriteApp=({onSave})=>{
    const [photo,setPhoto]=useState('s1');
    const [name,setName]=useState('');
    const [age,setAge]=useState(0);
    const [addr,setAddr]=useState('');

    const addEvent=()=>{
        onSave({photo,name,age,addr});
        
        
    }

    return(
        <div>
            <b>사 진 : </b>
            <select onChange={(e)=>{
                setPhoto(e.target.value);
            }}>
                {
                    [...new Array(10)].map((a,idx)=>(<option>{`s${idx+1}`}</option>))
                }
            </select>
            &nbsp;&nbsp;
            <b>이 름 : </b>
            <input onChange={(e)=>{
                setName(e.target.value);
            }} style={{width:'80px'}}></input>
            &nbsp;&nbsp;
            <b>나 이 : </b>
            <input onChange={(e)=>{
                setAge(e.target.value);
            }} style={{width:'80px'}}></input>
            &nbsp;&nbsp;
            <b>주 소 : </b>
            <input onChange={(e)=>{
                setAddr(e.target.value);
            }} style={{width:'80px'}}></input> 
            &nbsp;&nbsp;
            <button type="button" className="btn btn-info" onClick={addEvent}>등록</button>
            <br/><br/>
        </div>
    )
}

export default EwriteApp;