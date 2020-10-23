//packete de file system
const fs = require('fs');

//impotacion libreria color para consola
const colors = require('colors');

let todoList = [];

const create = (description) => {

    let todo = {
        description,
        complete: false
    };

    //todoList.push(todo);
    //saveData();
    getDbData();
    todoList.push(todo);
    saveData();
    return todo;
}

const get = () => { 
    getDbData();
    return todoList;
}

const saveData = () => {

    let data = JSON.stringify(todoList);

    //escribe nueva data
    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('Error al grabar', err);           
    });
    
}

const getDbData = () => {
    try{
        todoList = require('../db/data.json');        
    }
    catch{
        todoList = [];
    }
}

const update = (description, complete = true) =>{
    getDbData();
    
    //busca indice segun descripcion
    let index = todoList.findIndex(task =>{
        return task.description === description;
    });

    if(index > -1){
        todoList[index].complete = complete;
        saveData();
        return true;
    }

    return false;
}

const del = (description) => {
    getDbData();
    
    //busca indice segun descripcion
    let index = todoList.findIndex(task =>{
        return task.description === description;
    });

    if(index > -1){
        todoList.splice(index, 1);
        saveData();
        return true;
    }

    return false;
}

module.exports = {
    create,
    get,
    update,
    del
}