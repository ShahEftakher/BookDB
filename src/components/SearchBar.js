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
              <section className="col s8 offset-s9">
                <a className="waves-effect waves-light btn">
                  Sort By Relevance
                </a>
                <a className="waves-effect waves-light btn"> Sort By Newest </a>
              </section>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Searchbar;
