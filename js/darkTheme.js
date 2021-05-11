let dark= ['dark']
let light = ['light']
export default function darkTheme(btn){

  // Botón para activar el tema
  const themeButton = document.querySelector(btn)

  // Nombre de la clase con la que activamos el tema dark(en el body css)
  const darkTheme = 'dark-theme'

  // Tema seleccionado por el usuario anteriormente (si es que lo hizo)
  const selectedTheme = localStorage.getItem('selected-theme')

  // Preguntamos qué tema tiene el usuario en su sistema
  // true = dark
  // false = light
  const userHasDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches//prefers-color-scheme= esto lo puedo quitar si me da la gana, solo me importa el dark o el light, ese escrito es para darle logica. matchMedia=lee media querys de dimencion de pantalla y por lo q veo de colores tambien. es un booleano

  // Obtenemos el tema actual que tiene la interfaz validando la clase dark-theme
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? dark : light
/* let imagen;
  const getCurrentTheme = () =>{
    if(document.body.classList.contains(darkTheme))
   {  */
   //header
/*    imagen = document.querySelector('.contenido-header ');
imagen.style.backgroundImage = "url('../images/oscuro.jpg')"
//separador
imagen = document.querySelector('.separador ');
imagen.style.backgroundImage = "url('../images/calle.jpg')"
//footer
imagen = document.querySelector('.footer-pag');
imagen.style.backgroundImage = "url('../images/calle.jpg')" */
/* 'dark'
}else{ */
   //header
/*    imagen = document.querySelector('.contenido-header ');
   imagen.style.backgroundImage = "url('../images/cielo.jpg')"
   //separador
   imagen = document.querySelector('.separador ');
   imagen.style.backgroundImage = "url('../images/cielo.jpg')"
   //footer
   imagen = document.querySelector('.footer-pag');
   imagen.style.backgroundImage = "url('../images/cielo.jpg')" */
   //separador
//footer
  /*  'light'}} */



  // Validamos si el usuario anteriormente elegió un tema
  if (selectedTheme) {
    // Si se cumple la validación, preguntamos cuál fue el tema para saber si activamos o desactivamos el dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  } else {
    // Preguntamos si el usuario tiene tema dark en su sistema
    // En caso de que sí, lo activamos en la interfaz
    if (userHasDarkTheme) document.body.classList.add(darkTheme)//agrego la clase dartheme al body
  }

  //esto el lo primero q se ejecuta luego q se lee la variable btn
  // Activar/desactivar el tema manualmente con el botón
  themeButton.addEventListener('click', () => {
    // Agregamos o quitamos el tema dark
    document.body.classList.toggle(darkTheme)
    // Guardamos el tema actual que eligió el usuario
    localStorage.setItem('selected-theme', getCurrentTheme())
  })

}

/* imagen = document.querySelector('.contenido-header ');
imagen.style.backgroundImage = "url('../images/cielo.jpg')" */





/* const lightT={

}
const darkT={}


imagen = document.querySelector('.contenido-header ');
imagen.style.backgroundImage = "url('../images/oscuro.jpg')"
//separador
imagen = document.querySelector('.separador ');
imagen.style.backgroundImage = "url('../images/calle.jpg')"
//footer
imagen = document.querySelector('.footer-pag');
imagen.style.backgroundImage = "url('../images/calle.jpg')" */



   //header
/*    imagen = document.querySelector('.contenido-header ');
imagen.style.backgroundImage = "url('../images/oscuro.jpg')"
//separador
imagen = document.querySelector('.separador ');
imagen.style.backgroundImage = "url('../images/calle.jpg')"
//footer
imagen = document.querySelector('.footer-pag');
imagen.style.backgroundImage = "url('../images/calle.jpg')" */
/* 'dark'
}else{ */
   //header
/*    imagen = document.querySelector('.contenido-header ');
   imagen.style.backgroundImage = "url('../images/cielo.jpg')"
   //separador
   imagen = document.querySelector('.separador ');
   imagen.style.backgroundImage = "url('../images/cielo.jpg')"
   //footer
   imagen = document.querySelector('.footer-pag');
   imagen.style.backgroundImage = "url('../images/cielo.jpg')" */
   //separador
//footer
