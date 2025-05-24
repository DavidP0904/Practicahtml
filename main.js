function incrementar() {
    //obtener el valor del contador
    let valor = document.getElementById("contador").textContent;
    //convertir el valor a un entero
    valor = parseInt(valor);
    //incrementar el valor
    valor++;
    //actualizar el valor del contador
    document.getElementById("contador").textContent = valor;
}
function decrementar() {
    //obtener el valor del contador
    let valor = document.getElementById("contador").textContent;
    //convertir el valor a un entero
    valor = parseInt(valor);
    //decrementar el valor
    valor--;
    //actualizar el valor del contador
    document.getElementById("contador").textContent = valor;
    if (valor < 0) {
        //si el valor es menor que 0, reiniciar el contador
        reiniciar();
    }
}

function reiniciar() {
    //reiniciar el valor del contador
    document.getElementById("contador").textContent = 0;
}
