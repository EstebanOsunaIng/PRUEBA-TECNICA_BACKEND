
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

    veterinarianId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'veterinarian'
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