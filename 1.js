// veuillez complétez la fonction, ainsi que son argument
function racineCarre(nombre) {
  var resultat = 1, i = 0, trouve = false;
  
  while (!trouve) {
    i = i + 1;
    resultat = (nombre / resultat + resultat)/2;
    if (i == nombre  + 1) {
      break;
    }
  }
  return resultat;
  
}
console.log(racineCarre(49))
