import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <header>
        <h1>New york times most popular by jay poojara</h1>
      </header>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
