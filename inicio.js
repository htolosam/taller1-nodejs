const { cursos, impCurso } = require ('./cursos');
const fs = require('fs');

//opciones para obtener los datos por teclado
const opciones = {
	id: {
		demand: true,
		alias: 'i'
	},
	nombre: {
		demand: true,
		alias: 'n'
	},
	cedula: {
		demand: true,
		alias: 'c'
	}
}

//funcion para crear el archivo
let crearArchivo = (curso, nombre, cedula) => {
	texto = 'El estudiante: ' + nombre + '\n'
	+'con cedula: ' + cedula+ '\n'
  +'Se ha matriculado en el curso: '+curso.nombre+ '\n'
  +'duracion del curso: '+curso.duracion+ '\n'
  +'valor del curso: '+curso.valor;
	fs.writeFile('resultado.txt', texto, (err)=>{
		if(err) throw (err);
		console.log('se ha creado el archivo');
	});
}

//obtenemos los argumentos
const argv = require('yargs')
			.command('inscribir', 'Incripcion estudiante', opciones)
			.argv;

//revisamos si el curso existe
let curso = cursos.find(curso=>curso.id==argv.id);

//si no existe mostramos el listado de cursos
if(!curso){
  if(argv.id)
    console.log('El curso al que se quiere inscribir no existe. se muestran los cursos a continuacion');

  for (var i = 0; i < cursos.length; i++) {
      impCurso(cursos[i], (2000*(i+1)), function(resultado){
      	console.log(resultado);
      });
  }
}else{
  //si existe creamos el archivo
  crearArchivo(curso, argv.nombre, argv.cedula);
}
