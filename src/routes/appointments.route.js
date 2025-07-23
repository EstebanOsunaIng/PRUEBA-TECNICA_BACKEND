import express from 'express' 
import { createAppointments, getAppointmentsByState, getAllAppointments } from '../controllers/appointments.controller.js';

const router = express.Router ();
router.post('/api/appointments', createAppointments);
router.get ( '/api/appointments', getAllAppointments);
router.get ( '/api/appointments/:state', getAppointmentsByState);


export default router 