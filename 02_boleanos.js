/* ! not es la negación */
console.log(true);
console.log(!true);
console.log(!false);
console.log(3 > 4);
console.log(4 > 3);

/* && es el y */
console.log(true&&true);
console.log(false&&true);

/* || es el o */ 
console.log(true||true);
console.log(true||false);
console.log(false||false);
console.log(false||false);

/* || (or) solo es falso cuando ambos datos evaluados son falsos. De lo contrario
arroja true */

console.log(true||false && false); /* true */
console.log(false && !(false||true)); /* false */

