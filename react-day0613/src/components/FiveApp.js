import React, { useRef, useState } from "react";
import '../App.css';

const FiveApp=()=>{
    const [result,setResult]=useState('');
    const nameRef=useRef('');
    const korRef=useRef('');
    const engRef=useRef('');
    const matRef=useRef('');
    
    const buttonResult=()=>{
        //data 읽어오기
        let name = nameRef.current.value;
        let kor = Number(korRef.current.value);
        let eng = Number(engRef.current.value);
        let mat = Number(matRef.current.value);
        let tot = kor+eng+mat;
        let avg = (tot/3).toFixed(2);

        let r = 
        `[결과 확인]
        이 름 : ${name}  
        국어점수 : ${kor}
        영어점수 : ${eng}
        수학점수 : ${mat}
        총 점 : ${tot}
        평 균 : ${avg}`;
        setResult(r);

        //입력후 빈칸 만들기
        nameRef.current.value='';
        korRef.current.value='';
        engRef.current.value='';
        matRef.current.value='';

        //포커스
        nameRef.current.focus();        
    }

    return(
        <div>
            <h3 className="alert alert-success">FiveApp 컴포넌트-useRef예제</h3>
            <h4>이름입력 : <input type='text' ref={nameRef}/></h4>
            <h4>국어점수 : <input type='text' ref={korRef}/></h4>
            <h4>영어점수 : <input type='text' ref={engRef}/></h4>
            <h4>수학점수 : <input type='text' ref={matRef}/></h4>
            <button type="button" className="btn btn-danger"
            onClick={buttonResult}>결과확인</button>
            <h2 className="alert alert-info" style={{whiteSpace:'pre-wrap'}}>{result}</h2>
        </div>
    )
}

export default FiveApp;