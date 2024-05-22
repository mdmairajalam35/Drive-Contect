import { FaUserAlt } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { PiBoxArrowDownBold } from "react-icons/pi";
import { BsTools } from "react-icons/bs";
import { CiImport } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

export default function SideBar() {
  return (
    <>
      <aside className="">
        <ul className="px-5 py-3 ">
          <li className="text-2xl mb-3 ">
            <button className="flex justify-center items-center px-3 py-3 rounded-xl bg-sky-200 hover:shadow-xl hover:">
              <FaPlus />
              <span className="px-1 font-serif">Create contact</span>
            </button>
          </li>
          <li className="text-lg bg-sky-200 rounded-3xl hover:rounded-3xl  hover:bg-sky-100">
            <button className="flex justify-center items-center my-2 px-4 py-2 ">
              <FaUserAlt />
              <span className="px-1 ">Contacts</span>
            </button>
          </li>
          <li className="text-lg hover:rounded-3xl hover:bg-sky-100">
            <button className="flex justify-center items-center my-2 px-4 py-2  ">
              <FaClockRotateLeft />
              <span className="px-1 ]">Frequent</span>
            </button>
          </li>
          <li className="text-lg flex hover:rounded-3xl hover:bg-sky-100">
            <button className="flex justify-between items-center my-2 px-4 py-2  ">
              <PiBoxArrowDownBold />
              <span className="px-1 me-9">Other contects</span>
            </button>
            <button className="p-2 m-2 text-2xl hover:rounded-full  hover:bg-gray-300"><IoMdInformationCircleOutline/></button>
          </li>
          <h6>Fix & manage</h6>
          <li className="text-lg hover:rounded-3xl hover:bg-sky-100">
            <button className="flex justify-center items-center my-2 px-4 py-2  ">
              <BsTools />
              <span className="px-1 ]">Merge & fix</span>
            </button>
          </li>
          <li className="text-lg hover:rounded-3xl hover:bg-sky-100">
            <button className="flex justify-center items-center my-2 px-4 py-2  ">
              <CiImport />
              <span className="px-1 ]">Improt</span>
            </button>
          </li>
          <li className="text-lg hover:rounded-3xl hover:bg-sky-100">
            <button className="flex justify-center items-center my-2 px-4 py-2 ">
              <RiDeleteBin6Line />
              <span className="px-1 ]">Trans</span>
            </button>
          </li>
          <h6 className="flex justify-between items-center">Labels
            <button className="p-2 m-2 text-md hover:rounded-full  hover:bg-gray-300"><FaPlus /></button>
          </h6>
        
          
        </ul>
      </aside>
    </>
  );
}
