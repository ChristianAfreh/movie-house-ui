
import MovieItem from "./MovieItem";


interface Movie {
  title: string,
  vote_average?: number,
  poster_path: string
}

interface MovieListProps {
  listTitle: string;
  movies: Movie[];
}



const MovieList: React.FC<MovieListProps> = ({ listTitle, movies })  => {
    
  return (
    <>
      <h1 className="mt-4 mx-4 text-xl font-bold">{listTitle}</h1>

      <div className="flex justify-start max-w-32 mx-1 gap-2 overflow-x-auto">


        {
          movies.map((movie: Movie, index: number) => <MovieItem key={index} title={movie.title} rating={movie.vote_average?.toFixed(1)} src={'https://image.tmdb.org/t/p/original'+movie.poster_path} />)
        }


      </div>
    </>
  );

      }
export default MovieList;
