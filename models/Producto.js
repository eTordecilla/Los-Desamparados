const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    
    name: {
        type: String,
        required: true
    },

    valor: {
        type: Number,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    estado: {
        type: Boolean,
        required: true
    },

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
    
});

ProductoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
}) 

module.exports = model('Producto', ProductoSchema);