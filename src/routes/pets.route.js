import express from 'express' 
import{createPets,getAllPets,getPetsById,removePetsById,updatePetsById } from '../controllers/pets.controller.js'


const router = express.Router ();

router.get ( '/api/pets', getAllPets);
router.get('/api/pets/:id', getPetsById); 
router.post('/api/pets', createPets);
router.put ( '/api/pets/:id',updatePetsById );
router.delete('/api/pets/:id', removePetsById);




export default router 