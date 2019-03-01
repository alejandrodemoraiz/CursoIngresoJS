function mostrar()
{
var precioIngresado;
var descuentoIngresado;
var precioFinal;
precioIngresado = prompt (" Ingrese numero?");
precioIngresado = parseInt(precioIngresado);
descuentoIngresado = prompt (" Ingrese descuento");
descuentoIngresado = parseInt(descuentoIngresado);

precioFinal = precioIngresado - (precioIngresado * descuentoIngresado /100);

document.getElementById("elPrecioFinal").value = precioFinal;
}
