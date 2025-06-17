# 🛠 Sistema de Gestión de Usuarios en Node.js

## 📌 Descripción

Este proyecto es una aplicación de línea de comandos desarrollada en **Node.js**, que permite la gestión de usuarios mediante un sistema interactivo. Ahora cuon **funcionalidades de Alta, Baja, Modificación y Consulta**, ofreciendo un sistema completo de administración.enta c

### 🔹 Funcionalidades:
- **Alta**: Registrar usuarios con nombre y contraseña.
- **Baja**: Eliminar usuarios con confirmación previa.
- **Modificación**: Actualizar la clave de un usuario existente.
- **Consulta**:
  - Listar usuarios registrados.
  - Verificar si un usuario existe y si su clave es correcta.

El almacenamiento de usuarios se gestiona mediante el módulo `manager.js`, que maneja la lectura y escritura de datos.

## 🚀 Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **@inquirer/prompts**: Librería para crear interfaces interactivas en la terminal.
- npm install @inquirer/prompts
- **JavaScript (ES6+)**: Uso de `async/await`, métodos de arrays y manipulación de objetos.

## 📦 Instalación

Para probar el sistema, puedes usar el siguiente usuario predefinido:
Usuario: pepito
Clave: 1234

## ▶️ Uso

Ejecuta el script con el siguiente comando:

en package.json: 
"scripts": {
    "start": "node cli/app.js"
  },
  siendo cli mi carpeta y mi archivo javascript: app.
 
>npm start

   
