let age;
age = 47;
console.log(age);

let nombre;
nombre = "Alberto Cabrera";
console.log(nombre);

let oficio;
oficio = "Profesor de Cultura Física y Deportes y de Español como lengua extranjera";
console.log(oficio);

let mobil = 'iPhone';
console.log(mobil);

// ALCANCE DE LAS VARIABLES 
function foo() {
  if (true) {
    var x = 1o;
    let y = 20;
  }
  console.log(x); // output: 10
  console.log(y); // Uncaught ReferenceError: y is not defined
}

// OTRO EJEMPLO DEL ALCANCE DE LAS VARIABLES
function foo() {
  var x = 35;
  if (true) {
    let y = 20;
    console.log(x); // output: 10
    console.log(y); // output: 20
  }
  console.log(x); // output: 10
  console.log(y); // Uncaught ReferenceError: y is not defined
}

