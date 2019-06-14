const hbs = require('hbs');
const fs = require("fs");

////// Listar curso/////////////////////////
hbs.registerHelper('listar', () =>{
    listaCursos = require('./cursos.json')
    let texto = "<table class='table table-hover'> \
                 <thead class='thead-dark'> \
                 <th> Nombre </th> \
                 <th> Descrición </th> \
                 <th> Valor </th> \
                 <th> Modalidad </th> \
                 <th> Intensidad </th> \
                 <th> Estado </th> \
                 </thead> \
                 <tbody>";

                 listaCursos.forEach(cursos => {
        texto = texto +
                '<tr>' + 
                '<td>' + cursos.nombre + '</td>' +
                '<td>' + cursos.descripcion + '</td>' +
                '<td>' + cursos.valor + '</td>' +
                '<td>' + cursos.modalidad + '</td>' +
                '<td>' + cursos.intensidad + '</td>' +
                '<td>' + cursos.estado + '</td></tr>';
    })
    texto = texto + '</tbody></table>';
    return texto;
});

hbs.registerHelper('listar2', () =>{
    listaCursos = require('./cursos.json')
    let texto = "<div class='accordion' id='accordionExample'>";
    i = 1;
    listaCursos.forEach(cursos => {
        texto = texto +
                `<div class="card">
                    <div class="card-header" id="heading${i}>
                        <h2 class="mb-0">
                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                                ${cursos.nombre}
                            </button><br>
                            valor: ${cursos.valor}
                        </h2>
                    </div>
                    
                        <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
                            <div class="card-body">
                                Nombre del Curso: ${cursos.nombre} <br>
                                Descrición del Curso: ${cursos.descripcion} <br>
                                Valor del Curso: ${cursos.valor} <br>
                                Modalidad del Curso: ${cursos.modalidad} <br>
                                Intensidad Horaria: ${cursos.intensidad} <br>
                                Estado del Curso: ${cursos.estado} <br>
                            </div>
                        </div>
                </div>`
                i = i + 1;
    })
    texto = texto + '</div>';
    return texto;
});


//Guardar Curso//////////////////////////////
hbs.registerHelper(listarcurso = () => {
    try{
      listaCursos = require ("./cursos.json");
  } catch (error) {
    listaCursos = [];
  }
  });

hbs.registerHelper(crearcurso = (curso) => {
    listarcurso()
    let nuevocurso = {
        id: curso.id,
        nombre: curso.nombre,
        descripcion: curso.descripcion,
        valor: curso.valor,
        modalidad: curso.modalidad,
        intensidad: curso.intensidad,
        estado: "disponible"
    };
    
   /*  let duplicado = listaCursos.find(x => x.id == curso.id)
    console.log("duplicado", duplicado);
    if(!duplicado){ */
        listaCursos.push(nuevocurso);
        guardarcurso();
      /*   let diferente = true;
        console.log("diferente hepler", diferente);
            return diferente;
    }else{
        let diferente = false;
        console.log("diferente hepler", diferente);
            return diferente;
    }; */
});

hbs.registerHelper(guardarcurso = () => {
    let cursos = JSON.stringify(listaCursos);
    fs.writeFile("./src/cursos.json", cursos, (err) =>{
        if(err) throw (err);
    });
});

//// Combo para llenar los Cursos //////////////////
hbs.registerHelper('drocombos',() =>{
    listaCursos = require('./cursos.json')
    let texto = "<div class='col'> \
                <label>Seleccione Curso</label> \
                <select name='curso' class='form-control'>\
                <option value='-'>-</option>";
    listaCursos.forEach(cursos => {
        texto = texto + 
        `<option value="${cursos.nombre}">${cursos.nombre}</option>'`; 
    })
    texto = texto + '</select></div>';
    return texto;
});

///Guardar Persona Curso////////////////////////
hbs.registerHelper(listarpersonacurso = () => {
    try{
      listapersonaCursos = require ("./personacursos.json");
  } catch (error) {
    listapersonaCursos = [];
  }
  });

hbs.registerHelper(crearpersonacurso = (curso) => {
    listarpersonacurso()
    let nuevopersonacurso = {
        documento: curso.documento,
        nombre: curso.nombre,
        correo: curso.correo,
        telefono: curso.telefono,
        curso: curso.curso
    };
    
   /*  let duplicado = listaCursos.find(x => x.id == curso.id)
    console.log("duplicado", duplicado);
    if(!duplicado){ */
        listapersonaCursos.push(nuevopersonacurso);
        guardarpersonacurso();
      /*   let diferente = true;
        console.log("diferente hepler", diferente);
            return diferente;
    }else{
        let diferente = false;
        console.log("diferente hepler", diferente);
            return diferente;
    }; */
});

////// Listar persona curso/////////////////////////
hbs.registerHelper('cursopersona', () =>{
    listaCursos = require('./personacursos.json')
    let texto = "<div class='accordion' id='accordionExample'>";
    i = 1;
    listaCursos.forEach(cursos => {
        texto = texto +
                `<div class="card">
                    <div class="card-header" id="heading${i}>
                        <h2 class="mb-0">
                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                                ${cursos.curso}
                            </button><br>
                        </h2>
                    </div>
                    
                        <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
                            <div class="card-body">
                                Documeto: ${cursos.documento} <br>
                                Nombre: ${cursos.nombre} <br>
                                Correo: ${cursos.correo} <br>
                                Teléfono: ${cursos.telefono} <br>
                            </div>
                        </div>
                </div>`
                i = i + 1;
    })
    texto = texto + '</div>';
    return texto;
});




hbs.registerHelper(guardarpersonacurso = () => {
    let personacursos = JSON.stringify(listapersonaCursos);
    fs.writeFile("./src/personacursos.json", personacursos, (err) =>{
        if(err) throw (err);
    });
});
