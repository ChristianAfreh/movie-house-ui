
import Search from '../components/Search';
import MovieList from '../components/Movie/MovieList';

import lalalandPoster from '../assets/posters/LalaLandPoster.png';
import avengersPoster from '../assets/posters/avengersPoster.jpeg';
import blackPantherPoster from '../assets/posters/blackPantherPoster.jpg';
import creedIIPoster from '../assets/posters/creedIIPoster.jpeg';
import blackWidowPoster from '../assets/posters/blackWidow.png';
import operationFortunePoster from '../assets/posters/operationFortunePoster.jpeg';
import onTheLine from '../assets/posters/onTheLine.png';
import piratesOfTheCarribean from '../assets/posters/piratesOfTheCaribbean.png';
import tombRaider from '../assets/posters/tombRaider.png';
import sahara from '../assets/posters/sahara.png';
import inTime from '../assets/posters/inTime.png';

interface Movie {
  title: string,
  posterPath: string,
  rating?: number 
}

export default function Main() {

  const trendingMovies: Movie[] = [
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
  const newlyReleasedMovies: Movie[] = [
    {
      title: "On The Line",
      posterPath: onTheLine,
      rating: 4.2
    },
    {
      title: "Pirates of The Carribean",
      posterPath: piratesOfTheCarribean,
      rating: 4.5
    },
    {
      title: "Tomb Raider",
      posterPath: tombRaider,
      rating: 3.9
    },
    {
      title: "Sahara",
      posterPath: sahara,
      rating: 4.1
    },
    {
      title: "In Time",
      posterPath: inTime,
      rating: 4.8
    },
  ];

  return (
    <div className="col-span-5 pt-15 border-x-2 border-grey-600 pb-4 px-4">
      <Search />

      <h1 className="text-xl mx-8 font-bold my-4">Top Rated Movie</h1>

      <div className="h-full flex items-center justify-center mb-8"
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

      <MovieList listTitle="Newly Released Movies" movies={newlyReleasedMovies} />

      <MovieList listTitle="Trending Movies" movies={trendingMovies} />

      

    </div>
  )

}