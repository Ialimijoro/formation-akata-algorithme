// veuillez complétez la fonction, ainsi que son argument


function minimum(tab) {
  
    var min=tab[0];
     for (let i = 0; i < tab.length; i++) {
    if (tab[i] <= min) {
        min=tab[i];
    }
      
     }
     return min;
   }
   console.log(minimum([21,74,89,25,36,45,93,145]) );