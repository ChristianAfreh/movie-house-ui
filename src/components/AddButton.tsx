
import { IoAddCircleOutline } from "react-icons/io5";

export default function AddButton() {
    return (
        <div className="mb-10 mx-5">
            <button className=" bg-green-500 rounded-xl text-[1.10rem]" onClick={() => alert("Add button is clicked!")}>
                <div className="text-white flex flex-row px-3 py-2">
                    <IoAddCircleOutline className="mr-1 text-[26px]" />
                    <span>Add</span>
                </div>
            </button>
        </div>
    );
}
