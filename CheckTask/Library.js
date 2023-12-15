class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  deleteBook(title) {
    this.books = this.books.filter(book => book.getTitle() !== title);
  }

  searchBook(title) {
    return this.books.find(book => book.getTitle() === title);
  }

  rentBook(title) {
    const book = this.searchBook(title);

    if (book && book.isAvailable) {
      book.setAvailable(false);
      console.log(`Book "${title}" has been rented.\n`);
    } else {
      console.log(`Book "${title}" is not available for rent.\n`);
    }
  }

  returnBook(title) {
    const book = this.searchBook(title);

    if (book && !book.isAvailable) {
      book.setAvailable(true);
      console.log(`Book "${title}" has been returned.\n`);
    } else {
      console.log(`Invalid return request for book "${title}".\n`);
    }
  }

  displayBooks() {
    console.log('List of Books in the Library: \n');

    this.books.forEach(book => {
      console.log(`${book.getTitle()} by ${book.getAuthor()} (${book.getYear()}) - ${book.isAvailable ? 'Available' : 'Borrowed'}`);
    });
  }
}

module.exports = Library;
