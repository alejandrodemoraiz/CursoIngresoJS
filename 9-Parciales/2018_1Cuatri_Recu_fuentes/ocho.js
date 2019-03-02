function mostrar()
{
	var pais;
	var superficie;
	var respuesta;
	var contador;
	var cantidadPaisesSuperficieImpa;
	var cantidadPaisesSuperficiepar;
	var cantidadPaisesSuperficieMenora100;
	var cantidadPaisesSuperficieIguala100;
	var primerPaisSuperando100DeSuperficie;
	var contadorMayor100;
	var cantidadDeSuperficie;
	var PaisConMenosSuperficie;
	var nombreDePaisConMenosSuperficie;
	var promedio;
	primerPaisSuperando100DeSuperficie = "bandera";
	contador = 0;
	respuesta = "si";
	cantidadPaisesSuperficieImpa =0;
	cantidadPaisesSuperficiepar=0;
	cantidadPaisesSuperficieMenora100 = 0;
	cantidadPaisesSuperficieIguala100 = 0;
	contadorMayor100 = 0;
	cantidadDeSuperficie =0;

	while(respuesta == "si")
	{	
		contador++;
		pais = prompt("Ingrese un pais" + contador + "#");
		superficie = prompt("Ingrese superficie"+ contador + "#");
		superficie =parseInt(superficie);
		while(superficie > 5000)
		{
			superficie = prompt("Ingrese una superficie valida, menor a 5000");
		}	superficie =parseInt(superficie);

		respuesta = prompt( "desea seguir ingresando paises y su superficie? ==> si , para continuar");

 		cantidadDeSuperficie = cantidadDeSuperficie + superficie;
	
   if (superficie%2 == 0) {
   	   cantidadPaisesSuperficiepar = cantidadPaisesSuperficiepar + 1;
   							}

    if(superficie%2 != 0){
    	cantidadPaisesSuperficieImpa++;

    }
   
   if (superficie < 100) 
   {
   	cantidadPaisesSuperficieMenora100 = cantidadPaisesSuperficieMenora100 + 1;
   }
   	if (superficie == 100)
   	{
   		cantidadPaisesSuperficieIguala100 =cantidadPaisesSuperficieIguala100 + 1;
   	}
 	if ( superficie > 100)
 	{       
 			contadorMayor100 ++;
 			if (contadorMayor100 == 1) {
 				primerPaisSuperando100DeSuperficie = pais;
 			}
 			if (contador == 1) {
 				PaisConMenosSuperficie = superficie;
 				nombreDePaisConMenosSuperficie = pais;
 			}
 			else{
 				if (superficie < PaisConMenosSuperficie) 
 				{
 					PaisConMenosSuperficie = superficie;
 					nombreDePaisConMenosSuperficie = pais;
 				}
 			}

 	}
}
promedio = cantidadDeSuperficie / contador;
document.write(" la cantidad de paises con superficie impar es de " +cantidadPaisesSuperficieImpa + "<br>" +
  "la cantidad de paises con superficie menor a 100 es de " +cantidadPaisesSuperficieMenora100 + "<br>"+
  " cantidad de paises con superficie igual a 100 es de  " +cantidadPaisesSuperficieIguala100 + "<br>"+
  " El nombre del primer pais que supero los 100 de superficie es " +primerPaisSuperando100DeSuperficie+ "<br>"+
  " promedio de kilometros ingresados es " + promedio + "<br>" +
  "el nombre del pais con menos territorio es " + nombreDePaisConMenosSuperficie + " ;) ");

}

