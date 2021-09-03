function findAccountById(accounts, id) {
  let result = accounts.find((account) => account["id"] === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ? -1 : 1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let accountId = account.id;
  let counter = 0;
  for (let book in books){
    for (let i = 0; i < books[book].borrows.length; i++){
      if (books[book].borrows[i].id === accountId){
        counter++;
      }
    }
  }
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  let accountId = account.id;
  let possessedBooks = [];
  for (let book in books){
    if (books[book].borrows[0].id === accountId){
      if(books[book].borrows[0].returned === false){
        possessedBooks.push(books[book]);
        possessedBooks[(possessedBooks.length - 1)].author = {
          id: possessedBooks[(possessedBooks.length - 1)].authorId,
          name: {
            first: authors.find((author) => author.id === possessedBooks[(possessedBooks.length - 1)].authorId).name.first,
            last: authors.find((author) => author.id === possessedBooks[(possessedBooks.length - 1)].authorId).name.last,
          }
        }
      }
    }
  }
  return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
