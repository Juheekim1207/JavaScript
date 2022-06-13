import React,{useState} from "react";
import Alert from '@mui/material/Alert';
import AirIcon from '@mui/icons-material/Air';
import '../App.css';
import img1 from '../image2/s1.JPG';
import img2 from '../image2/s2.JPG';
import img3 from '../image2/s3.JPG';
import img4 from '../image2/s4.JPG';
import img5 from '../image2/s5.JPG'; 

const TwoApp=()=>{
    const imgArr=[img1,img2,img3,img4,img5];
    const imgArr2=['7','8','9','10','11']
    return(
        <div>
            <Alert severity="warning">TwoApp 컴포넌트 연습
            &nbsp;<AirIcon/></Alert>
            <h4>src 이미지를 배열에 넣어 반복하기</h4>
            {
                imgArr.map((img)=>(<img src={img} alt="" style={{marginLeft:'20px'}}/>))
            }
            <h4>public 이미지를 배열에 넣어 반복하기</h4>
            {
                imgArr2.map(img2=>(<img className="photo" src={`image/${img2}.jpg`} alt=""/>))
            }
        </div>
    )
}

export default TwoApp;