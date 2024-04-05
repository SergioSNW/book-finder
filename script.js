// Click handler for search button
const captureSearchValue = () => {
  let searchString = document.getElementById("search-bar").value;
  return searchString;
};

const filterBooks = (searchString, listOfBooks) => {
  listOfBooks = books;
  let filteredList = [];
  for (let i = 0; i < listOfBooks.length; i++) {
    let bookArr = flattenObjectValuesIntoArray(listOfBooks);
    const lowerArr = bookArr.map((book) => {
      if (Array.isArray(book)) {
        return book.map((item) => item.toLowerCase());
      } else if (typeof book === "string") {
        return book.toLowerCase();
      }
      return book;
    });
    if (lowerArr[i].includes(searchString.toLowerCase())) {
      filteredList.push(listOfBooks[i]);
    }
  }
  return filteredList;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
const structureBooksAsHtml = (filteredBookList) => {
  return filteredBookList.map((book) => structureBookAsHtml(book));
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  let searchValue = captureSearchValue().toLowerCase();
  let filteredBooks = filterBooks(searchValue, books);
  console.log(filteredBooks);
  let finalList = structureBooksAsHtml(filteredBooks);
  renderBooksToDom(finalList);
};

// Grab search button from the DOM
const searchBtn = document.getElementById("search-btn");
// Attach an event listener to the search button
searchBtn.addEventListener("click", () => {
  searchBtnClickHandler(books);
});
