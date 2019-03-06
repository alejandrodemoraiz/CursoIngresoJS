function mostrar()
{
 var nombreIngresado;
 var localidadIngresada;
 var nombreYLocalidad;
 nombreIngresado = document.getElementById("elNombre").value;
localidadIngresada = document.getElementById("laLocalidad").value;

nombreYLocalidad =("Usted es " + nombreIngresado+ " y vive en la localidad de " + localidadIngresada + ".");
 alert(nombreYLocalidad);
}
