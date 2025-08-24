import React from "react";
import MonitorIcon from "../../assets/leftNavbar/monitor.svg";
import ProductIcon from "../../assets/leftNavbar/tag.svg";
import SettinsIcon from "../../assets/leftNavbar/settings.svg"
import LogsIcon from "../../assets/leftNavbar/document.svg";
import "./leftNavbar.css";
let BtnNavBar = ({ icon, children }) => {
    return <div className="btn-nav-bar">
        <img src={icon}></img>
        <p>{children}</p>
    </div>
}
let HeadNavBar = () => {
    return <>
        <div className="head-data">       
            <div className="icon-heads">
                <img src={MonitorIcon}></img>
            </div>
           
            <p style={{color:"white"}}>Monitor</p>
        </div>

    </>
}
let LeftNavbar = () => {
    return <div>
        <ul className="listNavbar">
            <li className="head-nav">
                <HeadNavBar/>
            </li>
            <li>
                <BtnNavBar icon={ProductIcon}>Товары</BtnNavBar>
            </li>
            <li>
                <BtnNavBar icon={LogsIcon}>Логи</BtnNavBar>
            </li>
            <li>
                <BtnNavBar icon={SettinsIcon}>Настройки</BtnNavBar>
            </li>
        </ul>
    </div>
}
export default LeftNavbar;