function renderBooks(books) {
  const bookImg = document.getElementById('book-collection');
  const eachBook = document.createElement('img');
  eachBook.src = books;
  bookImg.append(eachBook);
}

//gloabal variables
const cardContainer = document.querySelector('#card-container');

document.addEventListener('DOMContentLoaded', () => {
  //fetch books
  fetch('http://localhost:3000/books')
    .then((response) => response.json())
    // once books are fetched-render a card for each book
    .then((data) => {
      //would avoid using innerHTML if possible
      //cardContainer.innerHTML = '';
      while (cardContainer.hasChildNodes()) {
        cardContainer.firstChild.remove();
      }
      renderCard(data);
    })
    .catch((error) => console.log('Error:', error));
});

function renderCard(data) {
  data.map((book) => {
    const cardDiv = document.createElement('div');
    const cardTitle = document.createElement('p');
    const cardImg = document.createElement('img');

    cardTitle.textContent = book.title;
    cardTitle.classList.add('cardTitle');
    cardDiv.classList.add('cardDefault');
    cardDiv.setAttribute('data-genre', book.genre);
    cardImg.src = book.imgUrl;
    cardImg.classList.add('cardImg');

    cardContainer.appendChild(cardDiv);
    cardDiv.append(cardTitle, cardImg);
  });
}
// functional drop down list
let genreList = document.querySelectorAll('li a');
Array.from(genreList).forEach((genre) => {
  genre.addEventListener('click', function () {
    filterBooks(genre.id);
  });
});
function filterBooks(genre) {
  cards = cardContainer.children;
  for (let i = 0; i < cards.length; i++) {
    if (genre === 'myCollection') {
      cards[i].classList.remove('filtered');
    } else if (cards[i].getAttribute('data-genre') !== genre) {
      cards[i].classList.add('filtered');
    } else {
      cards[i].classList.remove('filtered');
    }
  }
}