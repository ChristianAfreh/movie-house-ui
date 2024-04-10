
import React from 'react'
import GenreItem from './GenreItem';


interface Genre {
    name: string,
    movies: number,
    imageUrl: string,
};

interface GenreListPropTypes{
    listTitle: string,
    genres: Genre[],
};



 const GenreList: React.FC<GenreListPropTypes> = ({listTitle,genres}) => {
  return (
    <>
      <h1 className="mt-4 mx-4 text-xl font-bold">{listTitle}</h1>

      <div className="flex flex-wrap justify-start max-w-32 mx-1 gap-2">

        {
          genres.map((genre: Genre, index: number) => 
          <GenreItem key={index} name={genre.name} imageUrl={genre.imageUrl} movies={genre.movies} />)
        }

      </div>
    </>
  )
}

export default GenreList;