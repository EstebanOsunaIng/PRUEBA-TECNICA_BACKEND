import express from 'express' 
import { createAppointments, getAppointmentsByState, getAllAppointments, updateAppointmentsById } from '../controllers/appointments.controller.js';

const router = express.Router ();
router.post('/api/appointments', createAppointments);
router.get ( '/api/appointments', getAllAppointments);
router.get ( '/api/appointments/:state', getAppointmentsByState);
router.put ( '/api/appointments/:id',updateAppointmentsById);



export default router 