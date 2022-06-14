import React, { useState } from "react";
import '../App.css';

const EitemApp=({info})=>{
    const [photo,setPhoto]=useState('');
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [addr,setAddr]=useState('');

    return(
        <tr>
            <td><img alt="" src={`../image/${info.photo}.JPG`} style={{width:'50px'}}/></td>
            <td>{info.name}</td>
            <td>{info.age}</td>
            <td>{info.addr}</td>
            <td>{info.writeday.toLocaleDateString('ko-KR')}</td>
            <button type='text' className="btn btn-sm btn-danger">삭제</button>
        </tr>
    )
}

export default EitemApp;