import React from "react";
import ProducerItem from "./ProducerItem";


interface Producer {
    name: string,
    imageUrl: string,
    moviesProduced: number,
    awardsReceived: number,
}

interface ProducerListPropTypes{
    listTitle: string,
    producers: Producer[],
}



const ProducerList : React.FC<ProducerListPropTypes> = ({listTitle,producers})  => {

  return (
    <>
      <h1 className="mt-4 mx-4 text-xl font-bold">{listTitle}</h1>

      <div className="flex justify-evenly max-w-32 mx-1 gap-2">

        {
          producers.map((producer: Producer, index: number) => 
          <ProducerItem key={index} name={producer.name} imageUrl={producer.imageUrl} moviesProduced={producer.moviesProduced} awardsReceived={producer.awardsReceived}
          />)
        }

      </div>
    </>
  );
}

export default ProducerList;