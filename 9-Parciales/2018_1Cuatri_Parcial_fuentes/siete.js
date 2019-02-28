function mostrar()
{
  var notas;
  var sexo;
  var promedio;
  var notaBajo = 11;
  var sexoBajo;
  var contadorsexo = 0;
  var contadorVar = 0;
  
var contador = 0;
  while (contador< 5) {
    contador ++;
    notas =prompt("Ingrese nota del alunmno numero " + contador);
    notas = parseInt(notas);
    while (notas < 1 || notas > 10)
    {
      notas =prompt("invalido! Ingrese nota del alunmno numero " + contador);
    notas= parseInt(notas);
  }


while (contadorsexo < 5) {
  contadorsexo ++;
  sexo = prompt(" Ingrese sexo del estudiante " +  contadorsexo+" \n ingrese: \n m para masculino \n f para femenino" );
while(sexo != "m" && sexo != "f"){
  sexo= prompt("INVALIDO Ingrese sexo del estudiante " +  contadorsexo+ " \n ingrese: \n m para masculino \n f para femenino");

}
promedio;
}
if ( notas < notaBajo)
  {
  notaBajo= notas;
  sexoBajo = sexo;
    }
    if (sexo == "m" && notas > 5 ) {
      contadorVar ++;

    }
}

promedio = (notas * contador) / contador;
alert("el promedio de las notas es de " + promedio);
alert(" aprobaron " + contadorVar + " varones");
alert(" la nota mas baja es de "+ notaBajo + " y corresponde al sexo " + sexoBajo + ".");
}
