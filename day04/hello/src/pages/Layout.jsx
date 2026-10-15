import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <header className="pt-2 pb-1 border-b2 border-slate-200">헤더</header>
      <main>
        <Outlet />
      </main>
      <footer className="p-2 bg-black text-white">푸터</footer>
    </>
  );
};

export default Layout;
