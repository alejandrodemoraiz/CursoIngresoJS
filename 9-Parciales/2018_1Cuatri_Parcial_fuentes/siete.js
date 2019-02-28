function mostrar()
{
var notas;
var sexo;
var contador;
var acumuladornotas;
var notaMasBaja;
var notaMAsAlta;
var promedio;
var sexoMasBajo;
var varonesAprobados;
contador = 0;
acumuladornotas = 0;
varonesAprobados=0;


while (contador < 5)
  {
    contador++
  notas= prompt(" ingrese calificacion");
  notas = parseInt(notas);
  acumuladornotas = acumuladornotas + notas;
      while (notas > 10 || notas < 1)
      {
        notas= prompt(" ERROR! ingrese calificacion");
        notas = parseInt(notas);
      }

  sexo= prompt("Ingrese f 0 m");
      while (sexo != "f" && sexo != "m")
      {
          sexo= prompt("ERROR! Ingrese f 0 m");
      }

      if (contador == 1)
          {
        notaMasBaja = notas;
        sexoMasBajo = sexo;
        notaMAsAlta = notas;
      }
      else
      {
        if (notas< notaMasBaja)
        {
          notaMasBaja = notas;
          sexoMasBajo = sexo;
        }
        else {
            notaMAsAlta = notas;
            }






      }
if (notas > 5 && sexo == "m")
{

varonesAprobados = varonesAprobados + 1 ;

}

  }
promedio = acumuladornotas/ contador;
alert(promedio);
alert(" la nota mas baja es de " + notaMasBaja + "y su sexo es " + sexoMasBajo + " .");
alert(" los varones aprobados son " + varonesAprobados + " .");
}
