import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

const ShopRowItem=({idx,row})=>{
    let photoUrl="http://localhost:9001/save/";
    const Navi=useNavigate();

    return(
        <div className="rowItem">
            {/* {idx+1} */}
                <img src={photoUrl+row.photo} alt="" className="small"/>
                <br/>
                <h4>{row.sangpum}</h4>
                <button type="button" className="d_btn" onClick={()=>{
                    Navi(`/shop/detail/${row.num}`);
                    // Navi("/shop/detail/"+row.num);
                }}>Detail ></button>
        </div>
 )
}

export default ShopRowItem;