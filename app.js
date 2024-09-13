const mongoose = require('mongoose');
const urlbd = "mongodb://localhost:27017/UTMA"

mongoose.connect(urlbd)
.then(()=>{
    console.log("Coneccion a Base de Datos")
})
.catch(()=>{
    console.log("no funciona la coneccion", error)
});

const EsqumaAlumnos = new mongoose.Schema ({
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

const modeloAlumnos = new mongoose.model("Tabla de Alumnos",EsqumaAlumnos)

modeloAlumnos.create({
    name:"Daniel",
    apepat:"Lopez",
    edad: 21
})