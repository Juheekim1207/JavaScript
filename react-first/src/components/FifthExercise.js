import React,{useState} from "react";

const FifthExercise=()=>{
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [addr,setAddr]=useState('');
    const [hp,setHp]=useState('');
    const [resultStyle,setResultStyle]=useState({display:'none'});

    return (
        <div>
            <div className="box">
                이 름 : 
                &nbsp;
                <input type="text" onChange={(e)=>{setName(e.target.value);}}/>
                <br></br>
                나 이 : 
                &nbsp;
                <input type="text" onChange={(e)=>{setAge(e.target.value);}}/>
                <br></br>
                주 소 : 
                &nbsp;
                <input type="text" onChange={(e)=>{setAddr(e.target.value);}}/>
                <br></br>
                번 호 : 
                &nbsp;
                <input type="text" onChange={(e)=>{setHp(e.target.value);}}/>
                <br></br>
            </div>
            <button type="button" className="btn btn-warning" id="btn1"
            style={{marginLeft:'100px', marginTop:'20px', width:'240px',fontFamily:'East Sea Dokdo'}}
            onClick={()=>{
                setResultStyle({display:''});
            }}>결과 확인</button>
            <div className="result1" style={resultStyle}>
                이름 : {name} 
                <br></br>
                나이 : {age}세
                <br></br>
                주소 : {addr}
                <br></br>
                전화번호 : {hp}
                <br></br>
            </div>
        </div>
    )
}
export default FifthExercise;