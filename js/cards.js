export default function cards(cards) {
const $cards = document.getElementsByClassName(cards)[0];
const templateCard = document.querySelector('#template-cards').content;

const fragment = document.createDocumentFragment();

const fetchData = async () =>{
const res = await fetch('./js/cards.json');
const data = await res.json();
//console.log(data)
mostrarDatos(data)
}
fetchData()

function mostrarDatos(cartas) {
   cartas.forEach(el => {
      const clone = document.importNode(templateCard, true);
      clone.querySelector('.card_img').setAttribute('src', el.thumbnailUrl);
      clone.querySelector('.card_title').textContent=el.title;
      clone.querySelector('.card_description').textContent=el.description;
      clone.querySelector('.footer')
      clone.querySelector('a').setAttribute('href', el.link1 )
      clone.querySelector('a').setAttribute('href', el.link2 )

      fragment.appendChild(clone)
   });
   $cards.appendChild(fragment)
}



}//end 