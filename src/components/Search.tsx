import {RiSearch2Line} from 'react-icons/ri';

export default function Search() {
  return (
    <div className="ml-8 my-4">
        <form className="max-w-[17rem]">
            <div className="flex align-middle text-md gap-x-1 border-2 max-w-[16.5rem] rounded-full px-4 py-2">
                <input type="text" placeholder="Search..."  style={{outline:"none"}}/>
                <button type="submit"><span className="text-xl"><RiSearch2Line /></span></button>
            </div>
            
        </form>
    </div>
  )
}
