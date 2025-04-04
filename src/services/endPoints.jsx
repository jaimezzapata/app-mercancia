let server = 'http://localhost:'
let port = 3000
let urlBase = server + port

export let endPoints = [
  {
    URL: `${urlBase}/clientes`,
    nombre: 'clientes'
  },
  {
    URL: `${urlBase}/envios`,
    nombre: 'envios'
  },
]