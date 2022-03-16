// veuillez complétez la fonction, ainsi que son argument
function minimum(valeur) {
    var taille=valeur.length; 
    var i=taille-1;
    var kely_indrindra=valeur[i];
    while (i >= 0) {
        if (kely_indrindra > valeur[i]) {
            kely_indrindra=valeur[i];
        }
        i=i-1;
    }
    return kely_indrindra;
}
console.log(minimum([1,-4,2,-45,0,8,9,4]));
