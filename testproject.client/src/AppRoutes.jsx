import RequireAuth from "./components/aut/Aut";
import  Home  from "./pages/HomePages/Home";
import Login from "./pages/HomePages/LoginPage/Login";
const AppRoutes = [
  {
    index: true,
    path:"/home",
    element: <RequireAuth><Home/></RequireAuth> 
  },
  {
    index:true,
    path:"/login",
    element:<Login/>
  }
];

export default AppRoutes;
