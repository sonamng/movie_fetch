import React, { useState } from "react";

function FormAddMovies({ onAddMovie }) {
  const [showForm, setShowForm] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");

  const handleAddButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Date.now(), 
      title: movieTitle,
      description: movieDescription,
    };

    onAddMovie(newMovie);

    setMovieTitle("");
    setMovieDescription("");
    setShowForm(false);
  };

  return (
    <>

      {showForm ? (
        <form className="formdiv" onSubmit={handleFormSubmit}>
          <h3>Add a new movie</h3>
          <div>
            <label htmlFor="movieTitle">Title:</label>
            <input
              type="text"
              id="movieTitle"
              value={movieTitle}
              onChange={(e) => setMovieTitle(e.target.value)}
              required
            />
          </div>
          <br/>
          <div>
            <label htmlFor="movieDescription">Description:</label>
            <textarea
              id="movieDescription"
              value={movieDescription}
              onChange={(e) => setMovieDescription(e.target.value)}
              required
            />
          </div>
          <button class="addmoviebutton" type="submit">ADD MOVIES</button>
        </form>
      ) : (
        <div className="addmoviebutton" onClick={handleAddButtonClick}>
          Add new movie
        </div>
      )}
      

    </>
  );
}

export default FormAddMovies;

