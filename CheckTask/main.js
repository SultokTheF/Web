const Book = require('./Book');
const Library = require('./Library');

const myLibrary = new Library();

const book1 = new Book('Crime and Punishment', 'Fyodor Dostoevsky', 1866);
const book2 = new Book('War and Peace', 'Leo Tolstoy', 1869);
const book3 = new Book('The Master and Margarita', 'Mikhail Bulgakov', 1967);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.rentBook('War and Peace');
myLibrary.rentBook('War and Peace');
myLibrary.returnBook('War and Peace');
myLibrary.returnBook('War and Peace');

myLibrary.displayBooks();
