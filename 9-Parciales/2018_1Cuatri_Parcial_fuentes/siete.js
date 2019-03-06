function mostrar()
{
var notaIngresada;
var sexoIngresado;
var contador;
var promedio;
var acumuladorNotas;
var notaMasBaja;
var notaMasBajaSexo;
var cantidadDeVaronesNotaMayor6;

contador = 0;
acumuladorNotas = 0;
cantidadDeVaronesNotaMayor6 = 0;

while (contador < 5)
  {
    contador = contador + 1;
      notaIngresada = prompt(" ingrese nota del alumno "+ contador + "#. " );
      notaIngresada =parseInt(notaIngresada);
      while (notaIngresada > 10 || notaIngresada < 1 )
      {
        notaIngresada = prompt(" ERROR! ingrese nota del alumno "+ contador + "#. " );
        notaIngresada =parseInt(notaIngresada);
      }
      sexoIngresado = prompt(" ingrese sexo f 0 m del alumno " +contador+ "#. ");
      while ( sexoIngresado != "f" && sexoIngresado != "m")
      {
            sexoIngresado = prompt("ERROR! ingrese sexo f 0 m del alumno " +contador+ "#. ");
      }

      acumuladorNotas = acumuladorNotas + notaIngresada;
      if (contador == 1)
      {
        notaMasBaja = notaIngresada;
        notaMasBajaSexo = sexoIngresado;
      }else
      {
        if (notaIngresada< notaMasBaja)
        {
          notaMasBaja = notaIngresada;
          notaMasBajaSexo = sexoIngresado;
        }
      }
      if (notaIngresada >5)
      {
        cantidadDeVaronesNotaMayor6 = cantidadDeVaronesNotaMayor6 + 1;
      }
  }

promedio =  acumuladorNotas/ contador;
alert( "el promedio de notas de los alumnos es de " + promedio);
alert(" la nota mas baja es de " + notaMasBaja + " y pertenece a un alumno de sexo " + notaMasBajaSexo);
alert( " la cantidad de alumnos masculinos que tienen una nota mayor a 6 es igual a " + cantidadDeVaronesNotaMayor6);
}
