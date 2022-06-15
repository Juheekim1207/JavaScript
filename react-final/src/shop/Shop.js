import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Shop=()=>{
    const navi=useNavigate();
    return(
        <div>
            <button type="button" className="btn btn-info"
            style={{width:'120px'}} onClick={()=>{
                navi("/shop/form"); //상품 폼 페이지로 이동
            }}>상품등록</button>
        </div>
    )
}

export default Shop;