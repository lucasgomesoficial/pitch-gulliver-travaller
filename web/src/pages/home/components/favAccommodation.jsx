import { Card } from "../../../components";

const linkImg =
  "https://media.staticontent.com/media/pictures/877a98c9-8d64-4f03-a7c7-f9567dec7d11/316x311?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1";

export function FavAccommodation() {
  return (
    <div className="px-[6%] py-16 text-xl font-bold flex flex-col gap-5 bg-secondary">
      <h3 className="ml-14">Os mais buscados</h3>
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
  );
}
