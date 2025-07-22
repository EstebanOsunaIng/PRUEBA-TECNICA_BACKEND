import express from 'express'
import cors from 'cors'
import dbConnect from './config/mongo.config.js'


import pets from "./routes/pets.route.js"
import appointments from "./routes/appointments.route.js"




const app = express()
const PORT = process.env.PORT ?? 3000;

dbConnect()


//* Lanzar el servidor usando express" */ 


app.use(cors ());
app.use(express.json());

app.use ( pets );
app.use ( appointments );




app.listen ( PORT, () => {
    console.log ( `Servidor corriendo en http//localhost:${ PORT } ${ process.env.DB_URI}` )

})



