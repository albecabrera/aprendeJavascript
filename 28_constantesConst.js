// Declaración de constantes con diferentes tipos de datos
const SALUDO = "¡Hola, mundo!";
const YEAR_FUNDACION = 2021;
const PRECIO = 9.99;
const ES_ACTIVO = true;

// Uso de constantes en el código
console.log(SALUDO); // Salida: ¡Hola, mundo!
console.log(YEAR_FUNDACION); // Salida: 2021
console.log(PRECIO); // Salida: 9.99
console.log(ES_ACTIVO); // Salida: true

// Declaración de una constante global
const GLOBAL_CONST = "Soy una constante global";

function ejemploScope() {
  // Declaración de una constante local dentro de una función
  const LOCAL_CONST = "Soy una constante local";

  console.log(GLOBAL_CONST); // Salida: Soy una constante global
  console.log(LOCAL_CONST);  // Salida: Soy una constante local
}

ejemploScope();

// Accediendo a las constantes fuera de la función
console.log(GLOBAL_CONST);   // Salida: Soy una constante global
// console.log(LOCAL_CONST);  // Error: LOCAL_CONST is not defined

const AUTO = {
  marca: "Toyota",
  modelo: "Corolla",
  year: 2020
};

// Modificar una propiedad del objeto
AUTO.modelo = "Camry";
console.log("Modelo modificado:", AUTO.modelo); // Salida: Modelo modificado: Camry

// Agregar una nueva propiedad al objeto
AUTO.color = "Rojo";
console.log("Color agregado:", AUTO.color); // Salida: Color agregado: Rojo

// Eliminar una propiedad del objeto
delete AUTO.year;
console.log("Propiedad 'año' eliminada:", AUTO.year); // Salida: Propiedad 'año' eliminada: undefined

const FRUITS = ["apple", "banana", "cherry"];