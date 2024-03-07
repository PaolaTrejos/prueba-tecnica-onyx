# Prueba técnica – Gestion de Libros
Este proyecto consiste en una aplicación web para gestionar un pequeño catálogo de libros en una librería, incluyendo una API RESTful para la gestión de los datos.

Backend (Node.js)

Descripción
El Back-end de este proyecto está construido utilizando Node.js. Proporciona una API RESTful que interactúa con una base de datos MySQL utilizando Sequelize como ORM.

Dependencias Principales
•	cors (^2.8.5): Middleware para habilitar el intercambio de recursos de origen cruzado (CORS).
•	express (^4.18.3): Framework web minimalista para Node.js.
•	mysql2 (^3.9.2): Controlador de MySQL para Node.js.
•	sequelize (^6.37.1): ORM para Node.js que admite múltiples dialectos de bases de datos, incluido MySQL.

Instalación
1.	Clona este repositorio.
2.	Ejecuta `npm install` para instalar las dependencias.
3.	Configura el archivo `db.js` que se encuentra en la carpeta `database` con las credenciales de la base de datos.
4.  Importa el archivo `Database.sql` que se encuentra en la carpeta `database` a tu base de datos MySQL para configurar las tablas necesarias.


Uso
1.	Ejecuta `nodemon app` para iniciar el servidor.
2.	La API estará disponible en la ruta (http://localhost:8000).


Frontend (React)

Descripción
El Front-end de este proyecto está construido utilizando React. Proporciona una interfaz de usuario sencilla que permite al usuario interactuar con la API RESTful del Back-end.

Dependencias Principales
•	axios (^1.6.7): Cliente HTTP para realizar solicitudes a la API del backend.
•	bootstrap (^5.3.3): Framework de diseño CSS para desarrollar aplicaciones web.
•	react (^18.2.0): Biblioteca de JavaScript para construir interfaces de usuario.
•	react-dom (^18.2.0): Renderiza los componentes de React en el DOM.
•	react-router-dom (^6.22.2): Navegación declarativa para React.
•	react-scripts (5.0.1): Scripts de inicio, compilación y prueba para aplicaciones creadas con Create React App.

Scripts
•	start: Inicia el servidor de desarrollo.

Instalación
1.	Clona este repositorio.
2.	Ejecuta `npm install` para instalar las dependencias.

Uso
1.	Ejecuta `npm start` para iniciar el servidor de desarrollo.
2.	Abre (http://localhost:3000) en tu navegador para ver la aplicación.
