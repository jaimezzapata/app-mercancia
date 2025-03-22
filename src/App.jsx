import './App.css'
function App() {
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
              <div className="card">
                <div className="tools">
                  <div className="circle">
                    <span className="red box"></span>
                  </div>
                  <div className="circle">
                    <span className="yellow box"></span>
                  </div>
                  <div className="circle">
                    <span className="gray box"></span>
                  </div>
                </div>
                <div className="card__content">
                  <h3 className="card__title"></h3>
                  <p className="card__description">Categoria:</p>
                  <p className="card__description">Origen:</p>
                  <p className="card__description">Destino:</p>
                  <p className="card__description">Fecha Entrega:</p>
                  <p className="card__description">Fecha Envío:</p>
                  <div className="card__buttons">
                    <button className="card__button">Editar</button>
                    <button className="card__button">Eliminar</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App