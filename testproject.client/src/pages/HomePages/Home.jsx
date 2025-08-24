import React from "react";
import "../HomePages/Home.css";
import NavData from "../../components/navBar/NavData"
import BtnNav from "../../components/navBar/BtnNavBar/BtnNav";
import LeftNavbar from "../../components/leftPanel/LeftNavbar";
import { useNavigate } from "react-router-dom";

let Exit = (navigate) => {

    localStorage.removeItem("token");
    navigate("/login");
}
let Home = ()=>
{
        let navigate = useNavigate();
        return <div className="contPanel">
            <div className="leftPanel">
                 <LeftNavbar/>
            </div>
            <div className="rigthPanel">
                <div className="topNavBar">
                    <BtnNav fontSize="14px" colorText="gray" color="white" onClick={() => Exit(navigate)}>Вихід</BtnNav>
                </div>
                <div className="buttonNavBar">
                    <NavData/>
                </div>
                <div className="bodyPanel">

                </div>
            </div>
        </div>
    }
export default Home;