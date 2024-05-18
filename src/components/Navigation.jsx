import { FaUserAlt } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { PiBoxArrowDownBold } from "react-icons/pi";
import { BsTools } from "react-icons/bs";
import { CiImport } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function Navigation() {
  return (
    <div>
      <aside>
        <div className="mx-10">
          <button className="py-4 px-3  text-xl  rounded-lg flex items-center text-black bg-sky-300">
            <h1 className="text-3xl px-2">+</h1>
            <p> Create Contect</p>
          </button>
          <button className="py-4 px-3   rounded-lg flex items-center">
            <FaUserAlt className="text-xl" />
            <p className="mx-1 px-2 text-lg">Contects</p>
          </button>
          <button className="py-4 px-3   rounded-lg flex items-center">
            <FaClockRotateLeft className="text-xl" />
            <p className="mx-1 px-2 text-lg">Frequent</p>
          </button>
          <button className="py-4 px-3   rounded-lg flex items-center">
            <PiBoxArrowDownBold className="text-xl" />
            <p className="mx-1 px-2 text-lg">Other Contects</p>
            <p>
              <IoMdInformationCircleOutline />
            </p>
          </button>
        </div>
        <div className="mx-10">
          <h6>Fix & manage</h6>
          <button className="py-4 px-3  rounded-lg flex items-center">
            <BsTools className="text-xl" />
            <p className="mx-1 px-2 text-lg">Merge & fix</p>
          </button>
          <button className="py-4 px-3   rounded-lg flex items-center">
            <CiImport className="text-xl" />
            <p className="mx-1 px-2 text-lg">Import</p>
          </button>
          <button className="py-4 px-3   rounded-lg flex items-center">
            <RiDeleteBin6Line className="text-xl" />
            <p className="mx-1 px-2 text-lg">Trans</p>
          </button>
        </div>
        <div className="mx-10">
          <h6>
            Labels <button>+</button>
          </h6>
        </div>
      </aside>
    </div>
  );
}
