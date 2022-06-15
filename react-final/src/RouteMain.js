import React from "react";
import './App.css';
import {Routes,Route} from "react-router-dom";
import { Main,About,Menu,Title,Info } from "./components";
import x from "./image/x.png";
import Login from "./login/Login";
import Board from "./board/Board";
import Member from "./member/Member";
import {Shop,ShopForm,ShopDetail,ShopRowItem} from "./shop";



const RouteMain=()=>{
    return(
        <div className="container">
            <div className="title"><Title/></div>
            <div className="info"><Info/></div>
            <div className="menu"><Menu/></div>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>

                    {/* Shop */}
                    <Route path="/shop/list" element={<Shop/>}/>
                    <Route path="/shop/form" element={<ShopForm/>}/>
                    <Route path="/shop/detail/:num" element={<ShopDetail/>}/>

                    <Route path="/board/list" element={<Board/>}/>
                    <Route path="/member/form" element={<Member/>}/>
                    <Route path="*" element={
                       <div className="x">
                        <img src={x} alt=""/>
                        <br/><br/>
                        <h1> 요청하신 페이지를 찾을 수 없습니다.</h1>
                        </div>
                    }/>
                </Routes>
            </div>
        </div>
    )
}

export default RouteMain;