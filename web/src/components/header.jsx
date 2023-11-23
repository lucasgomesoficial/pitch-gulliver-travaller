import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { MenuAuth, Modal, Navigation } from "./index";

export function Header() {
  const token = localStorage.getItem('token');

  return (
    <header className="flex px-[5%] justify-between h-32">
      <Link className="flex gap-2 text-3xl items-center font-bold">
        <Leaf className="text-primary" size={30} strokeWidth={3} />
        <h1>
          Gu<span className="text-primary">Traveller</span>
        </h1>
      </Link>
      <Navigation />
      <div className="flex items-center gap-11">
        {token ? <MenuAuth /> : <Modal />}
      </div>
    </header>
  );
}
