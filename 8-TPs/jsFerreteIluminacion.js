/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

 */
function CalcularPrecio ()
{
  var cantidad;
 	var precioDescuento;
 	var marca;
  var descuento;
 	var precioBruto;
 	var precioFinal;
 	var precioUnico;
  var porcentaje;
 	var impuesto;
precioUnico = 35;
cantidad= document.getElementById('Cantidad').value;
marca= document.getElementById('Marca').value;

precioBruto= precioUnico * cantidad;
precioDescuento= precioBruto * descuento;
precioFinal = precioBruto - precioDescuento;
document.getElementById('precioDescuento').value= precioFinal;
if (cantidad >5 ) {
  porcentaje = 50/100;

}else {
  if (cantidad == 5) {
    if (marca == " ArgentinaLuz") {
      descuento = 40/100;
      }
      else {
        descuento = 30/100;
      }
  }
}
if (cantidad == 4 ) {
  if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
    descuento = 25/100;

  }else {
    decuento= 20/100;
  }

}
if (cantidad == 3) {
  if (marca == "ArgentinaLuz") {
    decuento = 15/100
    }
    else {
      if (marca == "FelipeLamparas") {
        descuento = 10/100

      }else {
        descuento = 5/100;
      }
    }
}












 	if(precioFinal >120)
 	{

	alert("usted pago " + impuesto +" de IIBB");


}

}
