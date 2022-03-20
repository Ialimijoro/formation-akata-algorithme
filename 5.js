// veuillez complétez la fonction, ainsi que son argument
function afficherAlEnvers(liste) {
    liste = [1,2,3,4,5,6,7,8,9,10],
    liste_inverse = []; 

nbr=0

for(i=0;i<liste.length;i++){
    nbr=(liste.length-i)-1
    liste_inverse[i]=liste[nbr]
}

liste= liste_inverse; 

console.log(liste)
}
console.log(afficherAlEnvers([1,2,3,4,5,6,7,8,9,10]))
