import { FaUserAlt } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { PiBoxArrowDownBold } from "react-icons/pi";
import { BsTools } from "react-icons/bs";
import { CiImport } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function SideBar() {
  return (
    <>
      <aside>
        <ul>
          <li>
            <button>+ Create contact</button>
          </li>
          <li>
            <button>Contacts</button>
          </li>
          <li>
            <button>Frequent</button>
          </li>
          <li>
            <button>Other contact</button>
          </li>
        </ul>
        
      </aside>
    </>
  );
}
