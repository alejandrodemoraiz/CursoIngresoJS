function mostrar()
{
  var letraIngresada;
  var numeroIngresado;
  var respuesta;
  var cantidadDeNumerosPares;
  var cantidadDeNumerosInpares;
  var cantidadDe0;
  var acumuladorDeNumerosPositivos;
  var contadorDeNumerosPositivos;
  var promedioNumerosPostivos;
  var acumuladorDeNumerosNegativos;
  var numeroMaximo;
  var numeroMinimo;
  var letraMaximo;
  var letraMinimo;
//
respuesta = "si";
contador = 0;
cantidadDeNumerosPares = 0;
cantidadDeNumerosInpares = 0;
cantidadDe0 = 0;
acumuladorDeNumerosPositivos = 0;
contadorDeNumerosPositivos = 0;
acumuladorDeNumerosNegativos = 0;

while (respuesta == "si")
  {
    contador = contador + 1;

    letraIngresada = prompt("Ingrese la letra " + contador + "# .");

    numeroIngresado = prompt("Ingrese el numero " +contador + "# .");
    numeroIngresado = parseInt(numeroIngresado);
    while (numeroIngresado > 100 || numeroIngresado < -100)
    {
      numeroIngresado = prompt("ERROR! Ingrese el numero " +contador + "# .");
      numeroIngresado = parseInt(numeroIngresado);
    }

    respuesta = prompt(" ingrese --> si si desea lo continuar ingresando ");

if (numeroIngresado%2 ==0)
{
  cantidadDeNumerosPares = cantidadDeNumerosPares + 1;
}else
{
  cantidadDeNumerosInpares = cantidadDeNumerosInpares + 1;
}
if ( numeroIngresado == 0)
{
    cantidadDe0 = cantidadDe0 +1;
}
if (numeroIngresado > 0)
{
  acumuladorDeNumerosPositivos = acumuladorDeNumerosPositivos + numeroIngresado;
  contadorDeNumerosPositivos = contadorDeNumerosPositivos + 1;
}else {
   acumuladorDeNumerosNegativos  = acumuladorDeNumerosNegativos + numeroIngresado;
      }
 if (contador == 1)
 {
   numeroMaximo = numeroIngresado;
   letraMaximo = letraIngresada;
   numeroMinimo = numeroIngresado;
   letraMinimo = letraIngresada;
 }else
  {
   if (numeroIngresado > numeroMaximo)
      {
        numeroMaximo = numeroIngresado;
        letraMaximo = letraIngresada;
      }
    if (numeroIngresado < numeroMinimo)
    {
      numeroMinimo = numeroIngresado;
      letraMinimo = letraIngresada;
    }
  }






  }

  promedioNumerosPostivos = acumuladorDeNumerosPositivos / contadorDeNumerosPositivos;

document.write ("la cantidad de numeros pares es de " +cantidadDeNumerosPares + "<br>"+
"la cantidad de numero impares es de " + cantidadDeNumerosInpares+ " <br>"+
"la cantidad de numeros ingresados que son iguales a 0 es de " + cantidadDe0+ "<br>" +
"el promedio de los positivos es de " + promedioNumerosPostivos + "<br>" +
"la suma de todos los numeros negativos es de " + acumuladorDeNumerosNegativos + "<br>" +
" el numero maximo es " +numeroMaximo + " y su letra es " + letraMaximo+ "<br>" +
" el numero minimo es " + numeroMinimo + " y su letra es " + letraMinimo + " ...");
}
