
import { RiMovie2Line } from 'react-icons/ri';
import styles from '../../styles/GenreItem.module.css';


interface Genre {
    name: string,
    movies: number,
    imageUrl: string,
};



export default function GenreItem({ name, movies, imageUrl }: Genre) {
    return (
        <>
            <div className="flex flex-col justify-end text-center shadow-l rounded-lg px-2 py-1 mx-1 my-4 hover:shadow-2xl hover:cursor-pointer
           ">
                <div className="">
                    <img className={styles.imgDiv} src={imageUrl} alt={name} width={240} height={240} />
                </div>
                <div className="max-w-32">
                    <h3 className="font-bold text-ellipsis overflow-hidden">{name}</h3>
                </div>
                <div className="flex justify-center gap-1 text-base py-2">
                    <span className="text-red-500"><RiMovie2Line className="text-lg" /></span>
                    Movies:<span className="font-semibold">{movies}</span>
                </div>
            </div>
        </>
    );
}
