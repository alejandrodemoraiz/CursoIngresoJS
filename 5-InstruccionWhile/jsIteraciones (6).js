function mostrar()
{

	var contador=0;
	var acumulador = 0;
var numeros;
while(contador < 5){
	contador++;
	numeros = prompt(" dame un numero ");
	numeros= parseInt(numeros);
	acumulador = numeros + acumulador;
}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;


}//FIN DE LA FUNCIÓN
