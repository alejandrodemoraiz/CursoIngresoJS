function mostrar()
{

  var marca;
  var precio;
  var peso;
  var temperatura;
  var respuesta;
  var contador;
  var cantidadDeTemperaturasPares;
  var productoMasPesado;
  var productoMenosPesado;
  var productoMasPesadoMarca;
  var cantidadProductorAMenos0;
  var promedioDeTodoslosProductos;
  var pesoTotal;

  //
  respuesta = "si";
  contador = 0;
  cantidadDeTemperaturasPares = 0;
  cantidadProductorAMenos0 = 0;
  pesoTotal = 0;

  while (respuesta == "si")
    {
      contador = contador + 1;
    marca = prompt(" ingrese la marca del producto" +contador+ "# ");

    peso =prompt(" ingrese el peso del producto" +contador+ "# ");
    peso = parseInt(peso);
    while (peso < 1 || peso > 100 )
    {
      peso =prompt(" ERROR! ingrese el peso del producto" +contador+ "# ");
      peso = parseInt(peso);

    }

    precio = prompt(" ingrese el precio del producto" +contador+ "# ");

    temperatura = prompt(" ingrese la temperatura de almacenamiento del producto" +contador+ "# ");
    temperatura = parseInt(temperatura);
    while (temperatura < -30 || temperatura > 30)
    {
      temperatura = prompt("ERROR! ingrese la temperatura de almacenamiento del producto" +contador+ "# ");
      temperatura = parseInt(temperatura);
    }

    respuesta = prompt(" si desea continuar ingresando productos y sus caracteristicas escriba --> si");

      if (temperatura% 2 == 0)
      {
       cantidadDeTemperaturasPares = cantidadDeTemperaturasPares + 1 ;
      }
      if (contador == 1)
      {
          productoMasPesado = peso;
          productoMasPesadoMarca = marca;
          productoMenosPesado = peso;

      }
      else
      {
        if (peso > productoMasPesado)
        {
          productoMasPesado = peso;
          productoMasPesadoMarca = marca;
        }
        if(peso < productoMenosPesado)
        {
                productoMenosPesado = peso;
        }
      }
if (temperatura < 0)
    {
      cantidadProductorAMenos0 = cantidadProductorAMenos0 + 1;
    }

    pesoTotal = pesoTotal + peso;



    }
promedioDeTodoslosProductos = pesoTotal / contador;

 document.write("la cantidad de temperaturas pares es de " +cantidadDeTemperaturasPares + "<br>" +
"la marca del producto mas pesado es " + productoMasPesadoMarca+ "<br>" +
" La cantidad de productos que se conservan a menos de 0 grados " + cantidadProductorAMenos0 +  "<br>" +
" el promedio del peso de todos los productos es de " + promedioDeTodoslosProductos + "<br>" +
"el peso maximo es de " + productoMasPesado + " y el minimo es de " + productoMenosPesado+ " .");
}
