import { NavLink } from "react-router";
const Header = () => {
  return (
    <header className="w-screen flex justify-between items-baseline h-16 pl-4 md:pl-4 pt-2 pb-3 pr-1 border-b-4 border-indigo-500">
      <NavLink
        to="/"
        className="text-xl md:text-4xl text-indigo-500 hover:text-indigo-400 font-bold tracking-tighter leading-tight"
      >
        PL+HCI Papers List
      </NavLink>
      <div className="justify-self-end text-2 text-lg sm:text-lg tracking-tighter text-center leading-tight ">
        <ul className="flex gap-4 md:gap-0">
          <li className="mr-6 flex-none">
            <NavLink
              to="/submit"
              className=" text-indigo-500 hover:text-indigo-400"
            >
              Submit
            </NavLink>
          </li>
          <li className="mr-6 flex-none">
            <NavLink className=" text-indigo-500 hover:text-indigo-400" to="/">
              Page
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink className=" text-indigo-500 hover:text-indigo-400" to="/">
              Page
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
