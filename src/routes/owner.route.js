import express from 'express' 
import { createOwner, getOwnerById, getAllOwner, updateOwnersById, removeOwnerById } from '../controllers/owner.controller.js';

const router = express.Router ();

router.get ( '/api/owner', getAllOwner);
router.post('/api/owner', createOwner);
router.post('/api/owner/:id', getOwnerById);
router.put('/api/owner/:id', updateOwnersById);
router.delete('/api/owner/:id', removeOwnerById);



export default router 