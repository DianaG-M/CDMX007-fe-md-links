/* module.exports = () => {
  // ...
}; */

// Aquí va el código que será ejecutado cuando la función require() sea llamada
'use strict';

//Importa la libreria para generar un valor aleatorio 
let uniqueRandomArray = require ('unique-random-array');
//LLama al archivo json donde estan todos los nombres de gatos
let catNames = require ('cat-name.json');


//Exporta toda la lista de los gatos
exports.all = catNames;
//Obtiene el nombre de un gato de forma aleatoria
exports.random = uniqueRandomArray(catNames);