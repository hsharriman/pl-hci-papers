const Header = () => {
  return (
    <header className="">
      <section className="flex pb-5 flex-wrap justify-items-stretch">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight pl-4 md:pl-4 pt-4">
          <a className="" href="/">
            PL+HCI Papers List
          </a>
        </h1>

  
        <div className="grow self-stretch"></div>
        <section className="text-2 text-lg sm:text-lg tracking-tighter text-center leading-tight pl-4 md:pl-0 pr-1 pt-4 justify-self-right">
          <ul className="flex">
            <li className="mr-6 flex-none">
              <a className=" hover:text-gray-500" href="/">
                Page
              </a>
            </li>
            <li className="mr-6 flex-none">
              <a className=" hover:text-gray-500" href="/">
                Page
              </a>
            </li>
            <li className="mr-6">
              <a className=" hover:text-gray-500" href="/">
                Page
              </a>
            </li>
          </ul>
        </section>
      </section>
    </header>
  );
};

export default Header;
