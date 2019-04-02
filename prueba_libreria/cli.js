#!/usr/bin/env node
/*Este archivo no depende de la función “require()” para ser ejecutado, y 
puede ser usado como cualquier otro programa de consola*/

'use strict'

let meow = require ('meow');
let catNames = require ('./');

let cli = meow([
    'Examples',
    '$cat-names',
    'Max',
    '',
    '$cat-names --all',
    'Abby',
    'Angel',
    "Annie",
	"Baby",
	"Bailey",
	"Bandit",
	"Bear",
    "Bella",
    'Options',
    '--all Get all names instead of a random name',

]);

console.log(cli.flags.all ? catNames.all.join('\n') : catNames.random());
