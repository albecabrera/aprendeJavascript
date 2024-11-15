// Crear una función imprimir(menorNumero) que imprimirá cada número desde menorNumero hasta mayorNumero, inclusive. Inclusivo significa que el rango incluye menorNumero y mayorNumero
// Haz esto creando tanto un bucle for como un bucle while

function imprimirEntre(menorNumero, mayorNumero) {
    for(let i = menorNumero; i <= mayorNumero; i++) {
        console.log(i);
    }
}

imprimirEntre(12, 15);

// While
function imprimirEntreWhile(menorNumero, mayorNumero) {
    let i = menorNumero;
    while(i <= mayorNumero) {
        console.log(i);
        i++;

    }
}
imprimirEntreWhile(3, 6); 
