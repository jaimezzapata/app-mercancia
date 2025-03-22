import App from "../pages/App";
import Login from "../pages/auth/Login";
import ListadoEnvios from "../pages/crm/envios/ListadoEnvios";

export let enrutador = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home/',
    element: <App />,
    children: [
      {
        path: 'envios',
        element: <ListadoEnvios />
      }
    ]
  }
]