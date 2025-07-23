import ownerModel from "../schemas/owner.schemas.js"


const createOwner = async ( req, res ) => {
    const inputData = req.body        // Extraigo el objeto enviado 
    
    // Try: Controla las excepciones de la consulta a la base de datos 
    try {
        console.log("holaaa", inputData);
        const registeredOwner = await ownerModel.create ( inputData )

        console.log ( registeredOwner )  // Imprime en la consola
        res.send ( registeredOwner )  // Enviando la respuesta al cliente
    }
    catch ( error ) {    // Catch: Captura el error producido por la excepción 
        console.error ( error )
        res.status( 500 ).json ( { msg: 'Error al registrar la mascota ' } )
    }
} 

const getAllOwner = async ( req, res ) => {
    
    try {
        const data = await ownerModel.find ( {} )
        res.json ( data )     
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo obtener el listado de mascotas' } )        
    }
    
    
}

const getOwnerById = async ( req, res ) => {
    const ownerId = req.params.id    // El nombre final dependerá del nombre del parámetro en la ruta 
    
    try {
        const data = await ownerModel.findById ( ownerId )

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

// Exponer las funcionalidades para ser usadas por otros archivos
export {
    createOwner,
    getAllOwner,
    getOwnerById
}