import { Coffee, LogIn, LogOut, Star } from "lucide-react";
import { Button, Separator } from "../../components";
import { Gallery } from "./components/gallery";

export function DetailsAccommodation() {
  return (
    <section className="px-[6%] py-5 flex flex-col gap-16">
      <Gallery />
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Dan Inn Planalto São Paulo</h3>
          <div className="flex">
            {Array.from({ length: 3 }, (_, index) => (
              <Star key={index} className="text-background" fill="#ffa500" />
            ))}
          </div>
          <p className="font-light text-xs">
            São Paulo, Brasil. A 1,18 km do centro
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <p className="font-light text-xs line-through">R$ 6.120</p>
            <p className="text-2xl font-bold">
              <span className="font-light text-base">R$</span> 5.520
            </p>
            <p className="font-semibold text-xs">ou 24x 230,00</p>
            <p className="font-light text-xs">Impostos inclusos</p>
          </div>
          <Button className="text-lg p-6 rounded-3xl">Ver oferta</Button>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl font-bold">Conheça um pouco mais</h3>
        <p>
          Situado na região central de São Paulo, o Dan Inn Planalto São Paulo
          oferece buffet de café da manhã, 5 salas de reuniões e recepção 24h.
        </p>
        <div>
          <p>Você precisa saber:</p>
          <p>• O sinal da internet pode apresentar instabilidade.</p>
          <p>
            • Durante a alta temporada o elevador pode demorar para atender a
            quantidade de hóspedes.
          </p>
          <p>
            • Por sua localização cêntrica, é recomendável utilizar táxis para
            transitar durante a noite.
          </p>
        </div>
        <p>
          Com uma variedade de frutas, o café da manhã é servido com bolos, pães
          e frios, bem como bebidas quentes e sucos. O hotel ainda possui
          restaurante com pratos à la carte ou buffet no almoço e no jantar,
          além do Internet Bar & Café.
        </p>
        <div>
          <p>Conheça os pontos de interesse mais próximos:</p>
          <p>• A Estação da Luz está a 500 m do hotel.</p>
          <p>• A Avenida Paulista fica a 4,5 km.</p>
          <p>• O Teatro Municipal situa-se a 700 m.</p>
          <p>• O Aeroporto de Congonhas está a 30 minutos de carro do hotel.</p>
          <p>• A Rodoviária localiza-se a 4,5 km do local.</p>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl font-bold">Condições da hospedagem</h3>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">Horários</h3>
          <p className="flex gap-2">
            <LogIn strokeWidth={1} /> Horário de Check in: 14:00
          </p>
          <p className="flex gap-2">
            <LogOut strokeWidth={1} /> Horário de Check out: 12:00
          </p>
          <p className="flex gap-2">
            <Coffee strokeWidth={1} /> Café da manhã: De 06:00 às 10:00
          </p>
        </div>
      </div>
    </section>
  );
}
