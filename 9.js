// veuillez complétez la fonction, ainsi que son argument
function minimum(tableau) {
    var mini = tableau[0];
    for (i = 0; i < tableau.length; i++) {
      if (tableau[i] < mini) {
        mini = tableau[i];
      }
    }
  
    return mini;
  }
  
  console.log(minimum([87,46,79,102,-77]));
