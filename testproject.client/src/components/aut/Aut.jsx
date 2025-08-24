import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  let token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}