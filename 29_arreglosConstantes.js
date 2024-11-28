const FRUITS = ["apple", "banana", "cherry"];
console.log(FRUITS);

// ESTO SUSTITUYE EL VALOR DE LA FRUTA
FRUITS[1] = "orange";
console.log(FRUITS);


// Objtos, constantes inmutables
const FRUITS = Object.freeze(['apple', 'banana', 'cherry']);
console.log(FRUITS); 

FRUITS[1] = 'orange'; 

const COLORS = Object.freeze(['red', 'blue', 'green', 'yellow', 'purple']);

function getColorMessage(colors, index) {
  if (index >= 0 && index < colors.length) {
    return `El color en la posición ${index} es ${colors[index]}.`;
  }
  return 'Índice no válido.';
}

console.log(getColorMessage(COLORS, 2)); // 'El color en la posición 2 es green.'
console.log(getColorMessage(COLORS, 5)); // 'Índice no válido.'