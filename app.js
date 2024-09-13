import { test } from "./Backend/controllers/alumno.controller.js";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config()


mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("Coneccion a Base de Datos")
})
.catch(()=>{
    console.log("no funciona la coneccion", error)
});


const app = express();
app.use(cors())

app.listen(4000,()=> {
    console.log("Se escucha bien")
})

test()