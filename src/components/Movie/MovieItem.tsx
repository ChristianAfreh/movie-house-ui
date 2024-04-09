import { BsStarHalf } from "react-icons/bs"

interface PropItems {
  title: string,
  rating?: number,
  src: string
}

export default function MovieItem({ title, rating, src }: PropItems) {
  return (
    <>
      <div className="flex flex-col justify-center text-center shadow-l rounded-lg px-2 py-1 mx-1 my-4 hover:shadow-2xl hover:cursor-pointer
       ">
        <div>
          <img className="rounded-lg pb-2 object-contain" src={src} alt={title} width={480} height={480} />
        </div>
        <div className="max-w-32">
          <h3 className="font-bold text-ellipsis overflow-hidden">{title}</h3>
        </div>
        <div className="flex justify-center items-baseline gap-1 text-base py-2"><span>{rating}</span> <span className="text-amber-500"><BsStarHalf /></span></div>
      </div>
    </>
  )
}
