const {argv} = require('./yargs');
const funciones = require('./funciones');

/* console.log(argv);
console.log(' Posición 0 ' + argv._[0]) */

let comando = argv._[0];
switch (comando){
    case 'crear':
    funciones.crear(argv);
    break

    case 'mostrar':
    funciones.mostrar();
    break

    case 'mostrarest':
    funciones.mostrarest(argv.nombre);
    break

    case 'mostrarmat':
    funciones.mostrarmat();
    break

    case 'mostrarpromest':
    funciones.mostrarpromest(argv.nombre);
    break

    case 'actualizar':
    funciones.actualizar(argv.nombre, argv.asignatura, argv.calificacion)
    break

    case 'eliminar':
    funciones.eliminar(argv.nombre)
    break

    default:
        console.log('No ingreso una función existente')
}
