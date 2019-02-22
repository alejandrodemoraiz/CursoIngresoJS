function mostrar()
{
var planeta;
planeta = prompt(" planeta del sistema solar:")
switch (planeta) {
  case "mercurio":
  case "venus":
    mensaje = "acá hace más calor"
    break;
  case "tierra":
  mensaje = "Aca vivimos"
  break;
  case "marte":
  case "jupiter":
  case "saturno":
  case "urano":
  case "neptuno":
  break;
  mensaje = "Aca hace mas frio";
  default: alert(" ese planeta no esta en nuestro sistema solar");
  break;

}
alert(mensaje);
}
