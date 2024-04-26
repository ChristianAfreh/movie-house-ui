import MovieList from "../components/Movie/MovieList";
import Search from "../components/Search";


import lalalandPoster from '../assets/posters/LalaLandPoster.png';
import avengersPoster from '../assets/posters/avengersPoster.jpeg';
import blackPantherPoster from '../assets/posters/blackPantherPoster.jpg';
import creedIIPoster from '../assets/posters/creedIIPoster.jpeg';
import blackWidowPoster from '../assets/posters/blackWidow.png';
import onTheLine from '../assets/posters/onTheLine.png';
import piratesOfTheCarribean from '../assets/posters/piratesOfTheCaribbean.png';
import tombRaider from '../assets/posters/tombRaider.png';
import sahara from '../assets/posters/sahara.png';
import inTime from '../assets/posters/inTime.png';
import AddMovieForm from "../components/Movie/AddMovieForm";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";



interface Movie {
    title: string,
    poster_path: string,
    vote_average?: number
}

export default function Movies() {

    const [popularMovies,setPopularMovies] = useState([]);
  const [topRatedMovies,setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  

    useEffect(() => {
       getPopularMovies();
       getTopRatedMovies();
       getUpcomingMovies();

    }, []);

    const baseUrl : string = 'https://api.themoviedb.org/3';

    const configOptions : AxiosRequestConfig<any> | undefined  = {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDAwNWVkZjUxYjFiYzhhZjlhOTU5YTMyMzAyYzY1OCIsInN1YiI6IjY2MmE1YmI5OGQ3N2M0MDA5YTJkYjhiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OzEt_q5wwos9i30lfK6KpltD5wR0IduMVtwCslSouC4'
      }
    };


    const getMovies = async (type: string) => {

      const response : AxiosResponse<any,any> = await axios.get(baseUrl+'/movie/'+type,configOptions);

      const responseData = response.data.results.slice(0,10);

      return responseData;
    }

    const getPopularMovies = async () => {
      const result = await getMovies('popular');
      setPopularMovies(result);
    };

    const getTopRatedMovies = async () => {
      const result = await getMovies('top_rated');
      setTopRatedMovies(result);
    }

    const getUpcomingMovies = async () => {
      const result = await getMovies('upcoming');
      setUpcomingMovies(result);
    }
    // const topRatedMovies: Movie[] = [
    //     {
    //         title: "La La Land",
    //         poster_path: lalalandPoster,
    //         vote_average: 4.3
    //     },
    //     {
    //         title: "Avengers",
    //         poster_path: avengersPoster,
    //         vote_average: 4.5
    //     },
    //     {
    //         title: "Black Widow",
    //         poster_path: blackWidowPoster,
    //         vote_average: 3.5
    //     },
    //     {
    //         title: "Black Panther",
    //         poster_path: blackPantherPoster,
    //         vote_average: 4.5
    //     },
    //     {
    //         title: "Creed II",
    //         poster_path: creedIIPoster,
    //         vote_average: 4.5
    //     },
    //     {
    //         title: "Black Panther",
    //         poster_path: blackPantherPoster,
    //         vote_average: 4.5
    //     },
    // ];
    // const newlyReleasedMovies: Movie[] = [
    //     {
    //         title: "On The Line",
    //         poster_path: onTheLine,
    //         vote_average: 4.2
    //     },
    //     {
    //         title: "Pirates of The Carribean",
    //         poster_path: piratesOfTheCarribean,
    //         vote_average: 4.5
    //     },
    //     {
    //         title: "Tomb Raider",
    //         poster_path: tombRaider,
    //         vote_average: 3.9
    //     },
    //     {
    //         title: "Sahara",
    //         poster_path: sahara,
    //         vote_average: 4.1
    //     },
    //     {
    //         title: "In Time",
    //         poster_path: inTime,
    //         vote_average: 4.8
    //     },
    // ];

    return (
        <div className="col-span-5 pt-15 border-x-2 border-grey-600 pb-4 px-4">
            <Search />
            <div className="mt-8">
                <div className="text-right mr-1">
                    <AddMovieForm />
                </div>
                <div className="mt-5">
                    <MovieList listTitle="Top Rated Movies" movies={topRatedMovies} />
                    <MovieList listTitle="Popular Movies" movies={popularMovies} />
                    <MovieList listTitle="Upcoming Movies" movies={upcomingMovies} />
                </div>

            </div>

        </div>
    )
}
