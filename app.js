// Book class: Represents a Book
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
          {
            title: 'Book One',
            author: 'John Dee',
            isbn: '3434434'
          },  
          {
            title: 'Book Two',
            author: 'Jane Dee',
            isbn: '45545'
          }, 
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createdElement('tr');

        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>  
        `;

        list.appendChild(row);
    }
}
// Store Class: Handles Storage

// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // prevent actual submit
    e.preventDefault();

    // get form values
    const title = document.querySelector('#title').Value;
    const author = document.querySelector('#author').Value;
    const isbn = document.querySelector('#isbn').Value;

    // instatiate book
    const book = new Book(title, author, isbn);
});
//Event: Remove a Book







