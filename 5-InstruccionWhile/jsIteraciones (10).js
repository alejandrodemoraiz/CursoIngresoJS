
/*1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). /**/


function mostrar()
{
	//variables.
	var acumuladorNegativo;
		var acumuladorPositivo;
		var respuesta="si";
		var contadorceros;
		var cantidadP;
		var cantidadN;
		var contadorPares;
		var promediopositivos;
		var promedionegativos;
		var diferencia;
		var numeros;
		var contador;
		var sumaP;
		var sumaN;


		contador=0;
		contadorpositivo=0;
		contadornegativo=0;
		contadorPares=0;
		contadorceros=0;
		acumuladorPositivo=0;
		acumuladorNegativo=0;
		sumaP=0;
		sumaN=0;

		while(respuesta=="si")
		{
			contador=contador+1
			numeros=prompt("Ingresa numeros"+contador +"#= ");
			numeros=parseInt(numeros);

			respuesta=prompt("=> Si para continuar");

			if(respuesta!="si")
			{
				break;
			}

				if(numeros>0)
				{
					acumuladorPositivo=acumuladorPositivo+numeros;
					contadorpositivo=contadorpositivo+1;

				}
				else
				{
					acumuladorNegativo=acumuladorNegativo+numeros;
					contadornegativo=contadornegativo+1

				}

					if(numeros==0)
					{
						contadorceros=contadorceros+1;
					}
					else
					{
						if(numeros%2==0)
						{
							contadorPares=contadorPares+1;						}

					}

					cantidadP=contadorpositivo;
					cantidadN=contadornegativo;


		}

		promediopositivos=acumuladorPositivo/contadorpositivo;
		promedionegativos=acumuladorNegativo/contadornegativo;

		diferencia=acumuladorPositivo-acumuladorNegativo;





		document.write("1-Suma de los negativos = " +acumuladorNegativo+"<br>"+
		 " 2-Suma de los positivos = " + acumuladorPositivo + "<br>"+
		 "3-Cantidad de positivos = " + cantidadP + "<br>"+
		 "4-Cantidad de negativos= " + cantidadN + "<br>"+
		 "5-Cantidad de ceros = " + contadorceros + "<br>"+
		 "6-Cantidad de números pares = " + contadorPares + "<br>"+
		 "7-Promedio de positivos = " + promediopositivos + "<br>"+
		 "8-Promedio de negativos = " + promedionegativos + "<br>"+
	"9-Diferencia entre positivos y negativos = "+ diferencia + "<br>")
}//FIN DE LA FUNCIÓN
