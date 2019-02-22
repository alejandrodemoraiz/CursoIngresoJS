function mostrar()
{
//tomo la edad
var edadIngresada;
edadIngresada = edad.value;
if(edadIngresada > 17){
  alert("mayor");
}
else {
    if (edadIngresada<18 && edadIngresada >12) {
        alert("adolecente")

    }else {
      alert("niño")

  }
}




}//FIN DE LA FUNCIÓN
