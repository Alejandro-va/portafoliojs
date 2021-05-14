const d = document;
const w = window;

export default function scrollTopButton(btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener('scroll', (e) => {

    let scrollTop = w.pageYOffset || d.documentElement.scrollTop//leeme una u otra(depende del navegador)
    if (scrollTop > 200) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
    //con ambos podia detectar la distancia del scroll con el top
    //console.log(w.pageYOffset, d.documentElement.scrollTop)
  })

  d.addEventListener('click', (e) => {
    //e.target.matches(`${btn} *`) seleccioname hasta la imagen que esta dentro del boton
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      w.scrollTo({
        behavior: 'smooth',
        top: 0,
        // left:0
      })
    }
  })

}