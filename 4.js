// veuillez complétez la fonction, ainsi que son argument
function nombrePremier(b) {
    a=true;
	var i=2;
	if(b==2)
	{
		console.log("premier");
	}
	else if(b==0 || b==1)
	{
		console.log(b, "n'est pas premier");
	}
	else 
	{
		while(i<b){
			if(b%i==0){
			    console.log(b,"n'est pas premier");
			    a=false;
			    return a;	
			}
		    i++;
		}
		if(a==true){
           console.log(b,"est premier");
		}
	}
}
nombrePremier(11);
