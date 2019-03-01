function mostrar()
{
var numeroElegido;
var letraElegida;
var contador;
var respuesta;
var contadorNumerosPares;
var contadorNumerosImpares;
var contadorceros;
var contadorPositivos;
var acumuladorPositivos;
var promedioPositivos;
var acumuladorNegativo;
var numeroMaximo;
var numeroMinimo;
var letraDeNumeroMaximo;
var letraDeNumerominimo;

respuesta = "si";
contador = 0;
contadorNumerosPares = 0;
contadorNumerosImpares = 0;
contadorceros = 0;
contadorPositivos =0;
acumuladorPositivos =0;
acumuladorNegativo = 0;
promediopositivos= 0;
promedio= 0;


while (respuesta == "si")
{          contador++;
          letraElegida = prompt("Ingrese una letra" + contador + "#");
          numeroElegido = prompt(" ingrese un numero" + contador + "#");
          numeroElegido = parseInt(numeroElegido);
          while (numeroElegido < -100 || numeroElegido > 100)
                      {
                numeroElegido = prompt(" ERROR! ingrese un numero" + contador + "#")
                      numeroElegido = parseInt(numeroElegido);
                      }
          respuesta = prompt(" desea continuar? de ser asi escriba ==> si " + contador + "#");

if (numeroElegido %2 == 0)
{
 contadorNumerosPares = contadorNumerosPares + 1;

}else {
  contadorNumerosImpares = contadorNumerosImpares + 1;

}
if (numeroElegido == 0) {
  contadorceros = contadorceros + 1;

}
if (numeroElegido > 0) {
  contadorPositivos = contadorPositivos + 1;
  acumuladorPositivos= acumuladorPositivos + numeroElegido;

}
else {
    acumuladorNegativo = acumuladorNegativo + numeroElegido;
}

if (contador == 1) {
  maximo = numeroElegido;
  letraDeNumeroMaximo = letraElegida;
  minimo = numeroElegido;
  letraDeNumerominimo = letraElegida;


}else {
        if (numeroElegido > maximo)
        {
          maximo = numeroElegido;
          letraDeNumeroMaximo = letraElegida;

        }
        if (numeroElegido < minimo)
        {
          minimo = numeroElegido;
          letraDeNumerominimo = letraElegida;


        }

    }
}




promedio = acumuladorPositivos / contadorPositivos;

document.write(" la cantidad de pares es de :" + contadorNumerosPares + "cantidad de numeros impares:" + contadorNumerosImpares +
"la cantidad de 0 es de :" + contadorceros+ "el promedio de los positivos es de:" + promedio+
"la suma de los numeros negativos es de:" +acumuladorNegativo +
" el numero y la letra maximos si " + maximo + " "+ letraDeNumeroMaximo + " y el numero minimo es " + minimo + "." );


}
