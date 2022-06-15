import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
import titleImg from '../image/logo.png';

const Title=()=>{
    return(
        <div>
            <div className="logo">
                <NavLink to="/">
                    <img src={titleImg} alt=""/>
                </NavLink>
            </div>
        </div>
    )
}

export default Title;