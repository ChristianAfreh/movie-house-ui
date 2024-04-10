import React from 'react';
import ActorItem from './ActorItem';


interface Actor {
    name: string,
    rating: number,
    imageUrl: string
  }
  
  interface ActorListProps {
    listTitle: string;
    actors: Actor[];
  }
  

const ActorList: React.FC<ActorListProps> = ({listTitle,actors})  => {
  return (
    <>
      <h1 className="mt-4 mx-4 text-xl font-bold">{listTitle}</h1>

      <div className="flex justify-evenly max-w-32 mx-1 gap-2">

        {
          actors.map((actor: Actor, index: number) => <ActorItem key={index} name={actor.name} rating={actor.rating} src={actor.imageUrl} />)
        }

      </div>
    </>
  )
}

export default ActorList;