import React from "react";
import BtnNav from "./BtnNavBar/BtnNav";
import DeleteImage from "../../assets/delete.svg";
import AddProduct from '../../assets/add_product.svg';
import Export from '../../assets/export_xlsx.svg';
import Filter from '../../assets/filter.svg';
import Label from '../../assets/label.svg';
import Reflesh from '../../assets/refresh.svg';
import Reset from '../../assets/reset.svg';
import StartParser from '../../assets/start_parser.svg';
import "./NavData.css";
let NavData = () => {
    return <div className="nav-bar-info">
        <div className="nav-i nav-left">
            <BtnNav image={Filter} color="#007bff" onClick={() => alert("11")}>Фильтр</BtnNav>
            <BtnNav image={Reset} color="#6c757d" onClick={() => alert("11")}>Сбросить фильтр</BtnNav>

        </div>
        <div className="nav-i nav-rigth">
            <BtnNav image={AddProduct} color="green" onClick={() => alert("11")}>Добавить товары</BtnNav>
            <BtnNav image={Label} color="#ffc107" onClick={() => alert("11")}>Добавить/удалить метку</BtnNav>
            <BtnNav image={DeleteImage} color="#e87c86" onClick={() => alert("11")}>Удалить товары</BtnNav>
            <BtnNav image={Export} color="green" onClick={() => alert("11")}>Выгрузка в xlsx</BtnNav>
            <BtnNav image={Reflesh} color="blue" onClick={() => alert("11")}>Обновить товары</BtnNav>
            <BtnNav image={StartParser} color="red" onClick={() => alert("11")}>Запустить парсер</BtnNav>
        </div>
    </div>
}
export default NavData;