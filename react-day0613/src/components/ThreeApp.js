import React, { useState } from "react";
import '../App.css';

const ThreeApp=()=>{
    const [boards,setBoards]=useState([
        {   no : 1,
            writer : '이미자',
            subject : 'hello',
            photo : 's1'
        },
        {   no : 2,
            writer : '강호동',
            subject : '하이',
            photo : 's2'
        },
        {   no : 3,
            writer : '김말자',
            subject : 'hihi',
            photo : 's3'
        },
        {   no : 4,
            writer : '오동통',
            subject : '헬로헬로',
            photo : 's4'
        },
        {   no : 5,
            writer : '유재석',
            subject : 'nihao',
            photo : 's5'
        }
    ]);
    return(
        <div>
            <h3 className="alert alert-danger">ThreeApp 컴포넌트</h3>
            <table className="table table-bordered" style={{width:'500px'}}>
                <caption><b>배열 객체 출력</b></caption>
                <thead>
                    <tr style={{backgroundColor:'#ddd'}}>
                        <th width='60'>번호</th>
                        <th width='100'>사진</th>
                        <th width='300'>제목</th>
                        <th width='100'>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boards.map((row,index)=>(
                        <tr key={index}>
                            <td>{row.no}</td>
                            <td><img src={`../image/${row.photo}.JPG`} alt="" width='50'/></td>
                            <td>{row.subject}</td>
                            <td>{row.writer}</td>
                        </tr>    
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ThreeApp;