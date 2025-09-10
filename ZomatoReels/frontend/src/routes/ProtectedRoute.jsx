import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // or sessionStorage/cookies
  return token ? children : <Navigate to="/register" />;
};

export default ProtectedRoute;
