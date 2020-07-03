import React from 'react'
import './Movie.css'

// https://image.tmdb.org/t/p/w220_and_h330_face/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg
const imageUrl = "https://image.tmdb.org/t/p/w220_and_h330_face"
const asset = "../../media/"

const Movie = (props) => (
    <div 
        className="Movie"
        onClick={() => {
            props.onMovieSelect(props.isSelected)
        }}>
        {props.isSelected && 
            <div className="overlay">
                <img src={require("../../media/correct.png")} />
            </div>
        }   
        <div className="hero__wrapper">
            <img 
                className="hero"
                src={imageUrl + props.data.poster_path}/>
        </div>
        <div className="bottom">
            <label className="title">
                {props.data.title || props.data.name}
            </label>
        </div>
    </div>
)

export default Movie;