//Require Externo (yargs): En este último ejemplo de Require vamos a instalar y trabajar con yargs, el cual se descarga desde el NPM y permite ingresar comandos por teclado desde la consola.
const opciones = {
    matematicas:{
        default:0,
        alias: 'm'
    },
    ingles:{
        default:0,
        alias:'i'
    },
    programacion:{
        demand: true,
        alias:'p'
    }
}

const argv = require('yargs')
            .command('promedio','Calcular el promedio', opciones)
            .argv

console.log(argv.matematicas);
console.log(argv);
console.log('El promedio es ' +(argv.m+argv.i+argv.p)/3);