import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children, accessBy }) => {
  const { user } = UserAuth();

  
  if (accessBy === "non-authenticated") {
    return !user ? children : <Navigate to="/home" replace />;
  }

  
  if (accessBy === "authenticated") {
    return user ? children : <Navigate to="/login" replace />;
  }

  
  return <Navigate to="/login" replace />;
};