import MovieItem from "./MovieItem";


interface Movie {
  title: string,
  rating?: number,
  posterPath: string
}

interface MovieListProps {
  listTitle: string;
  movies: Movie[];
}



const MovieList: React.FC<MovieListProps> = ({ listTitle, movies })  => {
  return (
    <>
      <h1 className="mt-4 mx-4 text-xl font-bold">{listTitle}</h1>

      <div className="flex justify-evenly max-w-32 mx-1 gap-2">

        {
          movies.map((movie: Movie, index: number) => <MovieItem key={index} title={movie.title} rating={movie.rating} src={movie.posterPath} />)
        }

      </div>
    </>
  );

      }
export default MovieList;
