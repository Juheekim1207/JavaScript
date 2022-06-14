import React, { useState } from "react";
import '../App.css';
import EitemApp from "./EitemApp";
import EwriteApp from "./EwriteForm";

const EightApp=()=>{
    const [board,setBoard]=useState([
       {
        photo : 's1',
        name : '강호동',
        age : 30,
        addr : '서울시 강남구',
        writeday : new Date()
       },
       {
        photo : 's3',
        name : '유재석',
        age : 35,
        addr : '서울시 동대문구',
        writeday : new Date()
       },
       {
        photo : 's5',
        name : '정형돈',
        age : 33,
        addr : '서울시 중랑구',
        writeday : new Date()
       },
    ]);

    const dataSave=(data)=>{
        setBoard(board.concat({
            ...data,
            writeday : new Date()
        }));
    }
    return(
        <div>
            <EwriteApp onSave={dataSave}/>
            <table className="table table-bordered" style={{width:"500px"}}>
                <thead>
                    <tr style={{backgroundColor:"orange"}}>
                        <th>사 진</th>
                        <th>이 름</th>
                        <th>나 이</th>
                        <th>주 소</th>
                        <th>날 짜</th>
                        <th>삭 제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        board.map((info,idx)=>(<EitemApp info={info} key={idx}/>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EightApp;