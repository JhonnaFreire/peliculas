import popcorn from "/src/img/popcorn.png";

export function getMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : popcorn;
}
// const imageUrl = "https://image.tmdb.org/t/p/w300" + movie?.poster_path;
