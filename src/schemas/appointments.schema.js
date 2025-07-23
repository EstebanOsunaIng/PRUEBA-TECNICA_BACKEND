
import mongoose from 'mongoose';

const appointmentsSchema = new mongoose.Schema( {

    petsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pets'
    },

    reason: {
        type: String,
        required: [true, 'El motivo de la cita es obligatorio']
    },


    date:{
        type: Date,
        required: [true, 'La fecha de la cita es obligatoria']
    },

    veterinarian:{
        type: String,
        enum: ["Esteban Osuna", "Juan Romero" , "Juan Lopez"],
        required: [ true , 'La asignación del veterinario es obligatorio']
    },

    state: {
        type: String,
        enum: ["pendiente", "completada"],
        default: 'pendiente'
    }

}, {} )

const appointmentsModel = mongoose.model (
    'appointments',
    appointmentsSchema
)

export default appointmentsModel