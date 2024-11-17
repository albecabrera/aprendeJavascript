// Son aquellas que se declaran fuera de una función y pueden ser utilizadas en cualquir parte del programa

// EJEMPLO:
 var nombre = "Juan";

 function saludar() {
    console.log("Hola, " + nombre);
 }

 saludar(); // Imprime "Hola, Juan" en la consola. 

 // Con alcance local solo dentro de una función

 // El alcance de LET O CONST  se limita al bloque donde fue declarada. 
 function saludar() {
  let nombre = "Juan";
  if (true) {
    let nombre = "María";
    console.log("Hola, " + nombre);
  }
  console.log("Adiós, " + nombre);
}

saludar(); // Imprime "Hola, María" y "Adiós, Juan" en la consola

// Declaración y asignación de una variable global con var
var mensaje = "Hola, mundo";
console.log(mensaje); // Imprime "Hola, mundo" en la consola

// Declaración y asignación de una variable local con let
function saludar() {
  let nombre = "Juan";
  console.log("Hola, " + nombre); // Imprime "Hola, Juan" en la consola
}

saludar();

// Declaración y asignación de una constante
const PI = 3.1416;
console.log(PI); // Imprime 3.1416 en la consola