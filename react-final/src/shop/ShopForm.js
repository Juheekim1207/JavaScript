import React, { useState } from "react";
import '../App.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShopForm=()=>{
    const [photo,setPhoto]=useState('');
    const [sangpum,setSangpum]=useState('');
    const [su,setSu]=useState('');
    const [dan,setDan]=useState('');

    const Navi=useNavigate();

    //url 등록
    let uploadUrl="http://localhost:9001/shop/upload";
    let photoUrl="http://localhost:9001/save/";
    let insertUrl="http://localhost:9001/shop/insert";

    //file change 호출 이벤트
    const uploadImage=(e)=>{
        const uploadFile=e.target.files[0]; //업로드한 파일
        //객체에 전달 
        const imageFile=new FormData();
        imageFile.append("uploadFile",uploadFile); //백앤드에 저장한 변수명과 동일해야한다
  
        axios({
            method:'post',
            url:uploadUrl,
            data:imageFile,
            headers:{'Context-Type':'multipart/form-data'}
            }).then(res=>{
                setPhoto(res.data);//백앤드에서 보낸 변경된 이미지명 //백앤드 return값 photoName 
            }).catch(err=>{
                alert(err);
            });
    }

    //추가하는 함수 이벤트
    const onInsert=()=>{
        axios.post(insertUrl,{sangpum,dan,su})// 변수명이 같을 떄는 생략 가능 sangpum:sangpum -> sangpum
        .then(res=>{
            Navi("/shop/list");
            //목록으로 이동     
        })
    }

    return(
        <div>
            <table className="shopForm" style={{fontSize:'20px',marginLeft:'200px'}}>
                <caption><h3>상품등록</h3></caption>
                <br/>
                <tbody>
                    <tr>
                        <th width="100">상품명</th>
                        <td width='420'>
                            <input type='text' className="form-control"
                            style={{width:'400px'}} onChange={(e)=>{
                                setSangpum(e.target.value);
                            }}/>
                        </td>
                        <th>{sangpum}</th>
                    </tr>
                    <tr>
                        <th width="100">상품사진</th>
                        <td width='420'>
                            <input type='file' className="form-control"
                            style={{width:'400px'}} onChange={uploadImage}/>
                        </td>
                        <th>{photo}</th>
                    </tr>
                    <tr>
                        <th width="100">수 량</th>
                        <td width='420'>
                            <input type='text' className="form-control"
                            style={{width:'400px'}} onChange={(e)=>{
                                setSu(e.target.value);
                            }}/>
                        </td>
                        <th>{su}</th>
                    </tr>
                    <tr>
                        <th width="100">단 가</th>
                        <td width='420'>
                            <input type='text' className="form-control"
                            style={{width:'400px'}} onChange={(e)=>{
                                setDan(e.target.value);
                            }}/>
                        </td>
                        <th>{dan}</th>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <img alt="" src={photo!=""?(photoUrl+photo):"../main/upload.jpg"} style={{width:'500px',height:'380px'}}/>
                            <button type="button" className="btn"
                            style={{width:'500px',height:'50px'}} onClick={onInsert}>상품등록</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShopForm;