function mostrar()
{
var precio;
var porcentajeDeDescuento;
var precioFinal;


precio = prompt(" ingrese el precio");
precio = parseInt(precio);
porcentajeDeDescuento = prompt("Ingrese porcentaje de descuento");
porcentajeDeDescuento =  parseInt(porcentajeDeDescuento);
precioFinal = precio - (precio * porcentajeDeDescuento / 100);




document.getElementById("elPrecioFinal").value = precioFinal;
}
