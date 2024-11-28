const NUMEROS = [1, 2, 3, 4, 5];

// Modificar un elemento del arreglo
NUMEROS[2] = 99;
console.log("Arreglo después de modificar el elemento:", NUMEROS);
// Salida: Arreglo después de modificar el elemento: [1, 2, 99, 4, 5]

// Agregar un elemento al final del arreglo
NUMEROS.push(6);
console.log("Arreglo después de agregar un elemento:", NUMEROS);
// Salida: Arreglo después de agregar un elemento: [1, 2, 99, 4, 5, 6]

// Eliminar el último elemento del arreglo
NUMEROS.pop();
console.log("Arreglo después de eliminar un elemento:", NUMEROS);
// Salida: Arreglo después de eliminar un elemento: [1, 2, 99, 4, 5]
