// veuillez complétez la fonction, ainsi que son argument
function maximum(tab) {
  var max = tab[0];
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
  }

  return max;
}

console.log(maximum([0, 1, 2, 3, 4]));
console.log(maximum([88, 9, 2, 3]));
