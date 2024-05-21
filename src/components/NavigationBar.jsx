import { FaBars, FaRegQuestionCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoIosContact } from "react-icons/io";

function NavigationBar() {
  return (
    <>
      <nav className="w-screen h-16 px-5 py-3 flex justify-between items-center bg-sky-50">
        {/* Toggle-icon and Logo Section */}
        {/* Toggle-icon-button */}
        <div className="flex justify-between items-center">
          <div>
            <button className="toggle-icon cursor-pointer">
              <FaBars className="Bar text-2xl mx-3 " />
            </button>
          </div>
          {/* Logo */}
          <div className="flex justify-between items-center">
            <button>
              <CgProfile className="text-4xl"/>
            </button>
            <a href="" className="text-2xl ms-2 text-gray-500 ">Contacts</a>
          </div>
        </div>

        {/* SearchBar and Icons */}
        <div className="px-1 py-2 w-2/5 h-12 flex justify-center items-center overflow-hidden  rounded-md  bg-gray-100 ">
          <div className="search-icon w-full flex">
            <button>
              <IoMdSearch className="text-3xl text-center font-bold mx-1" />
            </button>
            <div className="Search-bar min-w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-11/12 h-10 border-none bg-gray-100 px-2"
              />
            </div>
          </div>
        </div>

        {/* Other icon and Profile */}
        <div className=" text-2xl flex justify-center items-center gap-8 ">
          <div className="flex gap-4">
            <button>
              <FaRegQuestionCircle />
            </button>
            <button>
              <IoSettingsOutline />
            </button>
          </div>
          <div className="flex gap-4">
            <button>
              <TbGridDots />
            </button>
            <button>
              <IoIosContact className="text-4xl" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
