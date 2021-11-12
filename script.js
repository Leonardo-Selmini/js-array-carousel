// creo il mio array con le foto
let foto = ["img/01.jpeg", "img/02.jpeg", "img/03.jpeg", "img/04.jpeg", "img/05.jpeg"];

// creo un ciclo per inserire le foto nel documento
let smallImg = '';
let bigImg = '';

for (i = 0; i < foto.length; i++) {
  smallImg +=
  ` <div class="sm-img-item">
      <img class="sm-img" src="${foto[i]}" alt="${foto[i]}">    
    </div>`;
  bigImg +=
  ` <div class="big-img-item">
      <img class="big-img" src="${foto[i]}" alt="${foto[i]}">
    </div>`;
};

// controllo che funzioni
console.log(smallImg);
console.log(bigImg);

// stampo i miei div nel container del dom
document.getElementById('sm-img-container').innerHTML += smallImg;
document.getElementById('big-img-container').innerHTML = bigImg;

// aggiungo la classe active alla prima immagine
document.querySelector('.big-img').classList.add('active');


