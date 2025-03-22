import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card'
let apiEnvios = 'http://localhost:3000/envios'


function App() {

  const [cards, setCards] = useState([])
  const [errors, setErrors] = useState([])
  function getEnvios() {
    fetch(apiEnvios)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCards(data)
      })
      .catch(error => {
        console.log(error)
        setErrors(error)
      })
  }

  useEffect(() => {
    getEnvios()
  }, [])

  return (
    <div className="aplicacion">
      <aside className="aplicacion__menu-lateral">
        <h1 className="aplicacion__menu-lateral-logo">Track <span className="aplicacion__menu-lateral-logo--resaltado">X</span></h1>
        <img className="aplicacion__menu-lateral-logo-imagen" src="/logo.jpg" alt="Logo" />
        <nav className="aplicacion__menu-lateral-navegacion">
          <a className="aplicacion__menu-lateral-navegacion-item" href="/">Inicio</a>
          <a className="aplicacion__menu-lateral-navegacion-item" href="/">Gestión de envíos</a>
          <a className="aplicacion__menu-lateral-navegacion-item" href="/">Gestión de clientes</a>
          <a className="aplicacion__menu-lateral-navegacion-item" href="/">Cerrar sesión</a>
        </nav>
      </aside>
      <div className="aplicacion__contenido">
        <div className="aplicacion__contenido-fondo"></div>
        <main className="aplicacion__principal">
          <section className="aplicacion__eslogan">
            <h2 className="aplicacion__eslogan-texto"><span>TrackX:</span> Logística inteligente, rastreo preciso.</h2>
          </section>
          <section className="aplicacion__informacion">
            <div className='cards'>
              {
                cards.length == 0 ? <h2 className='cards__vacias'>No hay información registrada</h2> : cards.map((card) => {
                  return <Card key={card.id} prop={card} />
                })
              }
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App