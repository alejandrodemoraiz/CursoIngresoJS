function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	var numeroR;
	numeroR = Math.floor((Math.random()) * 10)+ 1;
	//alert(numeroR);

if (numeroR>8) {
	alert("EXCELENTE" +  " te sacaste un " + numeroR);
}else {


if (numeroR > 3) {
	alert("APROBO" +  " te sacaste un " + numeroR)

}else {
	alert("VAMOS LA PROXIMA SE PUEDE " + " te sacaste un " +  numeroR)

}
}
}//FIN DE LA FUNCIÓN
