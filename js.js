//-----------------------------ej:1----------------------------------------------
/* Instrucciones:
Usa console.log() para imprimir "Hello World" en la consola. Sientete libre de probar otras cosas también.*/

//console.log("Hello World")

//-----------------------------ej:2----------------------------------------------
/*Instrucciones:
Calcula la suma entre 3445324 y 53454423 y asigna el resultado a una variable llamada superduper.*/

/*function sum(number1,number2) {
    return number1 + number2;
}
sum()
//var total = sum(2,3);
//var total2 = sum(5,10);
//var total3 = sum(2,3);
var total4 = sum(3445324, 53454423 );
var superduper = total4;

//console.log(total);
//console.log(total2);
//console.log(total3);
console.log(superduper);*/

//-----------------------------ej:3----------------------------------------------
/*Instrucciones:
Crea una nueva variable llamada squareArea para cada nueva iteración de la función 
CalculateArea utilizando las dimensiones de las siguientes figuras:*/

/*function calculateArea(length,edge){
	return length * edge;
}
// Your code Below this line:
let squareAreaUno =  calculateArea(4,4);
let squareAreaDos = calculateArea(2,2);
let squareAreaTres = calculateArea(5,5);

console.log(squareAreaUno, squareAreaDos, squareAreaTres);*/

//-----------------------------ej:4----------------------------------------------
/* Instrucciones:
1-Define una función llamada multi.
2-La función multi recibe dos números.
3-Retorna el resultado de la multiplicación entre ellos.
*/

//Define the function called "multi" that expects 2 parameters:
/*function multi(a,b){
    return a*b;
  }
  
    //don't edit anything below this line
    var returnValue = multi(7,53812212);
    console.log(returnValue); */


//-----------------------------ej:5----------------------------------------------    

/*nstrucciones:
Imprime en la consola, el resultado de usar la función multy para calcular la multiplicación 
entre 324234 y 47.*/

/* let multy = function(a,b){
    return a*b;
}
//Dont edit anything ABOVE this line

//your code here
let resultado = multy(324234, 47);
console.log(resultado) */

//-----------------------------ej:6----------------------------------------------  
/* Instructions:
Cambia la sintaxis de la función multy para que sea de tipo flecha (arrow) y no una función 
tradicional.*/

/*const multy = (a,b) => a*b
//Dont edit anything below this line
console.log(multy(324234,47))*/

//-----------------------------ej:7---------------------------------------------- 
/*Instrucciones:
Usando las dos funciones disponibles, calcula el valor de 137 dólares en yenes e imprímelo 
en la consola.*/

/*var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******

var calculoDollarAEuro = dollarToEuro(137);
var euroAYenes = euroToYen(calculoDollarAEuro)
console.log(euroAYenes)*/

//-----------------------------ej:8---------------------------------------------- 
/* Instrucciones:
Escribe la función renderPerson requerida para imprimir un string como el siguiente:*/

// Your code goes here:
/* function renderPerson(nombre,nacimiento, colorEyes, edad, sexo){
    return `${nombre} is a ${edad} years old ${sexo} born in ${nacimiento} with ${colorEyes} eyes`
  }
    ///*** Do not edit below this line 
    console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male')); */

//-----------------------------ej:9----------------------------------------------    
/*Escribe una función llamada sortNames que dado un array o arreglo de nombres,
 los devuelva en orden alfabético.*/

/*var names = ['John', 'Kenny', 'Tom', "Bob", 'Dilan'];

function sortNames(arr){
    return arr.sort()
}

console.log(sortNames(names));  */

//-----------------------------ej:10----------------------------------------------  
/* Instrucciones:
Crea una función de flecha llamada rapid que tomará un string.

Recorre (loop) el texto y elimina todas las vocales.

Coloca en mayúscula todas las consonantes.

Devuelve el nuevo string.*/

/*const rapid = (myString) => {
    let consonants = [];
    for(let letter of myString){
        if(['a','e','i','o','u'].includes(letter) == false)
            consonants.push(letter)
    }
    return consonants.join('');
};

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str).toUpperCase()); */