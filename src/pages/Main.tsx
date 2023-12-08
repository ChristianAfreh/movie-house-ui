
import MovieItem from '../components/Movie/MovieItem';
import Search from '../components/Search';
import lalalandPoster from '../assets/posters/LalaLandPoster.png';
import avengersPoster from '../assets/posters/avengersPoster.jpeg';
import blackPantherPoster from '../assets/posters/blackPantherPoster.jpg';
import creedIIPoster from '../assets/posters/creedIIPoster.jpeg';
import blackWidowPoster from '../assets/posters/blackWidow.png';
import operationFortunePoster from '../assets/posters/operationFortunePoster.jpeg';
interface Movie {
  title: string,
  posterPath: string,
  rating?: number 
}

export default function Main() {
  const movies: Movie[] = [
    {
      title: "La La Land",
      posterPath: lalalandPoster,
      rating: 4.3
    },
    {
      title: "Avengers",
      posterPath: avengersPoster,
      rating: 4.5
    },
    {
      title: "Black Widow",
      posterPath: blackWidowPoster,
      rating: 3.5
    },
    {
      title: "Black Panther",
      posterPath: blackPantherPoster,
      rating: 4.5
    },
    {
      title: "Creed II",
      posterPath: creedIIPoster,
      rating: 4.5
    },
  ];

  return (
    <div className="col-span-5 pt-15  border-x-2 border-grey-600 pb-4 px-4">
      <Search />

      <h1 className="text-xl mx-8 font-bold my-4">Top Rated Movie</h1>

      <div className="h-full flex items-center justify-center"
         style={{
           backgroundImage: `linear-gradient(to bottom, rgb(187 204 219 / 30%), rgb(116 48 82 / 59%)), url(${operationFortunePoster})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center center',
           color: '#ffffff',
           width: '100%',
           height: '480px',
           borderRadius: '30px'
         }}>

      </div>

      <h1 className="text-xl mx-8 font-bold my-4">Trending Movies</h1>

      <div className="flex justify-evenly h-[20%] max-w-full mx-8 mb-4 gap-2">

        {
          movies.map((movie: Movie, index: number) => <MovieItem key={index} title={movie.title} rating={movie.rating} src={movie.posterPath}  />)
        }

      </div>

      <h1 className="text-xl mx-8 font-bold my-4">Newly Released Movies</h1>
      <div className="flex justify-evenly h-[20%] max-w-full mx-8 mb-4 gap-2">
        {
          movies.map((movie: Movie, index: number) => <MovieItem key={index} title={movie.title} rating={movie.rating} src={movie.posterPath}  />)
        }
      </div>

    </div>
  )

}