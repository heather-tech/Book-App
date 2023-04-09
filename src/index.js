function renderBooks(books) {
  const bookImg = document.getElementById('book-collection');
  const eachBook = document.createElement('img');
  eachBook.src = books;
  bookImg.append(eachBook);
}


const cardContainer = document.querySelector('#card-container');

document.addEventListener('DOMContentLoaded', () => {
  
  fetch('http://localhost:3000/books')
    .then((response) => response.json())
    .then((data) => {
      
      while (cardContainer.hasChildNodes()) {
        cardContainer.firstChild.remove();
      }
      renderCard(data);
    })
});


function renderCard(data) {

  data.forEach((book) => {
    const cardDiv = document.createElement('div');
    const cardTitle = document.createElement('p');
    const cardImg = document.createElement('img');
    const cardAuthor = document.createElement('aut');

    cardTitle.textContent = book.title;
    cardTitle.classList.add('cardTitle');
    cardDiv.classList.add('cardDefault');
    cardDiv.setAttribute('data-genre', book.genre);
    cardImg.src = book.imgUrl;
    cardImg.classList.add('cardImg');
    cardAuthor.textContent = book.author;
    cardAuthor.classList.add('cardAuthor');

    cardContainer.appendChild(cardDiv);
    cardDiv.append(cardImg, cardTitle, cardAuthor);

    cardDiv.addEventListener("mouseover", () => cardDiv.setAttribute("style", "background-color: #7b68ee"));
    cardDiv.addEventListener("mouseout", () => cardDiv.setAttribute("style", "background-color: #FFFFF"));
  });
}

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
    } else {(cards[i].getAttribute('data-genre') !== genre) 
      cards[i].classList.add('filtered');
    } 
  }
}
