const { response } = require('express');
const Venta = require('../models/Venta');

const getVentas = async ( req, res = response) => {

    const ventas = await Venta.find()
    // Para traernos el nombre del usuario que vendió el producto
                                    .populate('usuario', 'name');
    res.json({
        ok: true,
        ventas
    });
}

const crearVenta = async ( req, res = response ) => {

    // Verificar que tenga el producto
    //console.log( req.body );

    const venta = new Venta ( req.body );

    try {

        venta.usuario = req.uid;
        
        const ventaCreada = await veta.save();

        res.json({
            ok: true,
            venta: ventaCreada
        })

    } catch (error) {
        console.log( error )
        res.status(500).json({
            ok: false,
            msg: 'Venta no registrada, hable con el admin'
        })
    }
}

const actualizarVenta = async ( req, res = response) => {

    const ventaId = req.params.id;
    const uid = req.uid;

    try {

        const venta = await Venta.findById( ventaId );

        if ( !venta ) {
            res.status(404).json({
                ok: false,
                msg: 'Venta no existe'
            });
        }

        if ( venta.usuario.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar esta venta'
            })
        }

        const nuevaVenta = { 
            ...req.body,
            usuario: uid
        }

        const ventaActualizada = await Venta.findByIdAndUpdate( ventaId, nuevaVenta, { new: true} );

        res.json({
            ok: true,
            venta: ventaActualizada 
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Venta no actualizada, hable con el administrador'
        })
    }
}

const eliminarVenta = async ( req, res = response) => {

    const ventaId = req.params.id;
    const uid = req.uid;

    try {

        const venta = await Venta.findById( ventaId );

        if ( !venta ) {
            return res.status(404).json({
                ok: false,
                msg: 'Venta no existe'
            });
        }

        if ( venta.usuario.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar esta venta'
            });
        }


        await Venta.findByIdAndDelete( ventaId );

        res.json({ 
            ok: true,
            msg: 'Venta eliminada'
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
    getVentas,
    crearVenta,
    actualizarVenta,
    eliminarVenta
}