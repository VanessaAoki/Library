import Book from './book.js';
import BookList from './booklist.js';

export default class Storage {
  static saveLibrary(myLibrary) {
    localStorage.setItem('BookList', JSON.stringify(myLibrary));
  }

  static getLibrary() {
    if (localStorage.getItem('BookList') == null ) {
      noBooks();
    } else {
      const myLibrary = Object.assign(new BookList(), JSON.parse(localStorage.getItem('BookList')))
      return BookList
    }
  }

  static saveBook(book) {
    const oldLibrary = this.getLibrary();
    oldLibrary.addBook(book);
    this.saveLibrary(oldLibrary);
  }

  static deleteBook() {
    const oldLibrary = this.getLibrary();
    oldLibrary.removeBook(book);
    this.saveLibrary(oldLibrary);
  }
}