// veuillez complétez la fonction, ainsi que son argument
function racineCarre(nb) {
    if (nb > 0){
        var nbr= nb**(1/2);
         console.log("La racine carrée de ", nb, "est", nbr);
     }
     else
     {
         console.log("Vous avez saisi de valeur négative");
     }
}
racineCarre(5);
