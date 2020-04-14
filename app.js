const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;

const colors = require('colors');




let comando = argv._[0];

switch(comando){

    case 'listar':
        listarTabla(argv.base, argv.limite)
        console.log("dff")
        break;

    case 'crear':        
        crearArchivo(argv.base, argv.limite)
        .then( archivo => console.log(`Archivos creado: ${archivo}`.yellow))
        .catch(e => console.log(e));
        break;
   
    default:
        console.log('Comando no encontrado');
}




console.log(argv);

//let argv2 = process.argv;

//console.log('Limite', argv.limite);


//let parametro = argv[2];
//let base = parametro.split('=')[1]




