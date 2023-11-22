import { Leaf, Facebook, Instagram } from "lucide-react";
import { ROUTER_CONFIG } from "../config/constants";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-14 bg-foreground text-secondary flex flex-col items-center gap-14">
      <div className="flex justify-around w-full">
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-2 text-3xl items-center text-secondary font-bold">
            <Leaf size={30} strokeWidth={3} />
            <h1>GuTraveller</h1>
          </div>
          <div className="flex gap-4">
            <span className="p-1 bg-secondary rounded-full hover:opacity-80 hover:cursor-pointer">
              <Facebook size={20} className="text-foreground" />
            </span>
            <Instagram className="hover:opacity-80 hover:cursor-pointer" size={28} />
          </div>
        </div>
        <nav className="flex flex-col">
          <Link className="hover:opacity-80" to={ROUTER_CONFIG.HOME}>Hospedagens</Link>
          <Link className="hover:opacity-80" to={ROUTER_CONFIG.ABOUT}>Quem Somos</Link>
        </nav>
        <nav className="flex flex-col">
          <Link className="hover:opacity-80" to={ROUTER_CONFIG.HOME}>Como comprar?</Link>
          <Link className="hover:opacity-80" to={ROUTER_CONFIG.ABOUT}>Documentação Necessária</Link>
          <Link className="hover:opacity-80" to={ROUTER_CONFIG.HOME}>Alteração ou Cancelamento</Link>
          <Link className="hover:opacity-80" to={ROUTER_CONFIG.ABOUT}>Por que viajar com o Gulliver?</Link>
        </nav>
      </div>
      <div className="flex justify-evenly w-full">
        <p><span className="font-bold">Central de vendas</span> 0800 000 0000</p>
        <p><span className="font-bold">Pós-venda</span> Atendimento ao cliente</p>
      </div>
    </footer>
  );
}
