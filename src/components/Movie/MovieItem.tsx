import { BsStarHalf } from "react-icons/bs"

interface PropItems {
  title: string,
  rating?: number,
  src: string
}

export default function MovieItem({title, rating,src} : PropItems) {
  return (
    <div className="shadow-l hover:shadow-2xl hover:cursor-pointer rounded-lg px-8 py-1
       ">
      <img src={src} alt={title} width={130} height={100}/>
      <div className="flex gap-2 justify-between items-baseline py-1">
      <h3 className="font-bold">{title}</h3> <div className="flex items-baseline gap-0 text-base"><span>{rating}</span> <span className="text-amber-500"><BsStarHalf /></span></div>
      </div>
    </div>
  )
}
