function mostrar()
{
var	numeroIngresado;
var respuesta;
var contador;
var maximo;
var minimo;
contador = 0;
respuesta = "si";
while (respuesta == "si") {
 	contador = contador + 1;
	numeroIngresado = prompt("Ingrese un numero " + contador + " #");
	numeroIngresado = parseInt(numeroIngresado);
respuesta = prompt (" ingrese ==> si, si desea continuar ingresando numeros");

if (contador == 1 ) {
	  maximo =numeroIngresado;
	 minimo = numeroIngresado;

	}
	else {
		if (numeroIngresado> maximo) {
			maximo = numeroIngresado;


		}if (numeroIngresado < minimo) {
			minimo = numeroIngresado;

		}
	}








	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
}
}//FIN DE LA FUNCIÓN
