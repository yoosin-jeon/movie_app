import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({ id, year, title, summary, poster}){
    return <div class="movie">
        <img class="movie_poster" src={poster} alt={title} title={title}></img>
        <div class="movie_data">
            <h3 class="movie_title">{title}</h3>
            <h5 class="movie_year">{year}</h5>
            <p class="movie_summary">{summary}</p>
        </div>
    </div>
    
    
}

Movie.propTypes = {
    id: PropTypes.number.isRequired
    ,title: PropTypes.string.isRequired
    ,summary: PropTypes.string.isRequired
    ,medium_cover_image: PropTypes.string.isRequired
    ,year: PropTypes.number.isRequired
}

export default Movie