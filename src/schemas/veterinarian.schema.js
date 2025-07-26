import mongoose from 'mongoose';

const veterinarianSchema = new mongoose.Schema( {

    name: {
        type: String,
        required: [true, 'El nombre del veterinario es obligatorio'],
        trim: true
    },

    email: {
        type: String,
        trim: true,
        required:[true, "El correo del veterinario es obligatorio"],
        match:[/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Por favor, introduce un correo electrónico válido.'],
        unique:[true,"Este email ya esta registrado, por favor introduce un email validos"],
        },
    
    phone: {
        type: String,
        required:[true, "El telefono del veterinario es obligatorio"],
    },
    
},
{
    timestamps: true, // Agrega las propiedades createdAt , updatedAt
    versionKey: false // contador __v de modificaciones del schema
})

const veterinarianModel = mongoose.model (
    'veterinarian',
    veterinarianSchema
)

export default veterinarianModel