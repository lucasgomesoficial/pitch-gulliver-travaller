import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components";

const linkImg =
  "https://media.staticontent.com/media/pictures/877a98c9-8d64-4f03-a7c7-f9567dec7d11/316x311?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1";

export function CardAccommodation() {
  const navigate = useNavigate();

  return (
    <div className="flex rounded-2xl gap-8 bg-background">
      <div className="basis-1/3">
        <img
          className="h-full w-full rounded-2xl"
          src={linkImg}
          alt="Image da piscina"
        />
      </div>
      <div className="basis-3/5 flex flex-col py-8 border-r-[0.1rem]">
        <h3 className="text-2xl font-bold">Dan Inn Planalto São Paulo</h3>
        <p className="font-light text-xs">
          São Paulo, Brasil. A 1,18 km do centro
        </p>
        <div className="flex">
          {Array.from({ length: 3 }, (_, index) => (
            <Star key={index} className="text-background" fill="#ffa500" />
          ))}
        </div>
      </div>
      <div className="basis-3/5 flex flex-col py-8 justify-between">
        <div>
          <p className="font-light text-xs line-through">R$ 6.120</p>
          <p className="text-2xl font-bold">
            <span className="font-light text-base">R$</span> 5.520
          </p>
          <p className="font-semibold text-xs">ou 24x 230,00</p>
          <p className="font-light text-xs">Impostos inclusos</p>
        </div>
        <div>
          <Button
            className="text-lg p-6 rounded-3xl"
            onClick={() => navigate(`/hospedagem/${5}`)}
          >
            Ver detalhe
          </Button>
        </div>
      </div>
    </div>
  );
}
