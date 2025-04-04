import App from "../pages/App";
import Login from "../pages/auth/Login";
import ListadoEnvios from "../pages/crm/envios/ListadoEnvios";
import RutaProtegida from "../components/RutaProtegida";

export const enrutador = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home/",
    element: <RutaProtegida proteger={<App />} />,
    children: [
      {
        path: "envios",
        element: <RutaProtegida proteger={<ListadoEnvios />} />
      },
    ],
  },
];
