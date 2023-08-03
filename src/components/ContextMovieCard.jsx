import { useEffect, useState } from "react";
import { get } from "/src/data/getApi";
import { MovieCard } from "./MovieCard";
import '/src/components/styles/ContextMovieCard.css'

export function ContextMovieCard() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
        setMovies(data.results)
        console.log(data)
    });
  }, []);

  return (
    <ul className="container">
        {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
    </ul>
  );
}
 