import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorage.getItem("token");
  //const navigate = useNavigate();

  if (!token) {
    alert("Please LogIn");
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
