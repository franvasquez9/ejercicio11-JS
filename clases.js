class Estudiante {
    constructor(nombre, asignaturas){
        this.nombre = nombre;
        this.asignaturas = ["Javascript", " HTML", " CSS"];
    }
    obtenDatos(){
        console.log(` nombre: ${this.nombre} asignaturas: ${this.asignaturas}`);
    }
}
const nuevoEstudiante = new Estudiante("Francisco");
console.log(nuevoEstudiante);
nuevoEstudiante.obtenDatos();
console.log(nuevoEstudiante instanceof Estudiante);