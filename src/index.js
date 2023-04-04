document.addEventListener('DOMContentLoaded', () => {

  //fetch books
  fetch('http://localhost:3000/books')
    .then(response => response.json())
    // once books are fetched-render a card for each book
   .then(data => data.forEach(renderBooks))
});

function renderBooks(books){
  const bookImg = document.getElementById("book-collection")
  const eachBook = document.createElement("img")
  eachBook.src = books
  bookImg.append(eachBook)
}

// functional drop down list 

// function myCollection() {
//   let sHBooks = [
//     {
//       "title" : "The Body Keeps Score"
//     }
//   ]
// }









