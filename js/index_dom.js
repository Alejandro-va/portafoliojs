import cards from "./cards.js";
import piedarPapelTijera from "./piedraPapelTijera.js";
import efectoTexto from "./efectoTexto.js";
import maquinaDEscribir from "./maquinaDEscribir.js";
import darkTheme from "./darkTheme.js";
import hamburgerMenu from "./menu_hamburgesa.js";


document.addEventListener('DOMContentLoaded', (e)=>{
   cards('cards');

   piedarPapelTijera("rock", "paper","scissors");

   efectoTexto("movimiento");

   maquinaDEscribir('encabezado', 'subtitulo');

   darkTheme("#theme-button");

  //menu hamburgesa
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
})