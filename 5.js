// veuillez complétez la fonction, ainsi que son argument
var nb =[];
function afficherAlEnvers(nb) {
  
  var resultat = [];
  for (let i = nb.length; i > -1; i--) {
 resultat.push(nb[i]);
      
  }
  return resultat;
}
console.log(afficherAlEnvers( [0,1,2,3,4,5]) );
