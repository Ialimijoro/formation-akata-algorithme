// veuillez complétez la fonction, ainsi que son argument
function maximum(val) {
    var taille=val.length; 
    var i=taille-1;
    var lebe_indrindra=val[i];
    while (i >= 0) {
        if (val[i] > lebe_indrindra) {
            lebe_indrindra=val[i];
        }
        i=i-1;
    }
    return lebe_indrindra;
}
console.log(maximum([12,78,10,2000,0,36]));
