const templateCard = document.querySelector('#template-cards').content;//el tamplate
const cards = document.getElementsByClassName('cards')[0]//el div donde pintare las cards
const fragment = new DocumentFragment()


//conectar al api
const fetchData = async ()=>{
   try {
      const res = await fetch('../menu.json');
      const data = await res.json();
      //console.log(data)
      pintarCards(data)
   } catch (error) {
      console.log(error)
   }
}
   fetchData()

   const pintarCards =(data)=>{
console.log(data)
      data.forEach((elem) => {
      const clone = document.importNode(templateCard, true)
      clone.querySelector('card')
      clone.querySelector('img').setAttribute("src",elem.thumbnailUrl)
      clone.querySelector('h2').textContent = elem.title
      clone.querySelector('p').textContent = elem.description
      if(elem.id===4){
        clone.querySelectorAll('a')[0].textContent=""
        clone.querySelectorAll('a')[1].textContent = ""
      }else{
        clone.querySelectorAll('a')[0].setAttribute("href", elem.link1)
        clone.querySelectorAll('a')[1].setAttribute("href", elem.link2)

      }

      fragment.appendChild(clone)
      })
      cards.appendChild(fragment)
   }
      




