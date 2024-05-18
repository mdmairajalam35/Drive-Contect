import { FaBars, FaRegQuestionCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

function Heading() {
  return (
    <div className="w-screen h-16 flex flex-row  items-center ">
      <div className="flex flex-row w-1/5">
        <button type="submit">
          <FaBars className="Bar text-2xl mx-4 " />
        </button>
        <a href="#" className="mx-2">
          Logo
        </a>
      </div>
      <div className="searchBox flex mx-auto w-2/5 py-1.5 my-1 rounded-md border-black bg-gray-100">
        <button><CiSearch className=" mx-1 py-1 px-2 text-5xl"/></button>
        <input
          type="text"
          className="w-full py-1 px-2 rounded bg-gray-100 hover:border-none"
          placeholder="Search"
        />
      </div>
      <div className="w-1/5 flex flex-row items-center justify-end text-2xl mx-1">
        <button type="submit" className="p-3 text-xl hover:bg-gray-200 hover:rounded-full hover:shadow-md" title="Help menu">
          <FaRegQuestionCircle />
        </button>
        <button className="p-3 text-xl hover:bg-gray-200 hover:rounded-full" title="Setting menu">
          <IoSettingsOutline />
        </button>
        <button className="p-3 text-xl hover:bg-gray-200 hover:rounded-full hover:title-rounded-md" title="Google Apps" >
          <TbGridDots />
        </button >
        <button type="submit" className="text-3xl p-3  hover:bg-gray-200 hover:rounded-full" title="Google Account">
          <CgProfile />
        </button>
      </div>
    </div>
  );
}

export default Heading;
