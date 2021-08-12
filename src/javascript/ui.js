import Book from './book.js';
import BookList from './booklist.js';
import Storage from './storage.js';

const bookLibrary = document.querySelector('.library-container')

export default class UI {
  noBooks() {
    const emptyLibrary = `<p>You don't have any books yet</p>`
    bookLibrary.innerHTML += emptyLibrary;
  }
}