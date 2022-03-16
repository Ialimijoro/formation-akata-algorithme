// veuillez complétez la fonction, ainsi que son argument
function factoriel(nombre) {
  var resultat = 1;
  for (var i = 1; i <= nombre; i++) {
    resultat = resultat * i;
  }
  return resultat;
}
console.log(factoriel(3));
 