export default function maquinaEscribir(encabezado, subtitulo){
   let $encabezado =  document.querySelector('.encabezado')
   let $subtitulo =  document.querySelector('.subtitulo')
   let nombre = 'Jesús Hernández';
   let especialidad = 'Programador Front-End';
   //console.log(String(nombre).split(''))

   let arrayEncabezado = nombre.split("");
   let arraySubtitulo = especialidad.split("");
   console.log(arrayEncabezado);

   let i = 0;
   let j = 0;

   let printEcabezado = setInterval(() => {
     $encabezado.innerHTML += arrayEncabezado[i];
     i++;
     if (i === arrayEncabezado.length) {
       clearInterval(printEcabezado);

       let printSubtitulo = setInterval(() => {
         $subtitulo.innerHTML += arraySubtitulo[j];
         j++;
         if (j === arraySubtitulo.length) {
           clearInterval(printSubtitulo);
         }
       }, 200); 

     }
   }, 300); 



}
