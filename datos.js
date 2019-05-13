//Require: Los Require permiten realizar importaciones de scripts externos, sean propios de Node, del repositorio NPM o de otros scripts del usuario. En este primer ejemplo se observará el funcionamiento de un require que llama un script desarrollado por el usuario.
const {estudiante, obtenerPromedio} = require ('./calculos')

console.log('Nombre del estudiante es '+ estudiante.nombre);
console.log('El promedio del estudiante es '+ obtenerPromedio(estudiante.notas.matematicas,estudiante.notas.ingles,estudiante.notas.programacion));

//Destructuración: Una de las formas de optimizar el trabajo con objetos y con diferentes estructuras de datos es la denominada destructuración que permite generar un arreglo con nuevas variables que apunten directamente a un objeto.
let {nombre, edad: anos, notas: {matematicas,ingles,programacion}} = estudiante;
console.log('el nombre del estudiante es ' + nombre);
console.log('El promedio del estudiante es '+ obtenerPromedio(matematicas,ingles,programacion));
console.log ('la edad del estudiante es ' + anos);


//Requite Nativo: En este ejemplo se trabajará con la clase FileSystem, la cual viene por defecto desde la instalación de Node.JS

const fs = require ('fs');

let crearArchivo = (estudiante)=>{
    texto = 'el nombre del estudiante es ' + nombre + '\n' +
            'ha obtenido un promedio de ' + obtenerPromedio(matematicas,ingles,programacion);
    fs.writeFile('promedio.txt',texto,(err)=>{
        if(err) throw(err);
        console.log('se ha creado el archivo')
    });
}

crearArchivo(estudiante);