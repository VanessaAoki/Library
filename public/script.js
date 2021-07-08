let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.displayBook = function () {
    console.log(name, author, pages, read)
  }
}

function addBookToLibrary() {
  // do stuff here
}
