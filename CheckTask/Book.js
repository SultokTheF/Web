class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.isAvailable = true;
    }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getYear() {
    return this.year;
  }

  setAvailable(status) {
    this.isAvailable = status;
  }
}

module.exports = Book;
