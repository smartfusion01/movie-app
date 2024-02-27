import React from "react";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="d-flex justify-content-start m-3 poster">
                    <img src={movie.Poster} alt="Movie"></img>
                </div>
            ))}
        </>
    )
}

export default MovieList