// document.addEventListener('DOMContentLoaded', () => {
// fetch('http://localhost:3000/books')  
// .then(res => res.json())
// .then(data => data.forEach(renderBookCard))
// })

// const cardContainer = document.querySelector('#card-container');

// function renderBookCard(cardData) {
//     const title = document.createElement('t')
//     const author = document.createElement('a')
//     const imgUrl = document.createElement('img')
//     const btn = document.createElement('button')

//     title.textContent = cardData.t
//     author.textContent = cardData.a
//     btn.textContent = 'Buy'


//     imgUrl.src = cardData.imgUrl
// }



// //DOM Render Functions
// function renderOneBook(books){
//     // Build Book
//     let card = document.createElement('li')
//     card.className = "card"
// }


// fetch("db.json")
//   .then(response => response.json())
//   .then(books => {
//     console.log(books)
//   })


//   //Initial Render
//   // Get Data and Render Books to the DOM
// function create(){
//     booksData.forEach(books => renderOneBook(books))  
// }


// // const selfHelpBooks = books.filter




// // books.filter(book => book.genre === "self help")


const book = []

// global variables
const cardContainer = document.querySelector('#card-container');

// DOMContentLoaded fetch
function fetchBooks(){
fetch(`http://localhost:3000/books`)
  .then(res => res.json())
  .then(data => {
    cardContainer.innerHTML = '';
    renderCard(data);
  })
  .catch(error => console.error('Error:', error)); 
} 

document.addEventListener('DOMContentLoaded', fetchBooks);

















