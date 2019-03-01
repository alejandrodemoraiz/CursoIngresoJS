function mostrar()
{
  var diaDeLaSemanaIngresado;
  diaDeLaSemanaIngresado = prompt( "ingrese en dia de la semana");

  switch (diaDeLaSemanaIngresado) {
    case "lunes":
      case "martes":
        case "miercoles":
          case "jueves":
            case "viernes":

              alert(" a trabajar");

      break;
      case "sabado":
        case "domingo":
          alert("Buen finde");
          break;
    default: alert(" ERROR!!! ingrese un dia valido");


  }

}
