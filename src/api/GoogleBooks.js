import axios from "axios";

const GBooks = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
});

const getBooksByTerm = (SearchTerm, setBooks, page_number, setTotalPages) => {
  GBooks.get( '/volumes/',{
    params: {
      q: SearchTerm,
      key: "AIzaSyDx5kOz0r6kX3vfZiC49Tc2_d78M5aTxeE",
      maxResults: 20
    },
  }).then((response) => {
    console.log(response.data);
    setBooks(response.data.items);
    //setTotalPages(response.data.total_pages);
  });
};

const getBooksDetails = (bookID, setCurrentBook) => {
  GBooks.get("book/" + bookID, {
    params: {
      api_key: "AIzaSyDx5kOz0r6kX3vfZiC49Tc2_d78M5aTxeE",
    },
  }).then((response) => {
    console.log(response.data);
    setCurrentBook(response.data);
  });
};

export { getBooksByTerm, getBooksDetails };
