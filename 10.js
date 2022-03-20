// veuillez complétez la fonction, ainsi que son argument
function maximum(tableau) {
        var maxi = tableau[0];
        for (i = 0; i < tableau.length; i++) {
          if (tableau[i] > maxi) {
            maxi = tableau[i];
          }
        }
      
        return maxi;
      }
      
      console.log(maximum([0,46,79,102,-77]));

