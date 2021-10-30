const { response } = require('express');
const Producto = require('../models/Producto');

const getProductos = async ( req, res = response) => {

    const productos = await Producto.find()
    // Para traernos el nombre del cliente que creó el producto
                                    .populate('usuario', 'name');
    res.json({
        ok: true,
        productos
    });
}

const crearProducto = async ( req, res = response ) => {

    // Verificar que tenga el producto
    //console.log( req.body );

    const producto = new Producto ( req.body );

    try {

        producto.usuario = req.uid;
        
        const productoCreado = await producto.save();

        res.json({
            ok: true,
            producto: productoCreado
        })

    } catch (error) {
        console.log( error )
        res.status(500).json({
            ok: false,
            msg: 'Producto no creado, hable con el admin'
        })
    }
}

const actualizarProducto = async ( req, res = response) => {

    const productoId = req.params.id;
    const uid = req.uid;

    try {

        const producto = await Producto.findById( productoId );

        if ( !producto ) {
            res.status(404).json({
                ok: false,
                msg: 'Producto no existe por ese id'
            });
        }

        if ( producto.usuario.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este producto'
            })
        }

        const nuevoProducto = { 
            ...req.body,
            usuario: uid
        }

        const productoActualizado = await Producto.findByIdAndUpdate( productoId, nuevoProducto, { new: true} );

        res.json({
            ok: true,
            producto: productoActualizado 
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Producto no actualizado, hable con el administrador'
        })
    }
}

const eliminarProducto = async ( req, res = response) => {

    const productoId = req.params.id;
    const uid = req.uid;

    try {

        const producto = await Producto.findById( productoId );

        if ( !producto ) {
            return res.status(404).json({
                ok: false,
                msg: 'Producto no existe por ese id'
            });
        }

        if ( producto.usuario.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar este producto'
            });
        }


        await Producto.findByIdAndDelete( productoId );

        res.json({ 
            ok: true,
            msg: 'Producto eliminado'
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

module.exports = {
    getProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}