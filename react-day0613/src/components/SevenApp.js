import React, { useState } from "react";
import '../App.css';
import RowItemApp from "./RowItemApp";
import WriteForm from "./WriteForm";

const SevenApp=()=>{
    const [board,setBoard]=useState([
        {
            name : '이영자',
            photo : 's2',
            blood : 'AB',
            today : new Date()
        },
        {
            name : '강호동',
            photo : 's5',
            blood : 'A',
            today : new Date()
        },
        {
            name : '유재석',
            photo : 's7',
            blood : 'O',
            today : new Date()
        }
    ]);

    //데이터 추가하는 함수 이벤트
    const dataSave=(data)=>{
        // console.log(data);
        setBoard(board.concat({
            ...data,
            today:new Date()
        }));
    }

    //데이터 삭제하는 함수 이벤트 
    const dataDelete=(index)=>{
        setBoard(board.filter((item,i)=>i!==index));
        // setBoard([
        //          ...board.slice(0,index), // slice : 잘라내기 
        //          ...board.slice(index+1,board.length)
        //      ]);
    }

    return(
        <div>
            <h2 className="alert alert-info">SevenApp-부모,자식 컴포넌트 통신</h2>
            <WriteForm onSave={dataSave}/>
            <table className="table table-bordered" style={{width:'500px'}}>
                <caption><b>Board 배열 출력</b></caption>
                <thead>
                    <tr style={{backgroundColor:"orange"}}>
                        <th width='100'>이름</th>
                        <th width='100'>사진</th>
                        <th width='100'>혈액형</th>
                        <th width='100'>날짜</th>
                        <th width='100'>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // board.map((row,index)=>(<RowItemApp row={row} key={index}  onDelete={()=>dataDelete(index)}/>))
                        board.map((row,index)=>(<RowItemApp row={row} key={index} index={index} onDelete={dataDelete}/>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SevenApp;