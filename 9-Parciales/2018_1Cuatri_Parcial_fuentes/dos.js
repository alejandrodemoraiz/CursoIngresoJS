function mostrar()
{
  var nombreIngresado;
  var localidadIngresada;
  nombreIngresado = document.getElementById('elNombre').value;
  localidadIngresada = document.getElementById('laLocalidad').value;

  alert("usted es " + nombreIngresado+ " y vive en la localidad de " + localidadIngresada);
}
