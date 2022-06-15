import React, { useState } from "react";
import '../App.css';
import axios from "axios";

const ShopForm=()=>{
    const [photo,setPhoto]=useState('');
    const [sangpum,setSangpum]=useState('');
    const [su,setSu]=useState('');
    const [dan,setDan]=useState('');

    //url 등록
    let uploadUrl="http://localhost:9001/shop/upload";
    let photoUrl="http://localhost:9001/save/";

    //file change 호출 이벤트
    const uploadImage=(e)=>{
        const uploadFile=e.target.files[0];
        const imageFile=new FormData();
        imageFile.append("uploadFile",uploadFile);

        axios({
            method:'post',
            url:uploadUrl,
            data:imageFile,
            headers:{'Content-Type':'multipart/form-data'}
            }).then(res=>{
                setPhoto(res.data); //백앤드에서 보낸 변경된 이미지명
            }).catch(err=>{
                alert(err);
            });
    }

    return(
        <div>
            <table className="table table-bordered" style={{width:'600px',fontSize:'20px'}}>
                <caption><b>상품등록</b></caption>
                <tbody>
                    <tr>
                        <th width="100" style={{backgroundColor:'#fef'}}>상픔명</th>
                        <td width='300'>
                            <input type='text' className="form-control"
                            style={{width:'250px'}}/>
                        </td>
                    </tr>
                    <tr>
                        <th width="100" style={{backgroundColor:'#fef'}}>상픔사진</th>
                        <td width='300'>
                            <input type='file' className="form-control"
                            style={{width:'250px'}} onChange={uploadImage}/>
                        </td>
                        <th>{photo}</th>
                    </tr>
                    <tr>
                        <th width="100" style={{backgroundColor:'#fef'}}>수 량</th>
                        <td width='300'>
                            <input type='text' className="form-control"
                            style={{width:'120px'}}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <img alt="" src={photoUrl+photo}  style={{width:'380px',height:'380px'}}/>
                        </td>
                        <td style={{height:'380px',lineHeight:'380px',textAlign:'center'}}>
                            <button type="button" className="btn"
                            style={{width:'150px',height:'50px'}}>상품등록</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShopForm;