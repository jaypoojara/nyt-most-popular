import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <header>
        <h1>New york times most popular list</h1>
      </header>
      <section>
        <Outlet />
      </section>
      <ToastContainer />
    </>
  );
};

export default Layout;
