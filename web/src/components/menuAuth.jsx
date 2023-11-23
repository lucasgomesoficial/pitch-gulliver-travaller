import { Heart, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ROUTER_CONFIG } from "../config/constants";
import { useToast } from "../hooks/use-toast";
import {
  Button,
  UserModal
} from "./index";

export function MenuAuth() {
  const style = "border-b-2 border-background hover:border-primary";
  const styleActive = "border-b-2 border-primary";

  const { toast } = useToast();

  const logoutButton = () => {
    localStorage.removeItem('token');
    toast({
      title: "Já vai 🥲?",
      description:
        "Sua sessão foi fechada.",
    });
    window.location.reload();
  }

  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? styleActive : style)}
        to={ROUTER_CONFIG.MY_FAVORITE}
      >
        <span className="flex items-center gap-2">
          <Heart size={20} className="text-primary" fill="#16a34a" />
          Meus Favoritos
        </span>
      </NavLink>
      <UserModal edit />
      <Button className="flex items-center bg-destructive hover:bg-destructive hover:opacity-80" onClick={logoutButton}>
        <LogOut className="mr-2 h-4 w-4" />
        <span>Fechar Sessão</span>
      </Button>
    </>
  );
}
