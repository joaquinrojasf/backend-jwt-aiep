# Proyecto Backend - Autenticación con JWT

## Descripción
Este proyecto consiste en la implementación de un servidor backend con Node.js y Express.js, el cual permite autenticar usuarios mediante JSON Web Token (JWT), almacenar el token en cookies y proteger rutas privadas con middleware.

## Objetivo
Aplicar conceptos de programación segura en backend, incluyendo autenticación, control de acceso, uso de cookies y trabajo colaborativo con GitHub.

## Tecnologías utilizadas
- Node.js
- Express.js
- JSON Web Token
- Cookie-parser
- Dotenv
- Postman
- GitHub

## Funcionalidades
- Login con usuarios ficticios
- Generación de token JWT
- Envío del token como cookie httpOnly
- Ruta privada protegida con middleware
- Logout eliminando la cookie

## Estructura del proyecto
```text
backend-jwt-aiep/
│── server.js
│── routes/
│   └── auth.js
│── middleware/
│   └── authMiddleware.js
│── .env
│── .gitignore
│── README.md
│── package.json
│── package-lock.json

## Actualizacion
Se realizaron mejoras en la documentación del proyecto, revisión del middleware y organización de evidencias.

## Integrantes
- Boris Fernandez
- Joaquin Rojas
