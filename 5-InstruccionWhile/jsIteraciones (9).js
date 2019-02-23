
function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var max;
	var min;

	var respuesta='si';

	while(respuesta=='si')
	{
		numero=prompt("Ingrese un numero porfavor");
		numero=parseInt(numero);
		respuesta=prompt("Desea ingresar otro numero? ingrese -si para continuar");

		if(contador >0)
		{
			max=numero;
		    min=numero;
		}

		else

		{
			if(numero>max)
			{
				max=numero;
			}

			if(numero<min)
			{
				min=numero;
			}

			contador ++;



	}

}

document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;




}
//FIN DE LA FUNCIÓN//
