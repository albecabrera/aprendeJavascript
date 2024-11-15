// Crear una función esCinco, que regresará TRUE    si un número es igual a 5, y FALSE si no lo es. 
function esCinco(numero) {
    if(numero = 5) {
      return true;
    }
    else {
        return false;
    }
}
console.log(esCinco(5));

// Crear una función esPar que toma un número como argumento, y devuelve TRUE si el número es par, y regreswa FALSE si no lo esCinco. 
function esPar(numeroArgumento) {
  if(numeroArgumento % 2 == 0) {
    return true;
  }
  else {
    return false
  }
}
console.log(esPar(8));


// ESTO ES UNA FORMA MUCHO MÁS FÁCIL
function esPar2(numero) {
  return numero % 2 == 0;

}
console.log(esPar(5));

