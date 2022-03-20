// veuillez complétez la fonction, ainsi que son argument
function racinecarre(chiffre) {
    var chiffre;
    for (var i =chiffre; i >= 1; i--) {
        if (i * i ===chiffre) {
            chiffre = i;
            break;
       }
   }
   return chiffre;
}
console.log(racinecarre(25))
