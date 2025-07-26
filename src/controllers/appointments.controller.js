import appointmentsModel from "../schemas/appointments.schema.js"


const createAppointments = async ( req, res ) => {
    const inputData = req.body        // Extraigo el objeto enviado 
    
    // Try: Controla las excepciones de la consulta a la base de datos 
    try {
        console.log("holaaa", inputData);
        const registeredAppointments = await (await appointmentsModel.create ( inputData )).populate(['petsId', 'veterinarianId'])

        console.log ( registeredAppointments )  // Imprime en la consola
        res.send ( registeredAppointments )  // Enviando la respuesta al cliente
    }
    catch ( error ) {    // Catch: Captura el error producido por la excepción 
        console.error ( error )
        res.status( 500 ).json ( { msg: 'Error al registrar cita ' } )
    }
} 

const getAllAppointments = async ( req, res ) => {
    
    try {
        const data = await appointmentsModel.find ( {} ).populate(['petsId', 'veterinarianId'])
        res.json ( data )     
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo obtener el listado de citas' } )        
    }
    
    
}

const getAppointmentsByState = async ( req, res ) => {
    const state = req.params.state   // El nombre final dependerá del nombre del parámetro en la ruta 
    
    try {
        const data = await appointmentsModel.find ({state: state}).populate(['petsId', 'veterinarianId'])
        // Verifica si el artista no existe y lanza el respectivo mensaje al cliente
        if ( ! data ) {
            return res.json ( { msg: 'La cita no se encuentra registrado' } )
        }
        
        res.json ( data )
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo encontrar la cita' } )
    }
}

const removeAppointmentsById = async (req, res) => {
    const appointmentsId = req.params.id;

    try{ 

    const data = await appointmentsModel.findByIdAndDelete (appointmentsId);

    if(data == null){

            return res.json({msg: 'Error: La cita no existe'});
        }

    res.json(data);

    }

    catch (error){
        console.error( error);
        res.json({msg: 'Error: No se pudo encontrar la cita'});
    }
}


const updateAppointmentsById = async ( req, res ) => {
    const appointmentsId = req.params.id  // Obtenemo el ID de la parametrización de la ruta
    const inputData = req.body   // Obtenemos el body de la petición
    
    try {
        const data = await appointmentsModel.findByIdAndUpdate ( appointmentsId, inputData, { new: true } ).populate(['petsId', 'veterinarianId'])

        res.json ( data )    
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo actualizar la cita' } )
    }
}



// Exponer las funcionalidades para ser usadas por otros archivos
export {
    createAppointments,
    getAppointmentsByState, 
    getAllAppointments,
    updateAppointmentsById,
    removeAppointmentsById
}