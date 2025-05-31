function incrementar(contador) {
  // Obtenemos el valor actual del contador
  let valor = document.getElementById('contador-' + contador).textContent;
  // Convertimos el valor a un número entero
  valor = parseInt(valor);
  // Incrementamos el valor
  valor++;
  // Actualizamos el contenido del elemento con el nuevo valor
  document.getElementById('contador-' + contador).textContent = valor;
}
function decrementar(contador) {
    //obtener el valor del contador
    let valor = document.getElementById("contador-" + contador).textContent;
    //convertir el valor a un entero
    valor = parseInt(valor);
      if (valor > 0) {
    valor--;
  }
    //actualizar el valor del contador
    document.getElementById("contador-" + contador).textContent = valor;
    
}

function reiniciar(contador) {
    //reiniciar el valor del contador
    document.getElementById("contador-" + contador).textContent = 0;
}
