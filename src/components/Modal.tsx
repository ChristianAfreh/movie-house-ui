
import TextField from "./TextField";
import { FiXCircle } from "react-icons/fi";


interface PropTypes{
    open : boolean,
    onClose: any,
    title: string,
    children: any,
};

const Modal = ({open, onClose, title,children}:PropTypes) => {
  return (
    <>
      {open ? (
        <>
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"></div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none" style={{width:"34rem"}}>
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h4 className="text-xl font-semibold">{title}</h4>
                  <button
                    className="bg-transparent border-0 float-right"
                    onClick={onClose}
                  >
                    <span className="opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                      <FiXCircle />
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                    {children}
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-red-500 active:bg-red-700 font-bold px-3 py-2 rounded text-sm outline-none shadow-sm focus:outline-none mr-1 mb-1 hover: hover:shadow-xl"
                    type="button"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-green-500 active:bg-green-700 font-bold text-sm px-3 py-2 rounded shadow-sm hover:shadow-xl outline-none focus:outline-none mx-1 mb-1"
                    type="button"
                    onClick={onClose}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;

