import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { alertRedireccion } from '../helpers/funciones'

const MenuLateral = () => {
  const redireccion = useNavigate()
  const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioLogueado'))

  function cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
    alertRedireccion(redireccion, '/', 'Cerrando sesión...')

  }

  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">Track <span className="aplicacion__menu-lateral-logo--resaltado">X</span></h1>
      <h2>Usuario: {usuarioGuardado.nombre}</h2>
      <img className="aplicacion__menu-lateral-logo-imagen" src="/logo.jpg" alt="Logo" />
      <nav className="aplicacion__menu-lateral-navegacion">
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/home">Inicio</Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="envios">Gestión de envíos</Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/">Gestión de clientes</Link>
        <button type='button' onClick={cerrarSesion} className="aplicacion__menu-lateral-navegacion-item" >Cerrar sesión</button>
      </nav>
    </aside>
  )
}

export default MenuLateral