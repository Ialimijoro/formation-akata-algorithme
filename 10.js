// veuillez complétez la fonction, ainsi que son argument
function maximum(tableau) {
  var tailletableau = tableau.length;
    var max = tableau[0];
    for (var i = 1; i <= tailletableau; i++){
      if(tableau[i]> max){
        max = tableau [i];
      }
    }
    return max;
}
console.log(maximum([0, 1, 77, 3, 4]));