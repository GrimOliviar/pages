var main = document.querySelector(".main");
var arr = [];
var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");
var fourth = document.querySelector(".fourth");
var fourth = document.querySelector(".fourth");
var cardsPage = 10;

fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  .then((x) => {
    return x.json();
  })
  .then((data) => {
    arr = data;
    displayCards(1);
  });

function displayCard(card) {
  var tmp = `
    <div class="card">
      <img src="${card.image_link}" alt="">
      <h2>${card.name}</h2>
      <h2>${card.price}$</h2>
    </div>
  `;
  main.innerHTML += tmp;
}

function displayCards(page) {
  main.innerHTML = "";

  var start = (page - 1) * cardsPage;
  var end = start + cardsPage;

  for (var i = start; i < end && i < arr.length; i++) {
    displayCard(arr[i]);
  }
}

first.addEventListener("click", function () {
  displayCards(1);
});

second.addEventListener("click", function () {
  displayCards(2);
});

third.addEventListener("click", function () {
  displayCards(3);
});

fourth.addEventListener("click", function () {
  displayCards(4);
});
