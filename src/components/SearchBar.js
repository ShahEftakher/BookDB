import React from "react";

const Searchbar = (props) => {
  return (
    <div className="container">
      <div className="row">
        <section className="col s6 offset-s3">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                placeholder="Search Books"
                type="text"
                onChange={props.handleChange}
              />
            </div>
          </form>
        </section>
        <section className="col s6 offset-s6">
          <button onClick={props.handleSortRelevance}>Sort by Relevance</button>
          <button onClick={props.handleSortNewest}>Sort by newest</button>
        </section>
      </div>
    </div>
  );
};

export default Searchbar;
