import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <header className="bg-white border-b">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 justify-self-start">
            <Link to="/" className="-m-1.5 p-1.5">
              <h1 className="text-xl uppercase">New york times</h1>
            </Link>
          </div>
          <ul className="flex lg:flex-1 items-center justify-end gap-8 ">
            <li>
              <Link
                to="#"
                className="block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Most Popular Lists
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <Outlet />
      </section>
      <ToastContainer />
    </>
  );
};

export default Layout;
