 /* global cantidadcorazon, cantidadfrio, cantidadhelado,cantidacaramelo,cantidacardamomo,total,compratotal */
  

function salta(Sel) {
    if (Sel.adcorazon.selectedIndex !== 0) {
        //document.location = Sel.ad.options[Sel.ad.selectedIndex].value;
        cantidadcorazon = Sel.adcorazon.options[Sel.adcorazon.selectedIndex].value;
        console.log(cantidadcorazon);
    }
   
}
function saltas(Sel) {

    if (Sel.adhelado.selectedIndex !== 0) {
        //document.location = Sel.ad.options[Sel.ad.selectedIndex].value;
         cantidadfrio = Sel.adhelado.options[Sel.adhelado.selectedIndex].value;
        console.log(cantidadfrio);
    }
}
function saltas2(Sel) {

    if (Sel.adcream.selectedIndex !== 0) {
        //document.location = Sel.ad.options[Sel.ad.selectedIndex].value;
         cantidadhelado = Sel.adcream.options[Sel.adcream.selectedIndex].value;
        console.log(cantidadhelado);
    }
}
function saltas3(Sel) {

    if (Sel.adcaramelo.selectedIndex !== 0) {
        //document.location = Sel.ad.options[Sel.ad.selectedIndex].value;
        cantidacaramelo = Sel.adcaramelo.options[Sel.adcaramelo.selectedIndex].value;
        console.log(cantidacaramelo);
    }
}


function saltas4(Sel) {

    if (Sel.adcardamom.selectedIndex !== 0) {
        //document.location = Sel.ad.options[Sel.ad.selectedIndex].value;
       cantidacardamomo = Sel.adcardamom.options[Sel.adcardamom.selectedIndex].value;
        console.log( cantidacardamomo);
    }
}
if(cantidadcorazon>0){
    total++;
}
if(cantidadfrio>0){
    total++;
}
if(cantidadhelado>0){
    total++;
}
if(cantidacardamomo>0){
    total++;
}
if(cantidacaramelo>0){
    total++;
}
 compratotal=total;
