// veuillez complétez la fonction, ainsi que son argument
function factoriel(nbr) {
    var a=1;
	var i=1;
    while(i<=nbr){
       a=a*i;
    i=i+1;
    } 
    console.log( "le factoriel de", nbr, "est égale à",a);
}
factoriel(-5);
