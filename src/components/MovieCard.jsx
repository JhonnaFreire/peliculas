import "/src/components/styles/MovieCard.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className="movie__card">
      <Link to={'/movies/' + movie.id} >
        <img
          className="movie__image"
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
        />
      </Link>
        <div className="titles">{movie.title}</div>
    </li>
  );
}
