import mongoose from 'mongoose';

const petsSchema = new mongoose.Schema( {

    name: {
        type: String,
        required: [true, 'El nombre de la mascota es obligatorio'],
        trim: true
    },
    type: {
        type: String,
        required:  [true, 'El tipo de la mascota es obligatorio'] 
    },
    breed: {
        type: String,
        required: [true, 'La raza de la mascota es obligatoria']
    },

    age:{
        type: Number,
        min: [0, 'La edad de la mascota debe ser positiva'],
        default: 0,
        required: [true, 'La edad de la mascota es obligatoria']
    },

    range: {
        type: String,
        enum: ["AÑOS", "MESES"],
        default:'AÑOS',
        required:[true, 'El rango de edad de la mascota es obligatoria'],
    },

    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'owner'
    },
    

}, {} )

const petsModel = mongoose.model (
    'pets',
    petsSchema
)

export default petsModel