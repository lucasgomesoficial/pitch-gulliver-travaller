import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/index";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
