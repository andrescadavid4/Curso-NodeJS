//Require Externo (yargs): En este último ejemplo de Require vamos a instalar y trabajar con yargs, el cual se descarga desde el NPM y permite ingresar comandos por teclado desde la consola.
const alumno = {
    id:{
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'x'
    }
}

const argv = require('yargs')
            .command('inscribir','persona inscrita', alumno)
            .argv

//console.log(argv.nombre);
//console.log(argv);

let Cursos = [{
    nombre: 'NodeJS',
    id: 1,
    duracion: 120,
    valor: 150000
},
{
    nombre: 'Matematicas',
    id: 2,
    duracion: 90,
    valor: 90000
},
{
    nombre: 'Ingles',
    id: 3,
    duracion: 100,
    valor: 110000
}
];
let idmateria = Cursos.find(idmat => idmat.id == argv.id)
if (idmateria){
    console.log('Alumno inscrito de manera satisfactoria');
     const fs = require ('fs');

    let crearArchivo = (idmateria)=>{
        texto = 'el nombre del estudiante es ' + argv.nombre + '\n' +
                'con cedula ' + argv.cedula + '\n' +
                'El id del curso es ' + idmateria.id + ' con el nombre ' + idmateria.nombre + ' que tiene una diración de ' + idmateria.duracion + ' Horas, con un valor de ' + idmateria.valor + ' pesos' ;
        fs.writeFile('inscripcion.txt',texto,(err)=>{
            if(err) throw(err);
            console.log('se ha creado el archivo')
        });
    }

    crearArchivo(idmateria); 

}else if (!idmateria && argv.id != undefined) {
    console.log('el id ingresado no existe');
    setTimeout(function(){
        console.log('El id del curso es '+ Cursos[0].id + ' con el Nombre ' + Cursos[0].nombre + ' que tiene una duración de '+ Cursos[0].duracion + ' Horas, con un valor de ' + Cursos[0].valor + ' pesos')
        },2000);
        
        setTimeout(function(){
            console.log('El id del curso es '+ Cursos[1].id + ' con el Nombre ' + Cursos[1].nombre + ' que tiene una duración de '+ Cursos[1].duracion + ' Horas, con un valor de ' + Cursos[1].valor + ' pesos')
            },4000);
        
        setTimeout(function(){
            console.log('El id del curso es '+ Cursos[2].id + ' con el Nombre ' + Cursos[2].nombre + ' que tiene una duración de '+ Cursos[2].duracion + ' Horas, con un valor de ' + Cursos[2].valor + ' pesos')
            },6000);
}else{
    setTimeout(function(){
        console.log('El id del curso es '+ Cursos[0].id + ' con el Nombre ' + Cursos[0].nombre + ' que tiene una duración de '+ Cursos[0].duracion + ' Horas, con un valor de ' + Cursos[0].valor + ' pesos')
        },2000);
        
        setTimeout(function(){
            console.log('El id del curso es '+ Cursos[1].id + ' con el Nombre ' + Cursos[1].nombre + ' que tiene una duración de '+ Cursos[1].duracion + ' Horas, con un valor de ' + Cursos[1].valor + ' pesos')
            },4000);
        
        setTimeout(function(){
            console.log('El id del curso es '+ Cursos[2].id + ' con el Nombre ' + Cursos[2].nombre + ' que tiene una duración de '+ Cursos[2].duracion + ' Horas, con un valor de ' + Cursos[2].valor + ' pesos')
            },6000);
}


