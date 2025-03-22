# CRM de Seguimiento y Control de Envíos

## Descripción del Proyecto
Este proyecto es una aplicación tipo CRM diseñada para facilitar el seguimiento, control y administración de clientes y envíos de paquetes. Permite gestionar información detallada de los clientes y sus envíos, proporcionando una interfaz intuitiva y eficiente para mejorar la experiencia del usuario y optimizar el flujo de trabajo.

## Tecnologías Utilizadas
El desarrollo de esta aplicación se basa en las siguientes tecnologías y herramientas:

- **Frontend:** React JS (desarrollado con Vite)
- **Backend Simulado:** json-server
- **Manejo de solicitudes HTTP:** axios
- **Alertas y notificaciones:** sweetalert2
- **Iconografía:** fontawesome
- **Enrutamiento:** react-router-dom

## Modelo de Datos
La aplicación utiliza un modelo de datos no relacional basado en JSON. A continuación, se presenta la estructura del modelo:

```json
{
  "clientes": [
    {
      "id": 1,
      "nombre_completo": "Juan Pérez",
      "telefono": "3001234567",
      "documento": "123456789",
      "direccion": "Calle 123 #45-67",
      "ciudad": "Medellín",
      "correo": "juan.perez@example.com"
    }
  ],
  "envios": [
    {
      "id": 1,
      "cliente_id": 1,
      "fecha_envio": "2025-03-07",
      "fecha_llegada": "2025-03-10",
      "dias_envio": 3,
      "ciudad_origen": "Medellín",
      "ciudad_destino": "Bogotá",
      "descripcion": "Paquete mediano - Documentos",
      "valor": 25000,
      "peso": "2 kg",
      "categoria": "Documentos"
    }
  ]
}
```

## Paleta de Colores y Tipografía
Para la interfaz de usuario, se ha definido la siguiente paleta de colores:

- ![#F28B30](https://via.placeholder.com/15/F28B30/000000?text=+) `#F28B30`
- ![#BF8E63](https://via.placeholder.com/15/BF8E63/000000?text=+) `#BF8E63`
- ![#F2762E](https://via.placeholder.com/15/F2762E/000000?text=+) `#F2762E`
- ![#D95323](https://via.placeholder.com/15/D95323/000000?text=+) `#D95323`
- ![#731702](https://via.placeholder.com/15/731702/000000?text=+) `#731702`

### Tipografía:
- **Roboto** (para texto general)
- **Lato** (para encabezados y elementos destacados)

## Instrucciones de Instalación y Ejecución
### Requisitos Previos
- Tener **Node.js** instalado en el sistema
- Usar una terminal recomendada: **CMD o PowerShell**

### Instalación
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/usuario/proyecto-crm-envios.git
   ```
2. Acceder al directorio del proyecto:
   ```sh
   cd proyecto-crm-envios
   ```
3. Instalar las dependencias:
   ```sh
   npm install
   ```

### Ejecución del Proyecto
1. Iniciar el servidor json-server:
   ```sh
   npx json-server --watch db.json --port 3001
   ```
2. Iniciar la aplicación en modo desarrollo:
   ```sh
   npm run dev
   ```

## Estructura de Carpetas
El proyecto sigue la siguiente estructura de directorios:

```
proyecto-crm-envios/
│── public/
│── src/
│   │── assets/          # Recursos estáticos (imágenes, estilos, iconos)
│   │── components/      # Componentes reutilizables
│   │── pages/           # Páginas de la aplicación
│   │── services/        # Llamadas a la API (uso de axios)
│   │── styles/          # Archivos de estilos globales
│   │── App.jsx          # Componente principal
│   │── main.jsx         # Punto de entrada de React
│── db.json              # Base de datos simulada con json-server
│── package.json         # Archivo de configuración de npm
│── vite.config.js       # Configuración de Vite
```

### Notas Adicionales
- El proyecto **no** utiliza `useContext` ni hooks personalizados.
- El backend se simula con `json-server`, por lo que no hay una base de datos real.

## Contribución
Si deseas contribuir al proyecto, puedes hacer un fork del repositorio, realizar tus modificaciones y enviar un pull request.

---
¡Gracias por tu interés en este proyecto! 🚀

