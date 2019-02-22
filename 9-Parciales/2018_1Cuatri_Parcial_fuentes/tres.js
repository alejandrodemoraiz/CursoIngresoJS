function mostrar()
{
var precioIngresado;
var porcentajeDeDescuento;
var precioFInal;
precioIngresado = prompt("cual es el precio?")
porcentajeDeDescuento = prompt(" Que porcentaje de descuento quieres hacerle?")
precioIngresado=parseInt(precioIngresado);
porcentajeDeDescuento= parseInt(porcentajeDeDescuento);
precioFInal = precioIngresado - (precioIngresado * porcentajeDeDescuento/100);
document.getElementById('elPrecioFinal').value = precioFInal;

}
