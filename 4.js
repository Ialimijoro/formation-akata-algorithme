// veuillez complétez la fonction, ainsi que son argument
function nombrePremier(nb) {
if (nb <2) return false;
for (let i = 2; i < nb; i++) {
    if (nb%i==0)
    return false
}
    return true; 
}  

      
      
  

console.log(nombrePremier(1));
