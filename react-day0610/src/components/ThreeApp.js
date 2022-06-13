import React,{useState} from "react";
import Alert from '@mui/material/Alert';
import AppleIcon from '@mui/icons-material/Apple';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import '../App.css';

const ThreeApp=()=>{
    const [names,setNames]=useState(['이영자','강호동','유재석','이효리','이진']);
    const [irum,setIrum]=useState('');
    //추가버튼 이벤트
    const btnInsert=()=>{
        if(irum===''){
            alert("이름을 입력후 추가해주세요!!!");
            return;
        }
        setNames(names.concat(irum)); //배열에 irum 데이터 추가
        setIrum('');
    }

    //입력 keyup 이벤트
    const txtEnter=(e)=>{
        if(e.key==="Enter"){
            btnInsert();
           // e.target.value=''; //엔터 누르면 빈칸 내용 지우기 
        }
    }

    //입력 change 이벤트
    const txtInput=(e)=>{
        setIrum(e.target.value);
    }

    //더블클릭시 이름 삭제 이벤트
    const dataRemove=(index)=>{
        // console.log(index);
        // 방법 1 
        // setNames([
        //     ...names.slice(0,index), // slice : 잘라내기 
        //     ...names.slice(index+1,names.length)
        // ]);
        // 방법 2
        setNames(names.filter((item,i)=>i!==index)); //index번지만 걸러냄
    }
    return(
        <div>
            <Alert severity="info">ThreeApp 컴포넌트 연습
            &nbsp;<AppleIcon/></Alert> 
            <div style={{marginLeft:'100px'}}>   
            <TextField id="standard-basic" label="이름입력" variant="standard"
            onChange={txtInput}
            onKeyDown={txtEnter} 
            value={irum}/>
            <Button color="success" variant="outlined" size="large"
            onClick={btnInsert}>추가</Button>
            <br/>
            <h5>이름에서 더블클릭하면 삭제됩니다</h5>
            <ul>
                {
                    names.map((na,index)=>(
                    <li className="data" key={index} onDoubleClick={()=>dataRemove(index)}>{na}</li>
                    ))
                }
            </ul>
            </div>    
        </div>
    )
}

export default ThreeApp;