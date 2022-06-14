import React from "react";
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import RouterMain from "./RouterMain";
 
const Root=()=>{
    return(
       <BrowserRouter>
            <RouterMain/>
       </BrowserRouter>
    )
}

export default Root;