
import React, { useId, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";


let CheckAndGetToken = async (login,pass) => {
    
        let result = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ login: login, password: pass })
        })
      
    if (result.ok) {
        let token = await result.json();
        return token.token;
    }
    else
    {
        let error = await result.text();
        alert(`Помилка авторизації: ${error}`);
        console.log(error);
    }

   
}
let onSumbit= (e,login,password,navigate) => {
    e.preventDefault();
    CheckAndGetToken(login, password)
        .then(a => {
            if (typeof (a) === typeof ("222")) {
                localStorage.setItem("token", a);
                navigate("/home");
            }
        })
   
}

let InputLogin = ({placeholder,label,onChange,type="text"})=>{
    let uniqueId = useId();
    return <div className="container-group-i">
        <div className="input-group group-i">    
            <label htmlFor={uniqueId}>{label}</label>
            <input onChange={onChange} type={type} id={uniqueId} placeholder={placeholder} className="form-group"></input>
        </div>
    </div>
}
let Login = ()=>
{
    let [loggin,setLogin] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();
    return <form onSubmit={e => onSumbit(e, loggin, password,navigate)} className="input-form-login">
        <InputLogin onChange={(e) => setLogin(e.target.value)} label="Логін" placeholder="Введіть логін" />
        <InputLogin onChange={(e) => setPassword(e.target.value)} type="password" label="Пароль" placeholder="Введіть пароль"/>
          <input type="submit" value="Ввійти на сайт" className="btn btn-primary login-button"></input>
        </form>
    }
export default Login;