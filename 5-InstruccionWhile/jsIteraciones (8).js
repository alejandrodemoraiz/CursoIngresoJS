function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
var num;
var acumulador;
var respuesta="si";
  while (respuesta == "si") {
		contador ++;
		num= prompt(" ingrese un numero" + contador + "#");
		num=parseInt(num);
		acumulador= num + acumulador;
		respuesta = prompt("desea ingresar mas numeros? ==> si" );


  }
	if (numero > 0) {
		positivo = num + positivo;


	}else {
		negativo = negativo * num;
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
