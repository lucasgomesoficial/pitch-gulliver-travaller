import { User } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "../hooks/use-toast";
import * as C from "./index";

export function Modal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { toast } = useToast();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("token", data.email);
    toast({
      title: "Login efetuado 😊!",
      description: "Sua sessão foi iniciada.",
    });
    window.location.reload();
  };

  return (
    <C.Dialog>
      <C.DialogTrigger className="flex gap-2">
        <div className="p-1 bg-primary rounded-full">
          <User size={20} className="text-secondary" />
        </div>
        Iniciar Sessão
      </C.DialogTrigger>
      <C.DialogContent>
        <C.DialogHeader>
          <C.DialogTitle>Fazer login</C.DialogTitle>
          <C.DialogDescription>
            Inicie sessão para poder salvar as suas hospedagens favoritas.
          </C.DialogDescription>
          {errors.email && (
            <p className="text-destructive">Email é um campo obrigatório</p>
          )}
          {errors.password && (
            <p className="text-destructive">Senha é um campo obrigatório</p>
          )}
        </C.DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 items-center gap-4">
            <C.Label htmlFor="email" className="text-right">
              Email
            </C.Label>
            <C.Input
              id="email"
              type="email"
              placeholder="fulano@dominio.com"
              className="col-span-3"
              {...register("email", { required: true })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <C.Label htmlFor="password" className="text-right">
              Senha
            </C.Label>
            <C.Input
              id="password"
              placeholder="*********************"
              type="password"
              className="col-span-3"
              {...register("password", { required: true })}
            />
          </div>
          <C.DialogFooter>
            <C.Button type="submit">login</C.Button>
          </C.DialogFooter>
        </form>
        <C.Separator />
        <C.UserModal />
      </C.DialogContent>
    </C.Dialog>
  );
}
