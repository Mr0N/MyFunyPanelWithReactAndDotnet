import "./BtnNav.css";
import React from "react";

let BtnNav = ({image,children,color,onClick,colorText='white',fontSize='10px'})=>{
    return <div className="buttonInfo">
     <div className="btn-nav btn" style={{backgroundColor:color,color:colorText}} onClick={onClick}>
        <img style={{height:"15px"}} src={image}></img>
        <div style={{fontSize:fontSize}}>{children}</div>
    </div></div>
}
export default BtnNav;