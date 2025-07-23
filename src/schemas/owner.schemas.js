import mongoose from 'mongoose';

const ownerSchema = new mongoose.Schema( {

    name: {
        type: String,
        required: [true, 'El nombre del dueño de la mascota es obligatorio'],
        trim: true
    },

    email: {
        type: String,
        trim: true,
        required:[true, "El correo del usuario es obligatorio"],
        match:[/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Por favor, introduce un correo electrónico válido.'],
        unique:[true,"Este email ya esta registrado, por favor introduce un email validos"],

    phone: {
        typeof: String,
        required:[true, "El telefono del dueño de la mascota es obligatorio"],
    }
    
    }
}, {
    timestamps: true, // Agrega las propiedades createdAt , updatedAt
    versionKey: false // contador __v de modificaciones del schema
})

const ownerModel = mongoose.model (
    'owner',
    ownerSchema
)

export default ownerModel