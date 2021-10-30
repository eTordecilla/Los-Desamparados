/*
    Productos routes
    /api/productos
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getProductos, crearProducto, actualizarProducto, eliminarProducto } = require('../controllers/productos');


const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use( validarJWT ); 

//Obtener todos los productos
router.get('/', getProductos);

// Crear un nuevo producto
router.post(
    '/',
    [
        check('name', 'El nombre del producto es requerido').not().isEmpty(),
        check('valor', 'El valor del producto es requerido').isNumeric(),
        check('descripcion', 'La descripción del producto es requerida').not().isEmpty(),
        check('estado', 'El estado del producto es requerido').isBoolean(),
        validarCampos
    ],
    crearProducto
);

// Actualizar productos
router.put('/:id', actualizarProducto);

// Borrar productos
router.delete('/:id', eliminarProducto);


module.exports = router;