// veuillez complétez la fonction, ainsi que son argument
function afficherAlEnvers(liste) {
  var tailleliste = liste.length;
  var resultat = []
  for (var i = tailleliste-1; i >= 0; i--){
    resultat += liste[i];
  }
  return resultat;
}
console.log(afficherAlEnvers([0, 1, 2, 3, 4]));
