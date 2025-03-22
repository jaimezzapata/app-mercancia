
const Card = ({prop}) => {  
  return (
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
        <h3 className="card__title">{prop.id}</h3>
        <p className="card__description">Categoria: {prop.categoria}</p>
        <p className="card__description">Origen: {prop.origen}</p>
        <p className="card__description">Destino: {prop.destino}</p>
        <p className="card__description">Fecha Entrega:{prop.fecha_entrega}</p>
        <p className="card__description">Fecha Envío: {prop.fecha_envio}</p>
        <div className="card__buttons">
          <button className="card__button">Editar</button>
          <button className="card__button">Eliminar</button>
        </div>
      </div>
    </div>
  )
}

export default Card