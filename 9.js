// veuillez complétez la fonction, ainsi que son argument
function minimum(tab) {
  let min = tab[0];
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] < min) {
      min = tab[i];
    }
  }

  return min;
}
console.log(minimum([0, 45, 6, 9]));
