import { NavLink } from "react-router";
const Header = () => {
  return (
    <header className="w-screen flex justify-between md:items-baseline h-10 pl-2 md:h-16 md:pl-4 pt-2 md:pb-3 pr-1 md:border-b-4 md:border-indigo-500 bg-indigo-500 md:bg-white">
      <NavLink
        to="/"
        className="text-xl md:text-4xl text-white md:text-indigo-500 hover:text-indigo-400 font-bold tracking-tighter leading-tight"
      >
        PL+HCI Papers List
      </NavLink>
      <div className="justify-self-end text-lg md:text-lg tracking-tighter items-center leading-tight">
        <div className="flex md:gap-4 gap-0 justify-end">
          <div className="mr-6 self-end md:self-baseline">
            <NavLink
              to="/submit"
              className="text-white md:text-indigo-500 hover:text-indigo-400"
            >
              Submit
            </NavLink>
          </div>
          <div className="md:mr-6 hidden md:inline">
            <a
              className="text-white md:text-indigo-500 hover:text-indigo-400"
              href="https://github.com/hsharriman/pl-hci-papers/issues"
            >
              Submit via Github Issue
            </a>
          </div>
          <div className="mr-2 md:mr-6 self-start md:relative md:w-8 md:h-12">
            <a
              className="md:absolute fill-white stroke-white md:fill-indigo-500 md:stroke-indigo-500 md:-top-2 md:h-12 md:w-12"
              href="https://github.com/hsharriman/pl-hci-papers"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="w-auto h-6 md:h-8 fill-white stroke-white md:fill-indigo-500 md:stroke-indigo-500"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
