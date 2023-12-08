import { BsStarHalf } from "react-icons/bs"

interface PropItems {
  title: string,
  rating?: number,
  src: string
}

export default function MovieItem({title, rating,src} : PropItems) {
  return (
    <div className="flex flex-col justify-center text-center shadow-l rounded-lg px-4 py-2 hover:shadow-2xl hover:cursor-pointer
       ">
      <img className="rounded-lg pb-2" src={src} alt={title} width={130} height={100}/>
      <h3 className="font-bold">{title}</h3>
      <div className="flex justify-center items-baseline gap-1 text-base py-2"><span>{rating}</span> <span className="text-amber-500"><BsStarHalf /></span></div>
    </div>
  )
}
