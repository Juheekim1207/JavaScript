import React, {useState} from "react";
import '../App.css';

// const RowItemApp=({row,index,onDelete})=>{

const RowItemApp=(props)=>{
    let {row,index,onDelete}=props;

    //삭제버튼 이벤트
    const deleteDataEvent=()=>{
        onDelete(index); //부모가 props로 보낸 이벤트 호출
    }

    return(
       <tr>
            <td>{row.name}</td>
            <td><img src={`../image/${row.photo}.JPG`} alt=""
            style={{width:'100px',height:'100px',border:'1px solid gray'}}/></td>
            <td>{row.blood}형</td>
            <td>{row.today.toLocaleDateString('ko-KR')}</td> 
            <td>
                <button type="button" className="btn btn-sm btn-danger" onClick={deleteDataEvent}>삭제</button>
            </td>
       </tr>
    )
}

export default RowItemApp;