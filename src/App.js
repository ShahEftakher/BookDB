import React, { useState } from "react";
import { getBooksByTerm } from "./api/GoogleBooks";
import BookList from "./components/BookList";
import Pagination from "./components/Pagination";
import Searchbar from "./components/SearchBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksByTerm(searchTerm, setBooks, currentIndex, setTotalItems);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const nextPage = async (index) =>{
    setCurrentIndex(index);
    await getBooksByTerm(searchTerm, setBooks, currentIndex, setTotalItems);
  }
  console.log(totalItems);

  return (
    <div>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} /> 
      <BookList books={books} />
      {totalItems>20 ? (<Pagination 
        nextPage={nextPage}
        currentIndex={currentIndex}
        totalItems={totalItems}
        />):("")}
    </div>
  );
};

export default App;
