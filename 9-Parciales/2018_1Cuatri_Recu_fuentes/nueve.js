function mostrar()
{
var marca;
var precios;
var precios;
var respuesta;
var contador;
var acumuladorprecios;
var cantidadDePreciosPares;
var precioMenor;
var precioMenorMarca;
var litromenor;
var cantidadGaseosasMenos50;
var promedio;
var precioMaximo;
var precioMenor;
cantidadDePreciosPares =0;
cantidadGaseosasMenos50 =0;
respuesta = "si";
contador = 0;
acumuladorprecios = 0;
while(respuesta == "si")
 {
			contador++;
			marca = prompt("Ingrese la marca de la gaseos " + contador + "#");

		litros = prompt (" Ingrese los litros de la gaseosa " + contador + "#");
		litros =parseInt(litros);
	while( litros != 1 && litros != 2 && litros != 3 ){
	litros = prompt (" ERROR! Ingrese los litros de la gaseosa " + contador + "#");
	litros =parseInt(litros);
}
		precios = prompt( "ingrese precios de la gaseosa "+ contador + "#"  )
	precios =parseInt(precios);
	while(precios > 100 || precios < 30)
	{
		precios = prompt( "ERROR! ingrese precios de la gaseosa "+ contador + "#"  )
		precios =parseInt(precios);	
	} respuesta = prompt("ingrese ==> si para continuar");
	  
		acumuladorprecios = acumuladorprecios + precios;
		
		if (precios %2 == 0) {
			cantidadDePreciosPares = cantidadDePreciosPares + 1;
		}
		if (contador ==1 ) {
			precioMenor = precios;
			precioMenorMarca = marca;
			litromenor = litros;
		}else	
			{
				if(precios < precioMenor)
				{
					precioMenor = precios;
					precioMenorMarca = marca;
					litromenor = litros;
				}
			}
			if (precios < 50)
			{
				cantidadGaseosasMenos50 = cantidadGaseosasMenos50 + 1;
			}	
			if (litros == 3) 
			{	
				if (contador == 1) 
					{
						precioMaximo = precios;
						precioMenor = precios;
					}
					else{

						if (precios > precioMaximo) {
							precioMaximo = precios;
						}
						if(precios < precioMenor){
							precioMenor = precios;
						}
					}
				
					


				}
		
			}

		
promedio = acumuladorprecios / contador;


document.write("la cantidad de precios pares es de " + cantidadDePreciosPares+ "<br>"+
	"la marca mas barata es " + precioMenorMarca+ "y tiene "+litromenor + "litros " + "<br>" +
	"cantidad de gaseosas que valen menos de 50 " + cantidadGaseosasMenos50 + "<br>" + 
	" el promedio de precios de gaseosa es de " + promedio + "<br>" + 
	"el precios maximo de la gaseosa de 3 litros es " + precioMaximo + "<br>" + 
	"y el precios minimo de la gaseosa de 3 litros es de "+ precioMenor+ "pesos");
}
