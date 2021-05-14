import hamburgerMenu from "./menu_hamburgesa.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./darkTheme.js";
import piedarPapelTijera from "./piedraPapelTijera.js"

const d = document;

//cargo todos los componenetes del htm cuando se craga para luego enviarlos por parametros a los modulos
d.addEventListener("DOMContentLoaded", (e) =>{
   
   //menu hamburgesa
   hamburgerMenu(".panel-btn", ".panel", ".menu a")
//el boton de la hamburguesa, el menu q sale y entra, los link del menu

   //btn scroll
   scrollTopButton(".scroll-top-btn ")

  darkTheme("#theme-button")

  piedarPapelTijera("rock", "paper","scissors")

})
