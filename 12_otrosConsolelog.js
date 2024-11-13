console.log("Hola curso"); // mensaje en consola
console.error("Este es un mensaje de error y se pone en rojo"); // mensaje de error en rojo
console.warn("Este es un mensaje de advertencia y se muestra en amarillo"); // mensaje de advertencia
console.info("Este es un mensaje de información"); // mensaje de información en azul
console.debug("Este es un mensaje de depuración"); // imprimir mensajes de depuración

// console.table se utiliza imprimir datos en formato de tabla. Por ejemplos objetios o matrices complejas. 
let datos = [
  { nombre: "Alberto", edad: 47 },
  { nombre: "Cordula", edad: 49 }
];
console.table(datos);

let datos2 = [
    {nombre: "Teo", afficion: "Bailar", oficio: "programación"},
    {nombre: "Teresa", afficion: "diseñar", oficio: "ingeniera de software"}
];
console.table(datos2);

// console.clear se utiliza para limpiar la consola de mensajes. 
