function mostrar()
{
  var marcaIngresada;
  var pesoIngresado;
  var temperaturaIngresada;
  var respuesta;
  var contador;
  var cantidadDeTemperaturasPares;
  var productoMasPesado;
  var productoMasPesadoMarca;
  var cantidadDeProductosA0;
  var pesoTotalProductos;
  var promedio;
  var pesoMaximo;
  var pesoMinimo;
  cantidadDeTemperaturasPares = 0;
  contador = 0;
  cantidadDeProductosA0 = 0;
  pesoTotalProductos = 0;
  respuesta = "si";

  while (respuesta == "si")
  {
    contador = contador + 1;
    marcaIngresada = prompt("Ingrese la marca del producto " +contador+"#");

    pesoIngresado = prompt("Ingrese el peso del producto " +contador+"#");
    pesoIngresado = parseInt(pesoIngresado);
    pesoTotalProductos = pesoTotalProductos + pesoIngresado;
    while ( pesoIngresado < 1 || pesoIngresado > 100)
          {
      pesoIngresado = prompt("ERROR! Ingrese el peso del producto " +contador+"#");
    pesoIngresado = parseInt(pesoIngresado);

          }
    temperaturaIngresada = prompt(" ingrese la temperatura de almacenamiento "+contador+"#")
    temperaturaIngresada = parseInt(temperaturaIngresada);
    while (temperaturaIngresada < -30 || temperaturaIngresada > 30)
    {
      temperaturaIngresada = prompt(" ERROR! ingrese la temperatura de almacenamiento "+contador+"#")
      temperaturaIngresada = parseInt(temperaturaIngresada);

    } respuesta = prompt ("para continuar ingresando productos escriba ===> si ");
    if (temperaturaIngresada %2 == 0)
        {
          cantidadDeTemperaturasPares = cantidadDeTemperaturasPares + 1;

        }

        if (contador ==1)
        {
          productoMasPesado = pesoIngresado;
          productoMasPesadoMarca = marcaIngresada;
        }
        else {
          if (productoMasPesado > pesoIngresado) {

            productoMasPesado = pesoIngresado;
            productoMasPesadoMarca = marcaIngresada;
          }
        }

          if (temperaturaIngresada < 0) {
            cantidadDeProductosA0 = cantidadDeProductosA0 + 1;
          }

   if (contador == 1)
   {
     pesoMaximo = pesoIngresado;
     pesoMinimo = pesoIngresado;

   }else {
     if (pesoIngresado> pesoMaximo)
     {
       pesoMaximo = pesoIngresado;

     }if (pesoIngresado< pesoMinimo)
     {
          pesoMinimo = pesoIngresado;
     }

     }
   }

promedio = pesoTotalProductos/ contador;

document.write( " la cantidad de temperaturas pares es de " +cantidadDeTemperaturasPares + "<br>" +
"la marca del producto mas pesado es " + productoMasPesadoMarca + "<br>" +
"la cantidad de productos que se conservan a menos 0 grados es de " +cantidadDeProductosA0 + "<br>" +
"el promedio de todos los productos es de " +promedio + "<br>" +
" el peso maximo es de " +pesoMaximo + " y el minimo es de " +pesoMinimo + ".");

}
