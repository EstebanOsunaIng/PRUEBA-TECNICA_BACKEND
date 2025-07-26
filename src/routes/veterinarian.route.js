import express from 'express' 
import{ createVeterinarian, getAllVeterinarian, getVeterinarianById, removeVeterinarianById, updateVeterinarianById } from '../controllers/veterinarian.controller.js'


const router = express.Router ();

router.post( '/api/veterinarian', createVeterinarian);
router.get('/api/veterinarian', getAllVeterinarian);
router.get('/api/veterinarian/:id', getVeterinarianById); 
router.put ( '/api/veterinarian/:id',updateVeterinarianById );
router.delete('/api/veterinarian/:id', removeVeterinarianById);





export default router 