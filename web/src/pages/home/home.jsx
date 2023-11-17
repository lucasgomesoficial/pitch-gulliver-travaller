import { Card } from "../../components";
import { Search } from "./components/search";

export function Home() {
  const linkImg =
    "https://media.staticontent.com/media/pictures/877a98c9-8d64-4f03-a7c7-f9567dec7d11/316x311?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1";
  return (
    <section>
      <Search />
      <div className="flex flex-col items-center py-20 gap-7">
        <h3 className="text-5xl font-bold w-[45%] text-center leading-[4.3rem]">
          Viva a experiência de uma estadia que{" "}
          <span className="bg-primary text-secondary p-2 rounded-2xl">
            abraça o futuro!
          </span>
        </h3>
        <p className="font-medium w-[42%] text-center">
          Descubra o luxo da hospedagem sustentável, onde cada descanso é uma
          celebração do meio ambiente e do seu bem-estar. Faça parte da mudança
          enquanto relaxa com consciência.
        </p>
      </div>
      <div className="px-36 text-xl font-bold flex flex-col gap-5">
        <h3 className="ml-6">Os mais buscados</h3>
        <div className="grid grid-cols-2 gap-5">
          <Card
            img={linkImg}
            altImage="Image da piscina"
            city="Rio de Janeiro"
            title="Grand Mercure Rio de Janeiro Copacabana"
          />
          <Card
            img={linkImg}
            altImage="Image da piscina"
            city="São Paulo"
            title="Grand Mercure São Paulo das contas"
          />
          <Card
            img={linkImg}
            altImage="Image da piscina"
            city="Máceio"
            title="Grand Mercure Máceio do nordeste"
          />
          <Card
            img={linkImg}
            altImage="Image da piscina"
            city="Sergipe"
            title="Grand Mercure Sergipe da silva"
          />
        </div>
      </div>
    </section>
  );
}
