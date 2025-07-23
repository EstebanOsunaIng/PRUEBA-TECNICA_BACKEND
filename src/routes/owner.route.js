import express from 'express' 
import { createOwner, getOwnerById, getAllOwner } from '../controllers/owner.controller.js';

const router = express.Router ();

router.get ( '/api/owner', getAllOwner);
router.post('/api/owner', createOwner);
router.post('/api/owner/:id', getOwnerById);


export default router 