// Condicionales

/* == igual
< mayor que
> menor que
<= menor o igual
>= mayor o igual
*/

let edad = 17;
if (edad>=18) {
    console.log("Ya eres mayor de edad");
}
else {
    console.log("Eres un pendejo");
}

let beer = 4;
if (beer>=3) {
    console.log("Eres alcóholico");
}
else {
    console.log("Todo está bien");
}


let javaScript = 5;
if (javaScript <= 3) {
    console.log("Ahora si estás entiendo JS como lenguaje de programación");
}
else {
    console.log("Tío, recoge las maletas y vete a cortar caña")
}

let faltagente = true;
function accesoAlBoliche (edad) {
    if (edad>=19) {
        console.log("Puedes pasar");
    }
    else if (edad == 17 && faltagente) {
        console.log("Puedes pasar, hasta las 4:00 am");
    }
    else {

    console.log("Lárgate para tu casa");
    }
}


