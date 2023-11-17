import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { User, Leaf, Home, Heart } from "lucide-react";
import { ROUTER_CONFIG } from "../config/constants";

export function Header() {
  const style = "border-b-2 border-secondary hover:border-primary";
  const styleActive = "border-b-2 border-primary";

  return (
    <header className="flex px-24 justify-between h-32">
      <div className="flex gap-2 text-3xl items-center font-bold">
        <Leaf className="text-primary" size={30} strokeWidth={3} />
        <h1>
          Gu<span className="text-primary">Traveller</span>
        </h1>
      </div>
      <nav className="flex gap-8 items-center">
        <NavLink
          className={({ isActive }) => (isActive ? styleActive : style)}
          to={ROUTER_CONFIG.HOME}
        >
          <span className="flex flex-col items-center">
            <Home size={20} strokeWidth={2} className="text-primary" />
            Hospedagens
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styleActive : style)}
          to={ROUTER_CONFIG.ABOUT}
        >
          <span className="flex flex-col items-center">
            <Home size={20} strokeWidth={2} className="text-primary" />
            Quem Somos
          </span>
        </NavLink>
      </nav>
      <div className="flex items-center gap-11">
        <NavLink
          className={({ isActive }) => (isActive ? styleActive : style)}
          to={ROUTER_CONFIG.MY_FAVORITE}
        >
          <span className="flex items-center gap-2">
            <Heart size={20} className="text-primary" fill="#16a34a" />
            Meus Favoritos
          </span>
        </NavLink>
        <Button variant="outline" className="flex gap-2">
          <div className="p-1 bg-primary rounded-full">
            <User size={20} className="text-secondary" />
          </div>
          Iniciar Sessão
        </Button>
      </div>
    </header>
  );
}
