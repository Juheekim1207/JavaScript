import React from "react";
import '../App.css';

const Main=()=>{
    return(
        <div>
            <div className="mainImg">
            {
                [...new Array(6)].map((a,i)=>(<img src={`../main/${i+1}.jpg`} alt=""/>))
            }
 
                <img src="../main/middle.jpg" alt="" style={{width:'900px'}}/>
            
            {
                [...new Array(6)].map((a,i)=>(<img src={`../main/${i+7}.jpg`} alt=""/>))
            }
          
            </div>
        </div>
    )
}

export default Main;