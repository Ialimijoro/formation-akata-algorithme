// veuillez complétez la fonction, ainsi que son argument
function nombrePremier(nombre) {
  for (var i = 2; i <= nombre/2; i++) {
    if (nombre % i == 0) {
      return false;
    }
  }
  return nombre > 1;
}
console.log(nombrePremier(14));
