import React, { useState, useEffect } from "react";
import { getBooksDetails } from "./../api/GoogleBooks";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    getBooksDetails(props.location.book_id, setCurrentBook);
  }, []);

  const ImageURL =
    "https://image.tmdb.org/t/p/w500/" + currentBook.poster_path;
  return (
    <div>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              {currentBook.poster_path != null ? (
                <img
                  src={ImageURL}
                  alt=""
                  style={{ width: "300", height: "600" }}
                />
              ) : (
                <img
                  src="https://picsum.photos/300/600"
                  alt=""
                  style={{ width: "300", height: "600" }}
                />
              )}
              <span className="card-title">{currentBook.original_title}</span>
            </div>
            <div className="card-content">
              <p>{currentBook.overview}</p>
            </div>
            <div className="card-action">
              <Link to="/">Go to search page!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
