// veuillez complétez la fonction, ainsi que son argument


function maximum(tab) {
  
    var max=tab[0];
     for (let i = 0; i < tab.length; i++) {
    if (tab[i] >= max) {
        max=tab[i];
    }
      
     }
     return max;
   }
   console.log(maximum([1,74,89,25,36,45,93,145]) );