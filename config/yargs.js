


//opciones de comando update
const updateCommand = {
    //campo descripcion
    description: {
        demand: true, //deja como obligatorio 
        alias: 'd'
     }, 
    //campo completado
    complete: {
        alias: 'c',
        default: true,
        demand: true, //deja como obligatorio 
    }  
}

//opciones de comando create
const createCommand = {
    //campo descripcion
    description: {
        demand: true, //deja como obligatorio 
        alias: 'd'
     }    
}

//opciones de comando create
const deleteCommand = {
    //campo descripcion
    description: {
        demand: true, //deja como obligatorio 
        alias: 'd'
     }    
}

//importacion paquete Yargs
const argv  = require('yargs')
    //comando y descrpcion de este
    .command('update', 'Actualiza tarea', updateCommand)
    .command('create', 'Crea tarea', createCommand)
    .command('delete', 'Elimina tarea', deleteCommand)
    .help() //pemite obtener informacion parametrizada de ayuda
    .argv;


module.exports = {
    argv
}