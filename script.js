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

// do alla prima big-img la classe active
document.querySelector('.big-img-item').classList.add('active');

// creo una variante che mi selezioni tutte le immagini con classe big-img
let bigClass = document.getElementsByClassName('big-img-item');

// creo una variabile per indicare il click delle icone
let downIcon = document.getElementById('down');
let upIcon = document.getElementById('up'); 

// creo una func per dire che se clicco icona mi deve cambiare le classi delle big-img
let x = 0;
downIcon.addEventListener('click', function() {
  if (x < (bigClass.length - 1)) {
    bigClass[x].classList.remove('active');
    x ++;
    bigClass[x].classList.add('active');
  }
})


// upIcon.addEventListener('click', function() {
//   bigClass[y].classList.remove('active');
//   y ++;
//   bigClass[y].classList.add('active');
// })
