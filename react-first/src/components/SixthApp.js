import React,{useState} from "react";

const SixthApp=()=>{

    const [number,setNumber]=useState(0);
    return(
        <div>
            <div className="circle"><b>{number}</b></div>
            <br></br>
            <button type="button" 
            style={{marginLeft: '80px'}}
            onClick={()=>{
                if(number>0){
                setNumber(number-1);
                }
            }}>감소</button>
            <button type="button" 
            onClick={()=>{
                setNumber(number+1);
            }}>증가</button>
        </div>
    )
}

export default SixthApp;