function mostrar()
{
var primerNumeroPedido;
var segundoNumeroPedido;

primerNumeroPedido = prompt("ingrese un su primer numero");
segundoNumeroPedido = prompt(" ingrese su segundo numero");

if( primerNumeroPedido == segundoNumeroPedido)
  {
     alert (primerNumeroPedido + segundoNumeroPedido);

  }
  else
    {
      if (primerNumeroPedido > segundoNumeroPedido)
      {
        primerNumeroPedido = parseInt(primerNumeroPedido);
        segundoNumeroPedido = parseInt(segundoNumeroPedido);
        alert(primerNumeroPedido - segundoNumeroPedido);
      }
      else
       {
        primerNumeroPedido = parseInt(primerNumeroPedido);
        segundoNumeroPedido = parseInt(segundoNumeroPedido);
        alert(primerNumeroPedido + segundoNumeroPedido);
        }
    }

}
