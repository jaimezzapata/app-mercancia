import { endPoints } from '../../services/endPoints'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Login.css'
import { alertaError, alertRedireccion, generaId } from '../../helpers/funciones'

const Login = () => {

  const [usuarios, setUsuarios] = useState([])
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const redireccion = useNavigate()
  function getUsuarios() {
    fetch(endPoints[0].URL)
      .then((response) => response.json())
      .then((json) => setUsuarios(json))
  }
  function buscarUsuario() {
    return usuarios.find((item) => item.usuario == usuario && item.password == password)
  }
  const iniciarSesion = () => {
    const usuarioEncontrado = buscarUsuario();
    if (usuarioEncontrado) {
      const tokenLogin = generaId(); 
      localStorage.setItem("token", tokenLogin);
      localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado));
      alertRedireccion(redireccion, "/home", "Será redirigido a la página principal");
    } else {
      alertaError("Error de credenciales", "Por favor, verifique su usuario y contraseña", "error");
    }
  };
  useEffect(() => {
    getUsuarios()
  }, [])

  return (
    <div className="login-box">
      <p>Login</p>
      <form>
        <div className="user-box">
          <input onChange={(e) => setUsuario(e.target.value)} required="" name="" type="text" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input onChange={(e) => setPassword(e.target.value)} required="" name="" type="password" />
          <label>Password</label>
        </div>
        <a className='btn-login' onClick={iniciarSesion}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
      <p>Don't have an account? <a href="" className="a2">Sign up!</a></p>
    </div>
  )
}

export default Login