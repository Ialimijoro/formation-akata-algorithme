// veuillez complétez la fonction, ainsi que son argument
function nombrePremier(nbr) {
  for (var i = 2; i < nbr; i++) if (nbr % i === 0) return false;
  return nbr > 1;
}
console.log(nombrePremier(2));
console.log(nombrePremier(3));
console.log(nombrePremier(4));
