
import Search from '../components/Search';

export default function Main() {
  return (
    <div className="col-span-5  pt-15  border-x-2 border-grey-600 pb-4">
      <Search />

      <div className="max-w-full mx-8 mb-4 shadow-sm rounded-lg px-6 py-4
      h-2/4 bg-gradient-to-r from-slate-200 to-slate-300">

      </div>
      <h1 className="mx-8 font-bold my-4">Subsection Title</h1>
      <div className="max-w-full mx-8 mb-4 shadow-sm rounded-lg px-6 py-4
      h-1/4 bg-gradient-to-r from-slate-200 to-slate-300">

      </div>
      <div className="max-w-full mx-8 mb-4 shadow-sm rounded-lg px-6 py-4
      h-1/4 bg-gradient-to-r from-slate-200 to-slate-300">

      </div>
    </div>
  )
}
