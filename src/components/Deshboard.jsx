import { MdLocalPrintshop } from "react-icons/md";
import { BiExport } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import SideBar from "./SideBar";

export default function Deshboard() {
  return (
    <>
      <div className="w-screen h-screen flex mt-3 ">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="w-4/5">
          <h2 className="text-2xl ">Frequently contacted</h2>
          <form action="">
            <table>
              <thead className="w-100">
                <th className="w-1/5 text-start">Name</th>
                <th className="w-1/5 text-start ">Email</th>
                <th className="w-1/5 text-start  ">Phone number</th>
                <th className="w-1/5 text-start ">Job title & company</th>
                <th
                  className="p-3 text-lg  hover:bg-gray-200 hover:rounded-full"
                  title="Print"
                >
                  <MdLocalPrintshop />
                </th>
                <th
                  className="p-3 text-lg hover:bg-gray-200 hover:rounded-full"
                  title="Export"
                >
                  <BiExport />
                </th>
                <th
                  className="p-3 text-lg hover:bg-gray-200 hover:rounded-full"
                  title="List setting"
                >
                  <BsThreeDotsVertical />
                </th>
                <hr />
              </thead>
              <tbody></tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}
