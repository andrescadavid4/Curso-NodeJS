const fs = require ('fs');
listaEstudiantes = [];
listaCursos = [];

const crear = (estudiante) => {
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };
    let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre)
    if(!duplicado){
    listaEstudiantes.push(est);
    console.log(listaEstudiantes);
    guardar();
    }
    else
        console.log('Ya existe otro estudiante con ese nombre')
}

const crearCurso = (curso)=> {
    listarCursos();
    let curso = {
        id: curso.id,
        nombre: curso.nombre,
        descripcion: curso.descripcion,
        valor: curso.valor,
        modalidad: curso.modalidad,
        intensidad: curso.intensidad,
        estado: curso.estado
    };
    let duplicado = listaEstudiantes.find(nom => nom.id == curso.id)
    if(!duplicado){
        listaCursos.push(curso);
    console.log(listaCursos);
    guardarcurso();
    }
    else
        existe= 'Ya exite un curso con ese id'
}

const listar = () => {
    try{
    listaEstudiantes = require('./listado.json'); // para usar de manera no asincronica
    //listaEstudiantes = JSON.parse(fs.readFileSync('listado.js')); //para usar de manera asincronica
    } catch(error){
        listaEstudiantes = [];
    }
}

const listarCursos = () => {
    try{
        listaCursos = require('./cursos.json'); // para usar de manera no asincronica
    //listaEstudiantes = JSON.parse(fs.readFileSync('listado.js')); //para usar de manera asincronica
    } catch(error){
        listaCursos = [];
    }
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json', datos,(err)=>{
        if(err) throw(err);
        console.log('Archivo creado con éxito');
    })
}

const guardarcurso = () => {
    let datos = JSON.stringify(listaCursos);
    fs.writeFile('cursos.json', datos,(err)=>{
        if(err) throw(err);
        console.log('Archivo creado con éxito');
    })
}

const mostrar = ()=>{
    listar()
    console.log('Nota de los estudiantes')
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log('notas ');
        console.log(' matematicas ' + estudiante.matematicas)
        console.log(' ingles ' + estudiante.ingles)
        console.log(' programación' + estudiante.programacion + '\n')
    });
}

const mostrarest = (nom) =>{
    listar()
    let est = listaEstudiantes.find(buscar => buscar.nombre == nom)
    if(!est){
        console.log('No existe este estudiante')
    }
    else {
    console.log(est.nombre);
    console.log('notas ');
    console.log(' matematicas ' + est.matematicas)
    console.log(' ingles ' + est.ingles)
    console.log(' programación' + est.programacion + '\n')
    }
}

const mostrarmat = () =>{
    listar()
    let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3);
    if (ganan.length == 0){
        console.log('ningun estudiando va ganando')
    }
    else{
        ganan.forEach(estudiante => {
            console.log(estudiante.nombre);
            console.log('notas ');
            console.log(' matematicas ' + estudiante.matematicas + '\n')
        });
    }
}

const mostrarpromest = (nom) =>{
    listar()
    let est = listaEstudiantes.find(buscar => buscar.nombre == nom)
    if(!est){
        console.log('No existe este estudiante')
    }
    else {
    promedio = (est.matematicas + est.ingles + est.programacion)/3
    console.log(est.nombre);
    console.log('Promedio ' + promedio);
    }
}

const actualizar = (nom, asignatura, calificacion) =>{
    listar()
    let est = listaEstudiantes.find(buscar => buscar.nombre == nom)
    if(!est){
        console.log('Estudiante no existe')
    }
    else{
        est[asignatura] = calificacion;
        guardar()
    }
}

const eliminar = (nom) =>{
    listar()
    let nuevo = listaEstudiantes.filter(mat => mat.nombre != nom);
    if (nuevo.length == listaEstudiantes.length){
        console.log('ningun estudiante tiene el nombre indicado')
    }
    else{
        listaEstudiantes = nuevo
        guardar()
    }

}


module.exports = {
    crear,
    mostrar,
    mostrarest,
    mostrarmat,
    mostrarpromest,
    actualizar,
    eliminar,
    crearCurso
}