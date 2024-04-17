import Search from "../components/Search";

import action from "../assets/genres/action.jpg";
import adventure from "../assets/genres/adventure.jpg";
import comedy from "../assets/genres/comedy.jpg";
import drama from "../assets/genres/drama.jpg";
import fantasy from "../assets/genres/fantasy.jpg";
import horror from "../assets/genres/horror.jpg";
import musical from "../assets/genres/musical.jpg";
import romance from "../assets/genres/romance.jpg";
import sciFi from "../assets/genres/sciFi.jpg";
import thriller from "../assets/genres/thriller.jpg";
import GenreList from "../components/Genre/GenreList";
import AddButton from "../components/AddButton";
import AddGenreForm from "../components/Genre/AddGenreForm";

interface Genre {
    name: string,
    movies: number,
    imageUrl: string,
};




export default function Genres() {

    const genres: Genre[] = [
        {
            name: "Action",
            movies: 20,
            imageUrl: action
        },
        {
            name: "Adventure",
            movies: 30,
            imageUrl: adventure
        },

        {
            name: "Drama",
            movies: 28,
            imageUrl: drama
        },
        {
            name: "Comedy",
            movies: 25,
            imageUrl: comedy
        },
        {
            name: "Fantasy",
            movies: 15,
            imageUrl: fantasy
        },
        {
            name: "Horror",
            movies: 10,
            imageUrl: horror
        },
        {
            name: "Musical",
            movies: 17,
            imageUrl: musical
        },
        {
            name: "Romance",
            movies: 24,
            imageUrl: romance
        },
        {
            name: "Science Fiction",
            movies: 35,
            imageUrl: sciFi
        },
        {
            name: "Thriller",
            movies: 32,
            imageUrl: thriller
        },
    ];
    return (
        <div className="col-span-5 pt-15 border-x-2 border-grey-600 pb-4 px-4">
            <Search />
            <div className="mt-8">
                <div className="text-right mr-1">
                    <AddGenreForm />
                </div>
                <div className="mt-5">
                <GenreList listTitle="Genres" genres={genres} />
                </div>
            </div>

        </div>
    )
}

