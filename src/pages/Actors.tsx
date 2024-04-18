

import leonardoDiCaprio from '../assets/casts/leonardoDiCaprio.jpeg';
import angelinaJolie from '../assets/casts/angelinaJolie.jpg';
import vinDiesel from '../assets/casts/vinDiesel.png';
import emmaWatson from '../assets/casts/emmaWatson.jpg';
import denzelWashington from '../assets/casts/denzelWashington.jpg';
import eddieMurphy from '../assets/casts/eddieMurphy.jpg';
import bruceWills from '../assets/casts/bruceWills.jpg';
import emmaStone from '../assets/casts/emmaStone.jpg';
import emmaRoberts from '../assets/casts/emmaRoberts.jpg';
import jennyLawrence from '../assets/casts/jennyLawrence.jpg';


import ActorList from '../components/Actor/ActorList';
import Search from '../components/Search';
import AddActorForm from '../components/Actor/AddActorForm';


interface Actor {
    name: string,
    imageUrl: string,
    rating: number
};


export default function Actors() {

    const topCasts: Actor[] = [
        {
            name: "Leonardo DiCaprio",
            imageUrl: leonardoDiCaprio,
            rating: 4.9
        },
        {
            name: "Angelina Jolie",
            imageUrl: angelinaJolie,
            rating: 4.7
        },
        {
            name: "Vin Diesel",
            imageUrl: vinDiesel,
            rating: 4.5
        },
        {
            name: "Emma Watson",
            imageUrl: emmaWatson,
            rating: 4.3
        },
        {
            name: "Denzel Washington",
            imageUrl: denzelWashington,
            rating: 4.1
        },
    ];

    const topMaleActors: Actor[] = [
        {
            name: "Leonardo DiCaprio",
            imageUrl: leonardoDiCaprio,
            rating: 4.9
        },
        {
            name: "Vin Diesel",
            imageUrl: vinDiesel,
            rating: 4.7
        },
        {
            name: "Denzel Washington",
            imageUrl: denzelWashington,
            rating: 4.5
        },
        {
            name: "Eddie Murphy",
            imageUrl: eddieMurphy,
            rating: 4.3
        },
        {
            name: "Bruce Wills",
            imageUrl: bruceWills,
            rating: 4.0
        }
    ];

    const topFemaleActors: Actor[] = [
        {
            name: "Angelina Jolie",
            imageUrl: angelinaJolie,
            rating: 4.8
        },
        {
            name: "Emma Watson",
            imageUrl: emmaWatson,
            rating: 4.5
        },
        {
            name: "Emma Stone",
            imageUrl: emmaStone,
            rating: 4.3
        },
        {
            name: "Jennifer Lawrence",
            imageUrl: jennyLawrence,
            rating: 4.1
        },
        {
            name: "Emma Roberts",
            imageUrl: emmaRoberts,
            rating: 3.9
        }
    ];

    return (
        <div className="col-span-5 pt-15 border-x-2 border-grey-600 pb-4 px-4">
            <Search />
            <div className="mt-8">
                <div className="text-right mr-1">
                    <AddActorForm />
                </div>
                <div className="mt-5">
                    <ActorList listTitle="Top Cast" actors={topCasts} />

                    <ActorList listTitle="Top Male Actors" actors={topMaleActors} />

                    <ActorList listTitle="Top Female Actors" actors={topFemaleActors} />
                </div>
            </div>

        </div>
    )
}




