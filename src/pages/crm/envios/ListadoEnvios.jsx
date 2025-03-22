import React, { useEffect, useState } from 'react'
import { endPoints } from '../../../services/endPoints'
import Card from '../../../components/Card'

const ListadoEnvios = () => {

  const [envios, setEnvios] = useState([])
  const [errores, serErrores] = useState(null)
  const usuarioActual = JSON.parse(localStorage.getItem('usuarioLogueado'))

  function getEnvios() {
    fetch(endPoints[1].URL)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const enviosUsuario = json.filter((item) => item.clienteId == usuarioActual.id)
        console.log(enviosUsuario);
        setEnvios(enviosUsuario)
      })
  }

  useEffect(() => {
    getEnvios()
  }, [])

  return (
    <div className='cards'>
      {
        envios.map((envio) => <Card key={envio.id} envio={envio} type={endPoints[1].nombre} />)
      }
    </div>
  )
}

export default ListadoEnvios