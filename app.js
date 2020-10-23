const todo = require('./todo/todo');
const argv = require('./config/yargs').argv;

let command = argv._[0];

switch(command){

    case 'get':
        let tasks = todo.get();

        for(let task of tasks)
        {
            console.log('=======Por hacer======='.green);
            console.log('Tarea: ',task.description);
            console.log('Estado: ', task.complete);
            console.log('======================='.green);
        }        
    break;
    case 'create':
        let task = todo.create(argv.description);
        console.log(task);
    break;
    case 'update':
        let updated = todo.update(argv.description, argv.complete);
        console.log(updated);
    break;
    case 'delete':
        let deleted = todo.del(argv.description);
        console.log(deleted);
    break;
    default: 
        console.log('Comando no reconocido');
    break;

}
