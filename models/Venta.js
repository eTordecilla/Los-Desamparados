const { Schema, model } = require('mongoose');

const ProductoVentaSchema = Schema ({
    
    id: { 
        type: String, 
        required: true
    },

    valor: {
        type: Number,
        required: true
    },

    cantidad: {
        type: Number,
        required: true
    }    
});

const VentaSchema = Schema({
    
    valor: {
        type: Number,
        required: true
    },

    nombreCliente: {
        type: String,
        required: true
    },

    idCliente: {
        type: String,
        required: true
    },

    idVendedor: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    productos : [ProductoVentaSchema],

    date: {
        type: Date,
        default: Date.now()
    }
});


VentaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
}) 

module.exports = model('Venta', VentaSchema);