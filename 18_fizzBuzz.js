// Definir una función fizzBuzz(max) que toma un número e imprime cada número del 0 al máximo (no incluido) que sea divisible por 3 o 5, pero no ambos. 
function fizzBuzz(max) {
  for (let i = 0; i < max; i++) {
    // Verificar si el número es divisible por 3 o por 5, pero no ambos
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      console.log(i);
    }
  }
}
fizzBuzz(20);


// De tarea, hacer el mismo ejercicio pero con un bulce while
