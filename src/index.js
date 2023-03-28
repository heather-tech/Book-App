const BASE_URL = 'https://openlibrary.org/developers/api'
    //beginning of website 

window.addEventListener('DOMContentLoaded', () => {
    getBooks()
})

function getBooks() {
    const ul = document.getElementById('book-list')
    fetch(BASE_URL + '/search')
    .then(res => res.json())
    .then(data => {
        data.forEach(book => {
            ul.innerHTML += `
            <li>${book.name}</li>
            `
        })
    })
}

async function fetchBooks() {
    let res = await fetch(BASE_URL + '/books')
    let data = await res.json()
    return data
}