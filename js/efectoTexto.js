export default function efectoTexto(movimiento) {
  let animado = document.querySelectorAll(".movimiento");
  console.log(animado);

  function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop; //calculo la distanciadel scroll con el top de la ventana
    console.log(scrollTop);

    //cn el for estoy estoy tomando en cuanta las 4 cajas que cree
    for (var i = 0; i < animado.length; i++) {
      let alturaAnimado = animado[i].offsetTop; //retorna la distancia del elemento actual respecto al borde superior del nodo
      console.log(animado);
      //si la distancia del top de lña caja es menor q la de la barra d scroll
      //lepuse los 300 porq sino debo esperar q el scroll llegue exactamente al top don es menor
      if (alturaAnimado - 450 < scrollTop) {
        //q aparezcan las cajas
        animado[i].style.opacity = 1;

        //le agrego el efecto de subida
        animado[i].classList.add("mostrarArriba");
      }
    }
  }

  window.addEventListener("scroll", mostrarScroll);
}
