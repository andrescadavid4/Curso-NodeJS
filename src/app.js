const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
require('./helpers');

const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname,'../partials');
const dirNode_modules = path.join(__dirname , '../node_modules');

app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));

app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'hbs');

app.get('/',(req,res) =>{
    res.render('index',{
        estudiante: 'Sebastian',
        titulo: 'Bienvenido'
    });
});

app.get('/listacursos',(req,res) =>{
    res.render('listacursos');
});

app.get('/inscribir',(req,res) =>{
    res.render('inscribir');
});

//Metodo para Guardar los crusos
app.post('/inscrito', (req,res) =>{
    let nuevoCurso = {
        id: parseInt(req.body.id),
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        valor: parseInt(req.body.valor),
        modalidad: req.body.modalidad,
        intensidad: parseInt(req.body.intensidad),
        estado: req.body.estado
    }
    let listaCursos = require('./cursos.json'); // para usar de manera no asincronica

    let duplicado = listaCursos.find(x => x.id == nuevoCurso.id)

    if(!duplicado){
        crearcurso(nuevoCurso)
        res.render("inscrito",{
            titulo: "Verificación Curso Nuevo",
            enunciado: "Curso Creado con exito"
        });
    }else{
        res.render("inscrito",{
            titulo: "Verificación Curso Nuevo",
            enunciado: "Ya existe un curso con el mismo ID"
        })
    };

});

app.get('/inscribirpersona',(req,res) =>{
    res.render('inscribirpersona');
});

app.post('/calculos',(req,res) =>{

    res.render('calculos',{
        estudiante: req.body.nombre,
        nota1: parseInt(req.body.nota1),
        nota2: parseInt(req.body.nota2),
        nota3: parseInt(req.body.nota3)
    });
});

app.get('*',(req,res) =>{
    res.render('error',{
        estudiante: 'error'
    });
    
})




console.log(__dirname)

app.listen(port,() =>{
    console.log('Escuchando en el puerto ' + port)
});