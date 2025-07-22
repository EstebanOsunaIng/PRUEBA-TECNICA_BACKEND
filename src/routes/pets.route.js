import express from 'express' 

const router = express.Router ();

router.get ( '/api/pets', getAllpets);
router.get('/api/pets/:id', getpetsById); 
router.post('/api/pets', createpets);
router.put ( '/api/pets/:id',updatepetsById );


export default router 