const { response } = require('express');
const bcrypt = require('bcryptjs')
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');


const crearUsuario = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email: email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El Usuario ya existe con ese correo'
            });
        }

        usuario = new Usuario( req.body );

        //ENCRIPTAR CONTRASEÑA 

        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );



        await usuario.save();

        //Generar JWT
        const token = await generarJWT( usuario.id, usuario.name )

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }

    
}

const loginUsuario = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ email: email });

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Ese email no existe'
            });
        }

        // Confirmar el password

        const validPassword = bcrypt.compareSync( password, usuario.password );

        if (!validPassword) {
            res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        //Generar JWT
        const token = await generarJWT( usuario.id, usuario.name )

        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });

    

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
    
}

const actualizarUsuario = async ( req, res = response) => {

    const usuarioId = req.params.id;
    const password = req.body.password;
    const uid = req.uid;

    try {

        const usuario = await Usuario.findById( usuarioId );

        if ( !usuario ) {
            res.status(404).json({
                ok: false,
                msg: 'Usuario no existe por ese id'
            });
        }

        const nuevoUsuario = { 
            ...req.body,
            usuario: uid
        }

        //ENCRIPTAR CONTRASEÑA 

        const salt = bcrypt.genSaltSync();
        nuevoUsuario.password = bcrypt.hashSync( password, salt );

        const usuarioActualizado = await Usuario.findByIdAndUpdate( usuarioId, nuevoUsuario, { new: true} );

        res.json({
            ok: true,
            usuario: usuarioActualizado 
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Usuario no actualizado, hable con el administrador'
        })
    }
}

const eliminarUsuario = async ( req, res = response) => {

    const usuarioId = req.params.id;
    const uid = req.uid;

    try {

        const usuario = await Usuario.findById( usuarioId );

        if ( !usuario ) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no existe por ese id'
            });
        }

        await Usuario.findByIdAndDelete( usuarioId );

        res.json({ 
            ok: true,
            msg: `Usuario con el id: ${uid} ha sido eliminado`
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

const revalidarToken = async (req, res = response ) => {

    const { uid, name } = req;

    // Generar JWT
    const token = await generarJWT( uid, name );

    res.json({
        ok: true,
        token
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    actualizarUsuario,
    eliminarUsuario,
    revalidarToken
};