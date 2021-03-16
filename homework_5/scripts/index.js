function Library(name, books, address){
    this.name = name;
    this.books = books === undefined ? [] : books;
    this.address = address;
    this.numberOfMembers = this.books.length * 15;
    this.printBooks = function(){
        this.books.forEach(book => {
            console.log(book.title);
        })
    } 
}

function Book(title, genre, libraries, authors) {
    this.title = title;
    this.genre = genre;
    this.libraries = libraries;
    this.authors = authors;
    this.addLibrary = (library => {
        this.libraries.push(library);
        console.log(library);
    }),
    this.removeLibrary = (library => {
        this.libraries.pop(library);
    })
}

function Author(fName, lName, yearOfBirth){
    this.firstName = fName;
    this.lastName = lName;
    this.yearOfBirth = yearOfBirth;
    this.books = [];
    this.currentBook = null;
    this.startBook = (book => {
        this.currentBook = book;
        this.books.push(this.currentBook);
    })
}

let library = new Library("Skopje public library", [], "Skopje");
let author = new Author("Julie", "James", "1972");
let book = new Book("About that night", "Romace", ["Skopje public library"], [author]);
let book2 = new Book("The Alchemist", "Drama", ["Skpje public library", "The British Library"], [author]);

book.addLibrary(library);
library.printBooks(book);
book.removeLibrary(library);
library.printBooks(book);
author.startBook(book);
author.startBook(book2);
console.log(author);

let newLibrary = Object.create(library);
newLibrary.addBook = function(){
    this.books.push(book);
}

newLibrary.addBook();