import { IoCartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

function Navbar() {
    const count = useSelector((state) => state.counter.value);
  return (
    <>
      <nav className="flex-no-wrap relative flex w-full  bg-[#FBFBFB] shadow-md shadow-black/5  flex-wrap justify-around py-4">
        <div className="container mx-auto flex w-full flex-wrap px-3 justify-around">
          <div className="flex space-x-8 ">
            <ul className="list-style-none mr-auto flex  pl-0 flex-row">
              <li className="mb-4 lg:mb-0 lg:pr-2">
                <a className="text-black lg:px-2 font-bold" href="##">
                  AceTeck
                </a>
              </li>
            </ul>
            <div>
              <div className="mr-4 flex items-center text-black  ">
                <IoCartSharp size={25} />
                <span className="absolute -mt-4 ml-2.5 rounded-full px-[1em] py-[0.15em] text-[1rem] font-bold  text-red-500">
                  {count}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
