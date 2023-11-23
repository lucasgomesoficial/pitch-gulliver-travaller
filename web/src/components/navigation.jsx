import { Home } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ROUTER_CONFIG } from "../config/constants";

export function Navigation() {
  const style = "border-b-2 border-background hover:border-primary";
  const styleActive = "border-b-2 border-primary";

  return (
    <nav className="flex gap-8 items-center">
      <NavLink
        className={({ isActive }) => (isActive ? styleActive : style)}
        to={ROUTER_CONFIG.ACCOMMODATIONS}
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
  );
}
