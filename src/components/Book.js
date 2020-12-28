import react from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
    console.log(props.data.volumeInfo.imageLinks);
  const ImageURL = props.data.volumeInfo.imageLinks.thumbnail;
  console.log(props.data.volumeInfo.imageLinks == undefined);
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          {ImageURL == null ? (
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: "100", height: "200" }}
            />
          ) : (
            <img
              src={ImageURL}
              alt=""
              style={{ width: "100", height: "200" }}
            />
          )}

          <span className="card-title">{props.data.volumeInfo.title}</span>
        </div>
        <div className="card-content">{props.data.volumeInfo.authors}</div>
        <div className="card-action">
          <Link
            to={{
              pathname: "/Book/" + props.data.id,
              Book_id: props.data.id,
            }}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;