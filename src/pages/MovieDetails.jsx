import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "/src/data/getApi";
import { getMovieImg } from "../utils/getMovieImg";
import '/src/pages/styles/MovieDetails.css'

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGenre(data.genres[0]);
      console.log(data.genres[0]);
    });
  }, [movieId]);

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="datails__container">
      <img className="col movie__image" src={imageUrl} alt={movie.title} />
      <div className="col movie__details">
        <p className="title__details">
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong className="title__details__sub">Genre: </strong>
          {genre.name}
        </p>
        <p>
          <strong className="title__details__sub">Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
