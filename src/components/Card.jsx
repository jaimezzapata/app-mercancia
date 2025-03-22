import React from 'react'

const Card = ({ envio, type }) => {
  const usuarioActual = JSON.parse(localStorage.getItem('usuarioLogueado'))
  return (
    <>
      {
        type == "envios" ? (
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
              <p className="card__description">ID Envío: {envio.id}</p>
              <p className="card__description">Nombre cliente: {usuarioActual.nombre}</p>
              <p className="card__description">Origen:{envio.ciudadOrigen}</p>
              <p className="card__description">Destino: {envio.ciudadDestino}</p>
              <p className="card__description">Fecha Entrega: {envio.fechaEntrega}</p>
              <p className="card__description">Fecha Envío: {envio.ciudadDestino}</p>
              <div className="card__buttons">
                <button className="card__button">Editar</button>
                <button className="card__button">Eliminar</button>
              </div>
            </div>
          </div>
        ) : (
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
        )
      }
    </>
  )
}

export default Card