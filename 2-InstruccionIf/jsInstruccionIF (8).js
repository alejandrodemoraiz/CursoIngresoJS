function mostrar()
{
//tomo la edad
var edadIngresada;
edadIngresada = document.getElementById('edad').value;
estadoCivil = document.getElementById('estadoCivil').value;

if (edadIngresada < 18 && estadoCivil != "Soltero") {
	console.log(" no hacer nada")

}else {
	if (edadIngresada >17 && estadoCivil == "Soltero") {

	alert("Es soltero y no es menor");
}

}//FIN DE LA FUNCIÓN
}
