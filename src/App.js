import React, { useState } from "react";
import { getBooksByTerm } from "./api/GoogleBooks";
import BookList from "./components/BookList";
import Dropdown from "./components/Dropdown";
import Searchbar from "./components/SearchBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} /> 
      <BookList books={books} />
      <Dropdown />
    </div>
  );
};

export default App;
