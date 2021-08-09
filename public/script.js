let myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
  setBooks();
}

function mapBooks(callback) {
  myLibrary.map((book, index) => {
    callback && callback(book, index);
    return true;
  });
}

function deleteWithIndex(index, callback) {
  myLibrary.splice(index, 1);
  callback && callback();
  setBooks();
}

function getBooks () {
  let data = localStorage.getItem('myLibrary');
  data = JSON.parse(data);
  const result = [];
  data.map(book => {
    const {
      title,
      author
    } = book;
    result.push(new Book(title, author));
    return true;
  });
  return result;
}

function setBooks() {
  const data = JSON.stringify(myLibrary);
  localStorage.setItem('myLibrary', data);
}

myLibrary = getBooks();