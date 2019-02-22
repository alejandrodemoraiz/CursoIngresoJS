function mostrar()
{
//tomo la edad

//tomo la edad
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	if (edad<18 && estadoCivil=="soltero")
	{
		console.log ("soltero y mayor");
	}
	else
{
		alert ("Es muy pequeño para NO ser soltero");
}

}//FIN DE LA FUNCIÓN
