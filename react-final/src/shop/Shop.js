import React,{useState,useEffect} from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ShopRowItem from "./ShopRowItem";

const Shop=()=>{
    const navi=useNavigate();
    //백엔드에서 받아올 리스트 데이터 변수 
    const [shopList,setShopList]=useState([]);

    //데이터 가져오는 함수 
    const list=()=>{
        let url="http://localhost:9001/shop/list";

        axios.get(url)
        .then(res=>{
            //스프링으로부터 받아온 List를 ShopList에 넣기
            setShopList(res.data);
            console.log("len="+res.data.length);
        })
    }

    //처음 랜더링시 한번 데이터 가져오기 
    useEffect(()=>{
        // console.log("list");
        list();
    },[]);

    return(
        <div>
            <h2 className="shopList">상품목록</h2>
            <button type="button" className="l_btn" onClick={()=>{
                navi("/shop/form"); //상품 폼 페이지로 이동
            }}>+ 상품등록</button> 
            <br/>
            <hr style={{clear:'both'}}/>
                    {
                        shopList.map((row,idx)=>(
                            <ShopRowItem key={idx} idx={idx} row={row}/>
                        ))
                    }
                {/* </tbody>
            </table> */}
        </div>
    )
}

export default Shop;