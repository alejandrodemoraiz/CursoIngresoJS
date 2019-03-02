function mostrar()
{
	var kilometrosIngresados;
	var tipoDeCombustible;
	var contador;
	var totalkilometros;
	var promedio;
	var velocidadMasBaja;
	var velocidadMasBajaCombustible;
	var cantidadCombistiblesLiquidos;
	var velocidadMasAltaCombustiblesSolidos;
	contador = 0;
	totalkilometros = 0;
	cantidadCombistiblesLiquidos = 0;

	while(contador <5)
		{   
			contador++
		kilometrosIngresados = prompt("Ingrese kilometos " + contador + "#");
		kilometrosIngresados = parseInt(kilometrosIngresados);
		while(kilometrosIngresados < 0 || kilometrosIngresados > 250)
		{
			kilometrosIngresados = prompt("ERROR! Ingrese kilometos "+ contador + "#");
		kilometrosIngresados = parseInt(kilometrosIngresados);
		}

		tipoDeCombustible = prompt(" tipo de combustible, ingrese =>s para solido o => l para liquido " + contador + "#");
 		while(tipoDeCombustible != "l" && tipoDeCombustible != "s")
 		{
 			tipoDeCombustible = prompt(" ERROR! tipo de combustible, ingrese =>s para solido o => l para liquido " + contador + "#");
 		}
	
 		totalkilometros = totalkilometros + kilometrosIngresados;

 		if (contador == 1) {
 			velocidadMasBaja = kilometrosIngresados;
 			velocidadMasBajaCombustible = tipoDeCombustible;
 							}
 		else{
              if (kilometrosIngresados < velocidadMasBaja) 
              {
              		velocidadMasBaja = kilometrosIngresados;
 					velocidadMasBajaCombustible = tipoDeCombustible;
              }
 			}

 			if (tipoDeCombustible == "l" && kilometrosIngresados > 100) 
 			{
  				cantidadCombistiblesLiquidos = cantidadCombistiblesLiquidos + 1;
 			}
 				if (tipoDeCombustible == "s")
 				{
 					if (contador == 1) 
 					{
 						velocidadMasAltaCombustiblesSolidos = kilometrosIngresados;

 					}else{
 						if (kilometrosIngresados > velocidadMasAltaCombustiblesSolidos) 
 						{
 							 velocidadMasAltaCombustiblesSolidos = kilometrosIngresados;
 						}
 				}
	}
}
  promedio = totalkilometros/contador;
  alert("el promedio de las velocidades es de " + promedio+ "k/h");
  alert(" la velocidad mas baja es de " +velocidadMasBaja + "y su tipo de combustible es " +velocidadMasBajaCombustible);
 alert(" la cantidad vehiculos con combustible liquido que supera a 100km es " + cantidadCombistiblesLiquidos);
alert(" la velocidad mas alta de los combustibles solidos es " + velocidadMasAltaCombustiblesSolidos+ "k/h");

}