# Book System Server

Este proyecto es un servidor que gestiona un sistema de libros, ofreciendo endpoints para operaciones CRUD sobre libros y sus reseñas.

## Requisitos

- **Node.js** (v16 o superior)
- **PostgreSQL** (v13 o superior)

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/book-system-server.git
   cd book-system-server
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**:
   Crea un archivo `.env` en el directorio raíz con las siguientes variables:
   ```
   DATABASE_URL=postgres://usuario:contraseña@localhost:5432/nombre_de_base_datos
   PORT=3001
   ```

4. **Inicializa la base de datos**:
   Ejecuta el comando `init-db` para configurar y poblar la base de datos:
   ```bash
   npm run init-db
   ```

   Este paso descarga los esquemas y datos iniciales requeridos.

5. **Inicia el servidor**:
   ```bash
   npm start
   ```

## Scripts Disponibles

- **`npm start`**: Inicia el servidor en modo producción.
- **`npm run dev`**: Inicia el servidor en modo desarrollo con nodemon.
- **`npm run init-db`**: Inicializa y configura la base de datos.
- **`npm test`**: Ejecuta las pruebas unitarias (si están configuradas).

## Endpoints

El servidor ofrece endpoints para gestionar libros y reseñas. Algunos ejemplos comunes incluyen:

- **GET `/books`**: Lista todos los libros.
- **POST `/books`**: Crea un nuevo libro.
- **PUT `/books/:id`**: Actualiza un libro existente.
- **DELETE `/books/:id`**: Elimina un libro.

---
¡Gracias por usar el Book System Server! 📚
