import express from 'express'
import cors from 'cors'





const app = express()
const PORT = process.env.PORT ?? 3000;


//* Lanzar el servidor usando express" */ 


app.use(cors ());

app.use(express.json());


app.listen ( PORT, () => {
    console.log ( `Servidor corriendo en http//localhost:${ PORT } ${ process.env.DB_URI}` )

})



