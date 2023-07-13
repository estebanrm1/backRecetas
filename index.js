import express from "express";
import cors from 'cors'
import morgan from "morgan";
import path from 'path'
import 'dotenv/config'
import './src/database/dbConnection'
import recetasRouter from './src/routes/recetas.routes'

//usar un puerto
const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+app.get('port'));
})

//middlewares
app.use(cors()); //permitir conexiones remotas
app.use(express.json()); //permite a mi app recibir objetos en formato json en los request
app.use(morgan('dev')) //muestra en consola info extra de las solicitudes
app.use(express.static(path.join(__dirname, '/public')))

//rutas
app.use('/apirecetas', recetasRouter)