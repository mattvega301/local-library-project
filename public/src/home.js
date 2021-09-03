function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let counter = 0;
  for (let book in books){
    if(books[book].borrows[0].returned === false){
      counter++;
    }
  }
  return counter;
}

function getMostCommonGenres(books) {
  let genresArray = [];
  let genres = books.reduce((acc, book) => {
    if(!genresArray.find((genre) => genre.name === book.genre)){
      genresArray.push({name: book.genre, count: 0});
    }
  }, []);
  
  genresArray.forEach((genre) => {
    for (let book in books){
      if (books[book].genre === genre.name){
        genre.count += 1;
      }
    }
  })
  genresArray.sort((itemA, itemB) => itemB.count - itemA.count);
  genresArray = [genresArray[0], genresArray[1], genresArray[2], genresArray[3], genresArray[5]];
  console.log(genresArray);
  return genresArray;
}

function getMostPopularBooks(books) {
  let counter = 0;
  let mostPop = books.reduce((acc, book) => {
    acc.push({name: book.title, count: book.borrows.length});
    return acc;
    }, []);
  mostPop.sort((bookA, bookB) => bookB.count - bookA.count);
  mostPop = mostPop.filter((book) => {
    if(counter >= 5){
      return false;
    }
    else {
      counter++;
      return true;
    }
    
  });
  console.log(mostPop);
  return mostPop;
}

function getMostPopularAuthors(books, authors) {
  let mostPop = []
  let topFiveCounter = 0;
  authors.forEach((author) => {
    let borrowCount = 0;
    books.forEach((book) => {
      if (book.authorId === author.id){
        borrowCount += book.borrows.length;
      }
    });
    mostPop.push({name: `${author.name.first} ${author.name.last}`, count: borrowCount})
  });
  mostPop.sort((authorA, authorB) => authorB.count - authorA.count);
  mostPop = mostPop.filter((author) => {
    if(topFiveCounter > 4){
      return false;
    }
    else{
      topFiveCounter++;
      return true;
    }
  });
  console.log(mostPop);
  return mostPop;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
