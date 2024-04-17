
import { IoAddCircleOutline } from "react-icons/io5";
import Modal from "./Modal";
import { ReactNode, useState } from "react";

interface PropTypes{
    title: string,
    children : ReactNode,
};

 const AddButton : React.FC<PropTypes> = ({title,children})  => {
    const [open, setOpen] = useState(false);


    return (
        <div className="mb-10 mx-5">
            <button className=" bg-green-500 rounded-xl text-[1.10rem]" onClick={() => setOpen(true)}>
                <div className="text-white flex flex-row px-3 py-2">
                    <IoAddCircleOutline className="mr-1 text-[26px]" />
                    <span>Add</span>
                </div>
            </button>

            <Modal open={open}  onClose={()=> setOpen(false)} title={title} children={children} />
        </div>
    );
}

export default AddButton;