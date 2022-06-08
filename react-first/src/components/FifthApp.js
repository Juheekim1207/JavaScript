import React,{useState} from "react";

const FifthApp=()=>{

    const [name,setName]=useState('');
    const [java,setJava]=useState(0);
    const [spring,setSpring]=useState(0);
    const [total,setTotal]=useState(0);
    const [avg,setAge]=useState(0);
    const [imgStyle,setImgStyle]=useState({display:'none'});

    return(  
    <div>
        <hr></hr>
        <h2 className="alert alert-info">FifthApp입니다</h2>
        <div className="inp">
            이름 : <input type='text' style={{width:'100px'}}
                onChange={(e)=>{
                    setName(e.target.value);
                }}/><span style={{marginLeft:'10px'}}>{name}</span>
                <br/>
            자바 : <input type='text' style={{width:'100px'}}
            onChange={(e)=>{
                setJava(e.target.value);
            }}/><span style={{marginLeft:'10px'}}>{java}</span>
            <br/>
            스프링 : <input type='text' style={{width:'100px'}}
            onChange={(e)=>{
                setSpring(e.target.value);
            }}/><span style={{marginLeft:'10px'}}>{spring}</span>
            <br/>   
            <button type="button" className="btn btn-info"
            onClick={()=>{
                setTotal(Number(java)+Number(spring));
                setAge((Number(java)+Number(spring))/2);
                setImgStyle({display:''});
            }}>결과확인</button>
            <div className="result"
            style={imgStyle}>
                <h5>이름 : {name}</h5>
                <h5>자바점수 : {java}</h5>
                <h5>스프링점수 : {spring}</h5>
                <h5>총점 : {total}점</h5>
                <h5>평균 : {avg}점</h5>
            </div>       
        </div>
    </div>
    )
}

export default FifthApp;