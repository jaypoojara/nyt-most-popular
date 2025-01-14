import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="bg-white border-b">
        <nav
          className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 justify-self-start">
            <Link to="/" className="-m-1.5 p-1.5">
              <h1 className="text-xl uppercase">New york times</h1>
            </Link>
          </div>
          <ul className="flex items-center justify-end gap-8 lg:flex-1 ">
            <li>
              <Link
                to="#"
                className="block px-3 py-2 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
              >
                Most Popular Lists
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section data-testid="outlet">
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
