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
    <div className="h-fit bg-primary p-5 rounded-2xl text-secondary flex flex-col gap-4">
      <p className="text-xl font-semibold">Hospedagens</p>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            className={cn(
              "bg-background text-foreground placeholder:text-foreground",
              errors.search && "placeholder:text-destructive"
            )}
            placeholder={
              !errors.search ? "Destino" : "Destino é um campo obrigatório"
            }
            {...register("search", { required: true })}
          />
        </div>
        <DatePicker
          className="text-foreground"
          disabled={isChecked}
          pickDate={setValue}
        />
        <div className="flex items-center justify-center gap-2">
          <Switch
            className="data-[state=checked]:bg-foreground"
            checked={isChecked}
            onCheckedChange={() => setIsChecked(!isChecked)}
          />
          <p>Ainda não defini as datas</p>
        </div>
        <Button
          type="submit"
          variant="outline"
          className="flex gap-2 text-foreground text-xl py-6"
        >
          <IconSearch size={20} />
          Buscar
        </Button>
      </form>
    </div>
  );
}
