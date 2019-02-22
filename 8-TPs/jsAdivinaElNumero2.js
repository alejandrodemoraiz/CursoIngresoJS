/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos,
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
var contadorIntentos;
var numero;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(Math.random()*(100))+1;
	alert("numero secreto puesto toque verificar");

}
var contadorIntentos;
contadorIntentos=0

function verificar()
{
	numero=document.getElementById('numero').value;

contadorIntentos+1
	if(numero==numeroSecreto){
	switch (contadorIntentos) {
	case "1":
					mensaje = "usted es un Psíquico";
			break;
			case "2":
				mensaje = "excelente percepción”"
				break;
				case "3":
					mensaje = "esto es suerte";
					break;
					case "4":
					mensaje = "Excelente técnica";
					break;
					case "5":
					mensaje = "usted está en la media";
					break;
					case "6":
					case "7":
					case "8" :
					case "9" :
					case "10":
					mensaje = "falta técnica";
								break;
		default: mensaje = "afortunado en el amor!!"
		break;

	}
	if(numeroSecreto<numero)
	{
		mensaje = "sobra";
	}
else{
		mensaje = " falta "
	}
	document.getElementById('intentos').value=contadorIntentos;

	alert(mensaje);








}
}
