/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, actualizarUsuario, eliminarUsuario, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();



router.post(
    '/new', 
    [ // middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        check('date','Fecha de nacimiento es obligatoria').custom( isDate ),
        validarCampos
    ],
    crearUsuario 
);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario 
);

router.put('/:id', actualizarUsuario);

router.delete('/:id', eliminarUsuario);


router.get('/renew', validarJWT ,revalidarToken );

    


module.exports = router;