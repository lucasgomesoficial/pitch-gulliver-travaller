import { Outlet } from "react-router-dom";
import { Footer, Header, Toaster } from "../components/index";

export function Layout() {
  return (
    <>
      <Header />
      <Toaster />
      <Outlet />
      <Footer />
    </>
  );
}
