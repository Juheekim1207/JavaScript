import React, { useState } from "react";
import '../App.css';

const FiveApp=()=>{
    const[photo,setPhoto]=useState('../image2/s1.JPG');
    const changeDoll=(e)=>{
        setPhoto(e.target.value);
    }
    return(
        <div>
            <h2 className="alert alert-danger">FiveApp입니다!!!</h2>

            <div style={{fontSize:'20px'}}>
                <b>인형선택 : </b>
                <label>
                <input type="radio" name="photo" value='../image2/s1.JPG' defaultChecked/>인형1 &nbsp;
                </label>
                <label>
                <input type="radio" name="photo" value='../image2/s2.JPG' onChange={changeDoll}/>인형2 &nbsp;
                </label>
                <label>
                <input type="radio" name="photo" value='../image2/s3.JPG' onChange={changeDoll}/>인형3 &nbsp;
                </label>
                <label>
                <input type="radio" name="photo" value='../image2/s4.JPG' onChange={changeDoll}/>인형4 &nbsp;
                </label>
                <label>
                <input type="radio" name="photo" value='../image2/s5.JPG' onChange={changeDoll}/>인형5 &nbsp;
                </label>
                <label>
                <input type="radio" name="photo" value='../image2/s6.JPG' onChange={changeDoll}/>인형6 &nbsp;
                </label>
                <label>
                <input type="radio" name="photo" value='../image2/s7.JPG' onChange={changeDoll}/>인형7 &nbsp;
                </label>
                <label>
                <input type="radio" name="photo" value='../image2/s8.JPG' onChange={changeDoll}/>인형8 &nbsp;
                </label>
            </div>
            <img src={photo} alt=""/>
        </div>
    )
}


export default FiveApp;