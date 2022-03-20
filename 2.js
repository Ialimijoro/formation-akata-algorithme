// veuillez complétez la fonction, ainsi que son argument
function factoriel(nbr) 
{
  if (nbr === 0)
  {
     return 1;
  }
  return nbr * factoriel(nbr-1);
}
console.log(factoriel(5));
