import { useState } from "react";
import { Button, DatePicker, Input, Switch } from "../../../components";
import { Search as IconSearch } from "lucide-react";

export function Search() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="bg-primary h-60 px-48 flex justify-center items-center">
      <div className="bg-secondary h-44 p-6 w-full rounded-2xl text-zinc-500 flex flex-col gap-4">
        <p className="text-xl font-semibold">
          Aluguéis por temporadas: casas, apartamentos e chalés
        </p>
        <div className="flex gap-2">
          <Input placeholder="Destino" />
          <DatePicker disabled={isChecked} />
          <Button variant="outline" className="flex gap-2">
            <IconSearch size={20} />
            Buscar
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Switch
            checked={isChecked}
            onCheckedChange={() => setIsChecked(!isChecked)}
          />
          <p>Ainda não defini as datas</p>
        </div>
      </div>
    </div>
  );
}
