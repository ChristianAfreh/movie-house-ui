import Search from "../components/Search";
import ProducerList from "../components/Producer/ProducerList";


import brianGrazer from "../assets/producers/brianGrazer.jpg";
import bruceCohen from "../assets/producers/bruceCohen.jpg";
import frankMarshall from "../assets/producers/frankMarshall.jpg";
import kathleenKennedy from "../assets/producers/kathleenKennedy.jpg";
import AddProducerForm from "../components/Producer/AddProducerForm";


interface Producer {
    name: string,
    imageUrl: string,
    moviesProduced: number,
    awardsReceived: number,
}

export default function Producers() {

    const topRatedProducers: Producer[] = [
        {
            name: "Brian Grazer",
            imageUrl: brianGrazer,
            moviesProduced: 18,
            awardsReceived: 12,
        },
        {
            name: "Bruce Cohen",
            imageUrl: bruceCohen,
            moviesProduced: 50,
            awardsReceived: 25,
        },
        {
            name: "Frank Marshall",
            imageUrl: frankMarshall,
            moviesProduced: 15,
            awardsReceived: 11,
        },
        {
            name: "Kathleen Kennedy",
            imageUrl: kathleenKennedy,
            moviesProduced: 40,
            awardsReceived: 15,
        },
    ];

    const mostAwardReceivedProducers: Producer[] = [
        {
            name: "Bruce Cohen",
            imageUrl: bruceCohen,
            moviesProduced: 50,
            awardsReceived: 25,
        },
        {
            name: "Kathleen Kennedy",
            imageUrl: kathleenKennedy,
            moviesProduced: 40,
            awardsReceived: 15,
        },
        {
            name: "Brian Grazer",
            imageUrl: brianGrazer,
            moviesProduced: 18,
            awardsReceived: 12,
        },
        {
            name: "Frank Marshall",
            imageUrl: frankMarshall,
            moviesProduced: 15,
            awardsReceived: 11,
        },
    ];


    return (
        <div className="col-span-5 pt-15 border-x-2 border-grey-600 pb-4 px-4">
            <Search />
            <div className="mt-8">
                <div className="text-right mr-1">
                    <AddProducerForm />
                </div>
                <div className="mt-5">
                    <ProducerList listTitle="Top Rated Producers" producers={topRatedProducers} />

                    <ProducerList listTitle="Most Awarded Producers" producers={mostAwardReceivedProducers} />
                </div>
            </div>

        </div>
    );
}


