import { Schema, model } from "mongoose"


const EsqumaAlumnos = new Schema ({
    name:{
        type:String
    },
    apepat:{
        type:String
    },
    edad:{
        type:Number
    }
})

export const modeloAlumnos = new model("Tabla de Alumnos",EsqumaAlumnos)