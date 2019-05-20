let cursos = [
  {
    id: 1,
    nombre: 'typescript',
    alias: 't',
    duracion: 100,
    valor: 150000
  },
  {
    id: 2,
    nombre: 'angular',
    alias: 'a',
    duracion: 200,
    valor: 25000
  },
  {
    id: 3,
    nombre: 'mongodb',
    alias: 'm',
    duracion: 200,
    valor: 25000
  }
];

let impCurso = (curso, tiempo, callback) => {
  setTimeout(function(){
    callback('El id del curso: '+curso.id+ '\r\n'
      +'El curso se llama: '+curso.nombre+ '\r\n'
      +'Tiene una duracion de: '+curso.duracion+ '\r\n'
      +'Tiene un valor: '+curso.valor+ '\r\n'+ '\r\n'
    );
  }, tiempo);
};

module.exports = {
  cursos,
  impCurso
};
