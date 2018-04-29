const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./todo/todo')


let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (const tarea of listado) {
            console.log("======== Por hacer =========".green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("============================".green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        break;
    default:
        console.log('comando no es renocido');
        break;
}