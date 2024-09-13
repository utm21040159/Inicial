import { modeloAlumnos } from "../Models/alumno.model.js";


modeloAlumnos.create({
    name:"Daniel",
    apepat:"Lopez",
    edad: 21
})


export const test = ()=>{
    console.log("se esta mandando llamar correctamente el controlador ")
}