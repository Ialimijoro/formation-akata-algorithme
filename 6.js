// veuillez complétez la fonction, ainsi que son argument
function renverserChaineDeCaractere(chaine) {
  var taillechaine = chaine.length;
  var resultat="";
  for(var i = taillechaine-1; i >= 0; i--){
    resultat += chaine[i];
  }
  return resultat;
}
console.log(renverserChaineDeCaractere("nancy"))
