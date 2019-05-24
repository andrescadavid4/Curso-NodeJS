const nombre = {
    demand: true,
    alias: 'n'
}

const matematicas = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}

const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const mostrarest={
    nombre
}

const mostrarpromest={
    nombre
}

const actualiza = {
    nombre,
    asignatura: {
        demand: true,
        alias: 'a'
    },
    calificacion: {
        demand: true,
        alias: 'c'
    }
}

const elimina = {
    nombre
}

const argv= require ('yargs')
            .command('crear','Crear un estudiante en mi BD', creacion)
            .command('mostrar', 'Muestra los estudiantes y sus notas')
            .command('mostrarest', 'Muestra la información del estudiante', mostrarest)
            .command('mostrarpromest', 'Muestra el promedio de un estudiante', mostrarpromest)
            .command('actualizar', 'Actualiza la información del curso', actualiza)
            .command('eliminar', 'Elimina un estudiante por el nombre', elimina)
            .argv;

module.exports = {
    argv
};