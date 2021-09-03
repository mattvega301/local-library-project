function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let partitionArray = [books.filter((book) => book.borrows[0].returned === false), 
                       books.filter((book) => book.borrows[0].returned === true)];
  return partitionArray;
}

function getBorrowersForBook(book, accounts) {
  let borrowers = []; 
  for (let borrow in book.borrows){
    if(borrowers.length < 10){
      borrowers.push(...accounts.filter((account) => account.id === book.borrows[borrow].id));
      borrowers[(borrowers.length - 1)].returned = book.borrows[borrow].returned;
    }
  }
  console.log(borrowers);
  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
