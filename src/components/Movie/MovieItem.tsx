import { BsStarHalf } from "react-icons/bs"

interface PropItems {
  title: string,
  rating?: string,
  src: string
}

export default function MovieItem({ title, rating, src }: PropItems) {
  return (
    <>
      <div className="flex flex-col flex-none justify-center items-center shadow-l rounded-lg px-2 py-1 mx-1 my-4 hover:shadow-2xl hover:cursor-pointer
       ">
        <div>
          <img className="rounded-lg pb-2 object-contain hover:scale-105 ease-in-out duration-300" src={src} alt={title} width={180} />
        </div>
        <div className="max-w-8">
          <h3 className="font-bold truncate">{title}</h3>
        </div>
        <div className="flex justify-center items-baseline gap-1 text-base py-2"><span>{rating}</span> <span className="text-amber-500"><BsStarHalf /></span></div>
      </div>
    </>
  )
}
