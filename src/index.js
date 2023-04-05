function renderBooks(books){
  const bookImg = document.getElementById("book-collection")
  const eachBook = document.createElement("img")
  eachBook.src = books
  bookImg.append(eachBook)
}

//gloabal variables
const cardContainer = document.querySelector('#card-container');


document.addEventListener('DOMContentLoaded', () => {

  //fetch books
  fetch('http://localhost:3000/books')
    .then(response => response.json())
    // once books are fetched-render a card for each book
   .then(data => {
    cardContainer.innerHTML = '';
    renderCard(data)
  })
  .catch(error => console.log('Error:', error));
});


function renderCard(data){
  data.results.map(book => {
    const cardDiv = document.createElement('div');
    const cardTitle = document.createElement('p');
    const cardImg = document.createElement('img');

    cardTitle.textContent = book.title;
    cardDiv.classList.add('cardDefault');
    cardImg.classList.add('cardImg');

    cardContainer.appendChild(cardDiv);
    cardDiv.append(cardTitle, cardImg);
  });
}  
// functional drop down list 