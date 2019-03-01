function mostrar()
{
 var numeroIngresado;
 var letraIngresada;
 var respuesta;
 var contador;
 var cantidadpares;
 var cantidadImpares;
 var sumaDePositivo;
 var sumaDeNegativos;
 var promedio;
 var cantidadDeCeros;
 var numeroMaximo;
 var letraMaximo;
 var numeroMinimo;
 var letraMinimo;
 contador = 0;
 sumaDePositivo = 0;
 cantidadpares = 0;
 cantidadImpares = 0;
 sumaDeNegativos = 0;
 cantidadDeCeros = 0;


 respuesta = "si";
 while (respuesta == "si" )
      {
      contador = contador + 1;
       numeroIngresado = prompt("Ingrese un numero "+ contador + "#");
       letraIngresada= prompt("ingrese una letra");
     numeroIngresado= parseInt(numeroIngresado);

     while (numeroIngresado < -100 || numeroIngresado > 100) {
       numeroIngresado = prompt("ERROR!!! Ingrese un numero "+ contador + "#");
     numeroIngresado= parseInt(numeroIngresado)


     }
     respuesta = prompt("desea seguir ingresando ==> si");

if (numeroIngresado %2 ==0 && numeroIngresado != 0) {
  cantidadpares= cantidadpares + 1;
}else {
  cantidadImpares = cantidadImpares + 1;
}
if (numeroIngresado > 0)
      {
  sumaDePositivo = sumaDePositivo + numeroIngresado;
}else {
 sumaDeNegativos = sumaDeNegativos + numeroIngresado;
}
if (numeroIngresado == 0){
  cantidadDeCeros = cantidadDeCeros + 1;
}
if (contador ==1)
      {
   numeroMaximo= numeroIngresado;
   letraMaximo = letraIngresada;
   numeroMinimo = numeroIngresado;
   letraMinimo = letraIngresada;

 }
 else {
        if (numeroIngresado> numeroMaximo)
            {
          numeroMaximo= numeroIngresado;
          letraMaximo = letraIngresada;
            }
    else {
      numeroMinimo = numeroIngresado;
      letraMinimo = letraIngresada;
    }
      }
 }
 promedio = sumaDePositivo / contador;
 alert("la cantidad de pares " +cantidadpares);
 alert("la cantidad de impares " +cantidadImpares);
alert(" suma de negativos es de " + sumaDeNegativos);
alert(" el promedio de los positivos es de " +  promedio);
alert(" cantidad de ceros es de " + cantidadDeCeros);
alert("El número maximo es " +numeroMaximo + "y la letra del máximo "  + letraMaximo);
alert(" el minimo es " +numeroMinimo +" y su letra es " + letraMinimo);

}
