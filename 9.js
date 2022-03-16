// veuillez complétez la fonction, ainsi que son argument
function minimum(tableau) {
  var tailletableau = tableau.length;
    var min = tableau[0];
    for (var i = 1; i <= tailletableau; i++){
      if(tableau[i]< min){
        min = tableau [i];
      }
    }
    return min;
}
console.log(minimum([-9, 1, -77, 3, 4]));