import { GiTrophyCup } from "react-icons/gi";
import { RiMovie2Line } from "react-icons/ri";

interface Producer {
    name: string,
    imageUrl: string,
    moviesProduced: number,
    awardsReceived: number,
};

export default function ProducerItem({ name, imageUrl, moviesProduced, awardsReceived }: Producer) {
    return (
        <>
            <div className="flex flex-col justify-center text-center shadow-l rounded-lg px-2 py-1 mx-1 my-4 hover:shadow-2xl hover:cursor-pointer
           ">
                <div>
                    <img className="rounded-lg pb-2 object-contain" src={imageUrl} alt={name} width={720} height={720} />
                </div>
                <div className="max-w-32">
                    <h3 className="font-bold text-ellipsis overflow-hidden">{name}</h3>
                </div>
                <div className="flex justify-center  gap-1 text-base py-2"><span className="text-red-500"><RiMovie2Line className="text-lg" /></span> Movies:<span className="font-semibold">{moviesProduced}</span></div>
                <div className="flex justify-center items-baseline gap-1 text-base py-2"><span className="text-amber-500"><GiTrophyCup className="text-lg" /></span> Awards:<span className="font-semibold">{awardsReceived}</span></div>
            </div>
        </>
    )
}
