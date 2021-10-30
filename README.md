# Los-Desamparados

MisionTic 2021
APP de Ventas

Para ejecutar el Backend sigue las siguientes instrucciones:

en el archivo .env estan las instrucciones para la db

ejecutar el comando npm run dev para ejecutar el proceso del back en el puerto 3002

Usuario: correo_1@gmail.com
password: 123456

Usuario: prueba_2@hotmail.com
password: 123456

para verificar los metodos GET y POST rutas de Usuario:

GET localhost:3002/api/auth/renew - para revalidar el JWT

POST localhost:3002/api/auth - Login de Usuario

POST localhost:3002/api/auth/new - Creación de usuario

RUTA PRODUCTOS:

GET localhost:3002/api/productos - Obtenemos la lista de los productos

POST localhost:3002/api/productos - Insertar un nuevo productos

PUT localhost:3002/api/productos - ACtualizar un producto (solo lo puede hacer el usuario que lo creó)

DELETE localhot:3002/api/productos/ID_DEL_PRODUCTO - Eliminar producto
