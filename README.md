# 🚚 Track X

**Track X** es una aplicación web diseñada para realizar el seguimiento de envíos de clientes hacia diferentes ciudades, de forma clara, ágil y eficiente.

---

## 📌 Descripción

Esta app permite registrar, visualizar y actualizar el estado de los envíos, asignando cada uno a un cliente y una ciudad específica. Ideal para pequeñas empresas o negocios que gestionan entregas en varias ubicaciones.

---

## 🛠️ Tecnologías utilizadas

- **React JS** – Biblioteca principal para la interfaz de usuario  
- **JSON-Server** – Simulación de API REST con datos en formato JSON  
- **React Router DOM** – Ruteo dinámico entre vistas  
- **Axios** – Cliente HTTP para conectar con la API  
- **Fetch API** – Alternativa para peticiones HTTP  
- **SweetAlert2** – Alertas modernas y estilizadas  
- **Font Awesome** – Iconografía para una interfaz más visual  
- **CSS** – Estilos personalizados  
- **HTML** – Estructura base del proyecto  

---

## 🎨 Paleta de colores

- `#F28B30`  
- `#BF8E63`  
- `#F2762E`  
- `#D95323`  
- `#731702`  

## 🔤 Tipografías

- **Lato** – Títulos  
- **Roboto** – Contenido general  

---

## 🚀 Ejecución del proyecto

El proyecto se ejecuta con dos servicios en paralelo:

- **Backend**: JSON-Server (puerto por defecto: `http://localhost:3000`)
- **Frontend**: Vite + React (puerto por defecto: `http://localhost:5173`)

---

## 💾 Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

```bash
# 1. Clona el repositorio
git clone https://github.com/jaimezzapata/app-mercancia.git
cd track-x

# 2. Instala las dependencias del frontend
npm install

# 3. Inicia el servidor JSON (backend simulado)
npx run json (este se abre automaticamente al abrir el proyecto con visual studio code)

# 4. En una nueva terminal, inicia el frontend con Vite
npm run dev (este se abre automaticamente al abrir el proyecto con visual studio code)
```

---

## 🧩 Modelo de datos (NoSQL)

### Clientes

```json
{
  "clientes": [
    {
      "id": 1,
      "nombre": "Juan Pérez",
      "ciudad": "Medellín",
      "telefono": "3123456789",
      "direccion": "Calle 123 #45-67",
      "identificacion": "1234567890"
    }
  ]
}
```

### Envíos

```json
{
  "envios": [
    {
      "id": "ENVIO1234",
      "nombre": "Pedido de Juan",
      "fechaEnvio": "2025-03-21",
      "fechaEntrega": "2025-03-23",
      "ciudadOrigen": "Medellín",
      "ciudadDestino": "Bogotá",
      "descripcion": "Documentos urgentes"
    }
  ]
}
```

---

## 🗂️ Estructura del proyecto

```
track-x/
│
├── public/
│
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/           # Vistas principales de la app
│   ├── routes/          # Definición de rutas con React Router
│   ├── helpers/         # Funciones utilitarias y helpers
│   ├── servicios/       # Conexión con API (axios o fetch)
│       ├── db.json      # Archivo simulado de la base de datos
│   └── App.jsx
│
├── package.json
└── README.md
```

---

## 📫 Autor

Desarrollado por **Jaime Zapata**  
Frontend Developer & Docente de desarrollo de software  
🚀 ¡Gracias por visitar este proyecto!
