/*
    Ventas routes
    /api/ventas
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getVentas, crearVenta, actualizarVenta, eliminarVenta } = require('../controllers/venta');


const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use( validarJWT ); 

//Obtener todos los productos
router.get('/', getVentas);

// Crear un nuevo producto
router.post(
    '/',
    [
        check('valor', 'El valor de la venta es requerido').isNumeric(),
        check('nombreCliente', 'El nombre del ciente es requerido').not().isEmpty(),
        check('idCliente', 'id del cliente es requerido').not().isEmpty(),
        check('idVendedor', 'id del vendedor es requerido').not().isEmpty(),
        check('productos', 'los productos son requeridos').not().isEmpty(),
        validarCampos
    ],
    crearVenta
);

// Actualizar productos
router.put('/:id', actualizarVenta);

// Borrar productos
router.delete('/:id', eliminarVenta);


module.exports = router;