import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({ id, year, title, summary, poster, genres}){
    return <div className="movie">
        <Link to={{
            pathname:"/movie-detail"
            ,state:{
                id
                ,year
                ,title
                ,summary
                ,poster
                ,genres
            }
        }}><img src={poster} alt={title} title={title}></img></Link>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="genres">{genres == null? "": genres.map((genre, idx) => (
                <li key={idx} className="genres_genre">{genre}</li>
            ))}</ul>
            <p className="movie_summary">{summary.slice(0,180)} ... </p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired
    ,title: PropTypes.string.isRequired
    ,summary: PropTypes.string.isRequired
    ,poster: PropTypes.string.isRequired
    ,year: PropTypes.number.isRequired
    ,genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie