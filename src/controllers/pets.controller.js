import petsModel from "../schemas/pets.schema.js"


const createPets = async ( req, res ) => {
    const inputData = req.body        // Extraigo el objeto enviado 
    
    // Try: Controla las excepciones de la consulta a la base de datos 
    try {
        console.log("holaaa", inputData);
        const registeredPets = await petsModel.create ( inputData )

        console.log ( registeredPets )  // Imprime en la consola
        res.send ( registeredPets )  // Enviando la respuesta al cliente
    }
    catch ( error ) {    // Catch: Captura el error producido por la excepción 
        console.error ( error )
        res.status( 500 ).json ( { msg: 'Error al registrar la mascota ' } )
    }
} 

const getAllPets = async ( req, res ) => {
    
    try {
        const data = await petsModel.find ( {} )
        res.json ( data )     
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo obtener el listado de mascotas' } )        
    }
    
    
}

const getPetsById = async ( req, res ) => {
    const petsId = req.params.id    // El nombre final dependerá del nombre del parámetro en la ruta 
    
    try {
        const data = await petsModel.findById ( petsId )

        // Verifica si el artista no existe y lanza el respectivo mensaje al cliente
        if ( ! data ) {
            return res.json ( { msg: 'La mascota no se encuentra registrado' } )
        }
        
        res.json ( data )
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo encontrar la mascota' } )
    }
}


const updatePetsById = async ( req, res ) => {
    const petsId = req.params.id  // Obtenemo el ID de la parametrización de la ruta
    const inputData = req.body   // Obtenemos el body de la petición
    
    try {
        const data = await petsModel.findByIdAndUpdate ( petsId, inputData, { new: true } )

        res.json ( data )    
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo actualizar al artista' } )
    }
}


// Exponer las funcionalidades para ser usadas por otros archivos
export {
    createPets,
    getAllPets,
    getPetsById,
    updatePetsById
}