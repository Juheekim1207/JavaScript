import React,{useState} from "react";
import Alert from '@mui/material/Alert';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import '../App.css';

const OneApp=()=>{
    //배열 변수 선언
    const names=['이미자','강호동','이영자','유재석','김숙'];
    //반복문을 변수에 저장후 출력해도 됨
    const nameList=names.map((name)=>(<li>{name}</li>)); //한줄일 경우 자동 리턴됨
   
    //색상을 배열로
    const colors=['red','gray','green','yellow','pink'];
    return(
        <div>
            <Alert severity="error">OneApp 컴포넌트 연습
            &nbsp;<AcUnitIcon/></Alert>

            <div>
                <h3>map 반복문 연습</h3>
                <ol>{nameList}</ol>
                <hr/>
                <ul>
                    {
                        names.map((name,idx)=>(<b style={{marginLeft:'10px'}}>{idx}:{name}</b>))
                    }
                </ul>
                <hr/>
                {
                    colors.map((color)=>(<div className="box" style={{backgroundColor:color}}></div>))
                }
            </div>
        </div>
    )
}

export default OneApp;