// veuillez complétez la fonction, ainsi que son argument
function renverserChaineDeCaractere(mot) {
  var resultat ="";
  for (let i = mot.length; i >=0; i--) {
      resultat += mot[i];
      
  }
  return resultat;
}
console.log(renverserChaineDeCaractere("akata"));