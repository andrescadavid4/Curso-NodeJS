function promedio1 (nota_uno, nota_dos, nota_tres){
    let resultado=(nota_uno+nota_dos+nota_tres)/3
    console.log('El promedio 1 es ' + resultado)
}

//Se pueden crear apuntadores para generar las funciones, es mas usual encontrarlo en manera de apuntadores.
let promedio2= (nota_uno, nota_dos, nota_tres)=>{
    //non Blocking, que significa que a diferencia de otros lenguajes no trabaja por bloques secuenciales sino de forma asincrónica, pudiendo ejecutar varias actividades en paralelo.
    setTimeout(function(){
    let resultado=(nota_uno+nota_dos+nota_tres)/3
    console.log('El promedio 2 es '+ resultado)
},2000);
}

let promedio3=(nota_uno,nota_dos,nota_tres)=>
console.log('El promedio 3 es ' + (nota_uno+nota_dos+nota_tres)/3);

promedio1(3,4,5);
promedio2(1,2,1);
promedio3(5,4,5);


///Calback: Node.JS está orientado a eventos, por eso es necesario que ejecute una función que pueda retornar algún procedimiento después de ejecutar un evento, y a su vez que permita gestionar los errores.
let promedio=(nota_uno,nota_dos,nota_tres,callback)=>{
    setTimeout(function(){
        let resultado = (nota_uno+nota_dos+nota_tres)/3;
        callback (resultado);
    },0);
}

promedio(5,4,5,function(resultado){
    console.log(resultado);
})