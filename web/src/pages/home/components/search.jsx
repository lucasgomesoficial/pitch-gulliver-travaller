import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Search as IconSearch } from "lucide-react";

import { Button, DatePicker, Input, Switch } from "../../../components";
import { cn } from "../../../lib/utils";
import { formattedDate } from "../../../utils/formatDate";

export function Search() {
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ search, datePicker }) => {
    const dateRange = `${formattedDate(datePicker.from)} até ${formattedDate(
      datePicker.to
    )}`;

    navigate(`/hospedagens/${search}/${dateRange}`);
  };

  return (
    <div className="bg-primary h-60 px-[10%] flex justify-center items-center">
      <div className="bg-background h-44 p-6 w-full rounded-2xl text-zinc-500 flex flex-col gap-4">
        <p className="text-xl font-semibold">
          Aluguéis por temporadas: casas, apartamentos e chalés
        </p>
        <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <Input
              className={cn("bg-secondary", errors.search && "placeholder:text-destructive")}
              placeholder={!errors.search ? "Destino" : "Destino é um campo obrigatório"}
              {...register("search", { required: true })}
            />
          </div>
          <DatePicker disabled={isChecked} pickDate={setValue} />
          <Button type="submit" variant="outline" className="flex gap-2">
            <IconSearch size={20} />
            Buscar
          </Button>
        </form>
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
