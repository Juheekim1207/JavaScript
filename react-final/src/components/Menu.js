import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

const Menu=()=>{
    return(
        <div>
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/member/form">Member</NavLink></li>
                <li><NavLink to="/shop/list">Shop</NavLink></li>
                <li><NavLink to="/board/list">Board</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;