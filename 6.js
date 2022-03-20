// veuillez complétez la fonction, ainsi que son argument
function renverserChaineDeCaractere(chaine) {
    var  longueur = chaine.length, resultat = "";
    for(var i = 0; i <= longueur-1; i++){
      resultat = resultat + chaine[longueur-i-1];
    }
    return resultat;
}
var chaine = "akata";
chaine= renverserChaineDeCaractere(chaine);
console.log(chaine);
