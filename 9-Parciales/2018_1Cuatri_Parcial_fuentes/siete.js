function mostrar()
{
  var notaIngresada;
  var contador;
  var sexo;
  var acumulador;
  var promedio;
  var notaMasBaja;
  var sexoDeNotaMasBaja;
  var varonesAprobados;
  contador = 0;
  varonesAprobados = 0;
acumulador = 0;
 while (contador < 5)
        {
   contador++;
   notaIngresada = prompt("ingresar calificacion para alumno " + contador + "#");
    notaIngresada=parseInt(notaIngresada);

   while (notaIngresada > 10  || notaIngresada < 0)
              {
        notaIngresada = prompt("ERROR! ingresar calificacion para alumno " + contador + "#");
        notaIngresada=parseInt(notaIngresada);
              }
acumulador = acumulador + notaIngresada;
   sexo = prompt("ingresar sexo del alumno " + contador + "#");
     while (sexo !=  "m" && sexo != "f")
          {
          sexo = prompt("ERROR! ingresar sexo del alumno " + contador + "#");

          }
  if (contador == 1) {
    notaMasBaja = notaIngresada;
    sexoDeNotaMasBaja = sexo;

  }else {
    if (notaIngresada< notaMasBaja) {
      notaMasBaja = notaIngresada;
      sexoDeNotaMasBaja = sexo;
    }
    if (notaIngresada > 5 && sexo == "m") {
      varonesAprobados = varonesAprobados + 1;

    }
  }

      }
      promedio = acumulador / contador;
      alert(" el promedio de las notas es " + promedio + " la nota mas baja es de " +notaMasBaja + "y le corresponde a un alumno " +sexoDeNotaMasBaja +
       ",la cantidad de varones aprobados es de " +varonesAprobados + ".");
    }
