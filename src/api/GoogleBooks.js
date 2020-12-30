import axios from "axios";

const GBooks = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

const getBooksByTerm = (SearchTerm, setBooks, start_index, setTotalItems) => {
  GBooks.get( '/',{
    params: {
      q: SearchTerm.replace(/ /g, '+'),
      key: "AIzaSyDx5kOz0r6kX3vfZiC49Tc2_d78M5aTxeE",
      maxResults: 20,
      startIndex: start_index
    },
  }).then((response) => {
    //console.log(response.data);
    setBooks(response.data.items);
    setTotalItems(response.data.totalItems);
  });
};

const getBooksDetails = (bookID, setCurrentBook) => {
  GBooks.get("/" + bookID, {
    params: {
      api_key: "AIzaSyDx5kOz0r6kX3vfZiC49Tc2_d78M5aTxeE",
    },
  }).then((response) => {
    setCurrentBook(response.data);
  });
};

export { getBooksByTerm, getBooksDetails };
