/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require('fs');

exports.leerTareas = function () {
    const listado = fs.readFileSync('./tareas.json', 'utf-8');
    let arreglo = [];
    arreglo = JSON.parse(listado);
    console.log(typeof listado);
    return JSON.parse(listado);
}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
   let listado = fs.readFileSync('./tareas.json', 'utf-8');
    let listadoArray = [];
   console.log( JSON.parse(listado));
   listadoArray = JSON.parse(listado);
   console.log(typeof listadoArray);
   listadoArray.push(tarea);
   const tareasMod = JSON.stringify(listadoArray);
   fs.writeFileSync('./tareas.json', tareasMod, (err) => {
       if(err){
           throw err;
       } console.log('Guardado');
   })
   
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */ //let propiedad = estado;
    
        let listado = fs.readFileSync('./tareas.json', 'utf-8');
        let listadoArray = [];
        listadoArray = JSON.parse(listado);
        console.log('Filter' + listadoArray);
        let nuevo = listadoArray.filter((obj) => {
            return obj.status === estado;
        });
        return nuevo;

}