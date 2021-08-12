import Book from './book.js';
import storage from './storage.js';

export default class BookList {
  constructor() {
    this.list = [];
  }

  addBook() {
    this.list.push(book);
  }

  removeBook() {
    this.list.splice(id, 1);
    return this.list;
  }

  displayList() {
    return this.list;
  }
}