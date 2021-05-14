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
     if (el.id === 4) {
       clone.querySelectorAll('a')[0].innerHTML = `<img  alt="" src="#"  style="margin-top: 5px; width:30px; cursor: not-allowed; "/>`
       clone.querySelectorAll('a')[1].textContent = ""
     } else {
      clone.querySelectorAll('a')[0].setAttribute('href', el.link1 )
      clone.querySelectorAll('a')[1].setAttribute('href', el.link2 )
     }
      fragment.appendChild(clone)
   });
   $cards.appendChild(fragment)
}



}//end 