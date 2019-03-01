function mostrar()
{
  var primerNumero;
  var segundoNumero;
  var sumar;
  var resta;
  primerNumero = prompt(" dame un numero");
  segundoNumero = prompt("dame otro numero");
if (primerNumero == segundoNumero) {
 alert( primerNumero + segundoNumero)
}
if(primerNumero > segundoNumero){
  resta = (primerNumero / segundoNumero);
  resta = parseInt(resta);
  alert(resta);
}
if(primerNumero < segundoNumero){
  primerNumero= parseInt(primerNumero);
  segundoNumero= parseInt(segundoNumero);
  sumar = (primerNumero  + segundoNumero);
  alert(sumar);
  }
  if (sumar > 50) {
    alert("la suma es " +sumar + " y supero el 50")

  }
}
