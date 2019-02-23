function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
  var numeros;

while(respuesta == "si")
{
	contador ++;
	numeros = prompt("Ingrese numeros "+  contador + "#" )
	numeros= parseInt(numeros);
	acumulador = numeros + acumulador;
	respuesta = prompt("desea poner mas numeros? \n -si \n -no");
}




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

//FIN DE LA FUNCIÓN

}
