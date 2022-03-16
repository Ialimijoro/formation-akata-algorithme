// veuillez complétez la fonction, ainsi que son argument
function afficherAlEnvers(tableaux) {
    var tailTableaux = tableaux.length;
    var i=tailTableaux-1;
    while(i >= 0)
    {
        console.log(tableaux[i]);
        i=i-1;
    }
}
afficherAlEnvers(["Mbizo", "Katsaka", "Vary", "tsaramaso","Kabaro"]);