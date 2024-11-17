// Las variables primitivas contienen un único valor primitivo como un número, una cadena de texto o un valor booleano.

// Por ejemplo:
var numero = 42;
var texto = 'Hola Mundo':
var booleano = true; 

// LAS VARIABLES NO PRIMITIVAS CONTIENEN UN OBJETO COMO MATRICES, FUNCIONES Y OTROS OBJETOS. 

// Por ejemplo:
var persona = { nombre: "Alberto", edad: 46 };
var colores = ["rojo", "verde, azul"];

// VARIABLES GLOBALES
// Son variables que se utilizan fuera de una función y que pueden ser utilizadas en cualquier parte del programa

// Ejemplo: 
var mensaje = "Hola, mundo";

function saludar() {
    console.log(mensaje);
}

saludar(); // Imprime "HOla, mundo" en la consola

// VARIABLES LOCALES
// Son variables que se definen dentro de una función y que solo
// pueden ser utilizadas dentro de esa función

function calcularPromedio(numeros) {
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  var promedio = suma / numeros.length;
  return promedio;
}

var numeros = [2, 4, 6, 8];
var promedio = calcularPromedio(numeros);
console.log(promedio); // Imprime 5 en la consola
console.log(suma); // Error: la variable "suma" solo está definida dentro de la función "calcularPromedio"