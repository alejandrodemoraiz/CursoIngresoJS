function mostrar()
{
var planetaElegido;
//
planetaElegido = prompt(" ingrese un planeta del sistema solar...");

switch(planetaElegido)
  {
      case "tierra":
      mensaje = "acá vivimos";
      break;
      case "mercurio":
      case "venus":
       mensaje = " aca hace mas calor";
       break;
       case "marte":
       case "jupiter":
       case "saturno":
       case "urano":
       case "neptuno":
       mensaje = "aca hace mas frio";
       break;
       case "pluton":
       mensaje = " ah re, pluton no mas es un planeta";
       break;
default: mensaje = " Error! ese planeta no corresponde al sistema solar";
     }

alert(mensaje);



}
