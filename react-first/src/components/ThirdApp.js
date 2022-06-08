import React,{useState} from "react";
import '../components/MyStyle.css';
import FourthApp from "./FourthApp";
import FifthApp from "./FifthApp";

const ThirdApp=()=>{
    //상태관리를 위한 변수설정
    const [message,setMessage]=useState('Happy Day'); //변수명, 세터메세지명

    //이벤트 함수 
    const handleEnter=(e)=>{
        if(e.key==='Enter'){
            setMessage(''); //메세지 변수값 지우기 
            e.target.value=''; //입력값 지우기
        }
    }
    return(
        <div style={{fontFamily:'Gowun Batang', marginTop: '100px'}}>
            <h2 className="alert alert-info" style={{fontFamily:'East Sea Dokdo'}}>ThirdApp 입니다!!!</h2>
            <h3 style={{color: 'red'}}>{message}</h3>
            <hr/>
            <h4 style={{fontFamily:''}}>메세지를 입력해주세요</h4>
            <input type='text' style={{width: '300px', height:'30px', fontSize: '20px', textAlign: 'center'}}
              defaultValue={message}
              onChange={(e)=>{
                // console.log(e.target.value); //입력한 값
                // messge 변수에 입력값을 넣는다
                setMessage(e.target.value);
            }} 
            //keyup : 키를 눌렀다 떼었을때 적용 
            onKeyUp={handleEnter}/> 
            <hr></hr>
            <FourthApp/>
        </div>
    )
}
export default ThirdApp;