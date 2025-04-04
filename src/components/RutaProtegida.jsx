import { Navigate } from "react-router-dom";

const RutaProtegida = ({ proteger }) => {
  const token = localStorage.getItem("token");
  return token ? proteger : <Navigate to="/" replace />;
};

export default RutaProtegida;
