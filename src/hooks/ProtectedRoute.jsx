import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { SpinnerLoader } from "../components/moleculas/SpinnerLoader";

export const ProtectedRoute = ({ children, accessBy }) => {
  const { user, loading } = UserAuth();

  if (loading) {
    return <SpinnerLoader />; // o un mensaje temporal "Cargando..."
  }

  if (accessBy === "non-authenticated") {
    return !user ? children : <Navigate to="/home" replace />;
  }

  if (accessBy === "authenticated") {
    return user ? children : <Navigate to="/login" replace />;
  }

  return <Navigate to="/login" replace />;
};
