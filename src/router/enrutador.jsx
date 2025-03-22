import App from "../pages/App";
import Login from "../pages/auth/Login";

export let enrutador = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <App />
  }
]