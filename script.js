// creo i miei array con i dettagli
let foto = ["img/01.jpeg", "img/02.jpeg", "img/03.jpeg", "img/04.jpeg", "img/05.jpeg"];

let titolo = ['Veneto', 'Lombardia', 'Sardegna', 'Puglia', 'Liguria']

let testo = ['Città d\'arte, mare, montagna, terme, laghi e parchi; una bellezza dalle molteplici forme. Non a caso lo slogan turistico è "Veneto, una regione, mille volti". La montagna veneta e le Dolomiti Bellunesi offrono natura incontaminata, mentre la fascia collinare pedemontana regala splendidi borghi e famose Ville Venete.', 'La Lombardia è una regione che comprende molte e interessanti destinazioni turistiche, tra queste la più visitata è la città di Milano, che oltre ad essere il polo industriale e commerciale d\'Italia presenta molte attrazioni turistiche di alto livello come il Duomo, il Castello Sforzesco e il Teatro della Scala.', 'Ricca di montagne, boschi, pianure, territori in gran parte disabitati, corsi d\'acqua, coste rocciose e lunghe spiagge sabbiose, per la varietà dei suoi ecosistemi l\'isola è stata definita un micro-continente. ... Sono rocciose nella zona nord, mentre litorali bassi e sabbiosi si trovano nella zona sud-occidentale.', 'Terra di mare, colli e pianure sconfinate, la Puglia attira visitatori per le sue splendide coste, ma anche per le sue città d’arte e i suoi pittoreschi borghi storici, dove vivono ancora intatte antiche tradizioni religiose, le sue masserie di campagna immerse tra gli uliveti, e i suoi prodotti della terra dal sapore antico e ineguagliabile.', 'La Liguria è tra le regioni più turistiche d\'Italia e del mondo. Ci sono spiagge piccole e rocciose, come quelle nelle Cinque Terre, oppure spiagge lunghe e sabbiose come quelle ad Alassio. Tutto l\'entroterra, grazie ai borghi medievali come Triora, rappresenta un tesoro nascosto in cui ad ogni strada si ha una nuova sorpresa.']

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
      <div class="text-container">
        <h2>${titolo[i]}</h2>
        <p>${testo[i]}</p>
      </div>
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
document.querySelector('.sm-img').classList.add('active');

// creo due varianti che mi selezionino tutte le immagini con classe big-img e sm-img
let bigClass = document.getElementsByClassName('big-img-item');
let smallClass = document.getElementsByClassName('sm-img');
// creo una variabile per indicare il click delle icone
let downIcon = document.getElementById('down');
let upIcon = document.getElementById('up'); 

// creo una func per dire che se clicco icona mi deve cambiare le classi delle big-img
let x = 0;

downIcon.addEventListener('click', function() {
  if (x < bigClass.length - 1) {
    bigClass[x].classList.remove('active');
    smallClass[x].classList.remove('active');
    x ++;
    bigClass[x].classList.add('active');
    smallClass[x].classList.add('active');
  } else if (x == bigClass.length -1) {
    bigClass[x].classList.remove('active');
    smallClass[x].classList.remove('active');
    x = 0;
    bigClass[x].classList.add('active');
    smallClass[x].classList.add('active');
  }
})

upIcon.addEventListener('click', function() {
  if (x > 0) {
  bigClass[x].classList.remove('active');
  smallClass[x].classList.remove('active');
  x--;
  bigClass[x].classList.add('active');
  smallClass[x].classList.add('active');
  } else if (x == 0) {
    bigClass[x].classList.remove('active');
    smallClass[x].classList.remove('active');
    x = bigClass.length -1;
    bigClass[x].classList.add('active');
    smallClass[x].classList.add('active');
  }
})