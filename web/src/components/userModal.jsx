import { useForm } from "react-hook-form";
import { useToast } from "../hooks/use-toast";
import * as C from "./index";

export function UserModal({ edit }) {
  const defaultValues = {
    name: "Lucas Gomes Santos",
    username: "Lucas Gomes",
    image: "https://github.com/lucasgomesoficial.png",
    email: "lucasgomesbr@gmail.com",
    password: "",
    confirmedPassword: "",
  };

  const api = edit;
  const { toast } = useToast();

  const { register, handleSubmit } = useForm({
    defaultValues: api && defaultValues,
  });

  const onSubmit = (data) => {
    if (!api) {
      if (data.password === data.confirmedPassword) {
        console.log(data);
        toast({
          title: "Cadastro efetuado 😎!",
          description:
            "Já pode curtir suas hospedagens favoritas 💚, faça seu login!",
        });
      } else {
        toast({
          title: "Cadastro não efetuado!!",
          description:
            "Não foi possível confirmar as senhas, pois não coincidem.",
        });
      }
    } else {
      toast({
        title: "Dados atualizados!",
        description:
          "Seu perfil foi atualizado com sucesso.",
      });
    }
  };

  return (
    <C.Sheet>
      <C.SheetTrigger className="flex" asChild>
        {edit ? (
          <C.Avatar className="cursor-pointer">
            <C.AvatarImage
              src="https://github.com/lucasgomesoficial.png"
              alt="image perfil"
            />
            <C.AvatarFallback>LG</C.AvatarFallback>
          </C.Avatar>
        ) : (
          <span className="cursor-pointer hover:underline decoration-primary">
            Caso não tenha acesso, cadastre-se.
          </span>
        )}
      </C.SheetTrigger>
      <C.SheetContent>
        <C.SheetHeader>
          <C.SheetTitle>{edit ? "Editar perfil" : "Cadastrar"}</C.SheetTitle>
          <C.SheetDescription>
            {edit ? "Atualize seus dados." : "Preencha o formulário."}
          </C.SheetDescription>
        </C.SheetHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 items-center gap-4">
            <C.Label htmlFor="name" className="text-right">
              Nome completo
            </C.Label>
            <C.Input
              id="name"
              {...register("name", { required: true })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <C.Label htmlFor="username" className="text-right">
              Username
            </C.Label>
            <C.Input
              id="username"
              {...register("username", { required: true })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <C.Label htmlFor="image" className="text-right">
              Imagem de perfil
            </C.Label>
            <C.Input
              id="image"
              {...register("image", { required: true })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <C.Label htmlFor="email" className="text-right">
              Email
            </C.Label>
            <C.Input
              id="email"
              type="email"
              {...register("email", { required: true })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <C.Label htmlFor="password" className="text-right">
              Senha
            </C.Label>
            <C.Input
              id="password"
              type="password"
              {...register("password", !api && { required: true })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <C.Label htmlFor="confirmedPassword" className="text-right">
              Confirmar senha
            </C.Label>
            <C.Input
              id="confirmedPassword"
              type="password"
              {...register("confirmedPassword", !api && { required: true })}
              className="col-span-3"
            />
          </div>
          <C.SheetFooter>
            <C.SheetClose asChild>
              <C.Button type="submit">{edit ? "Editar" : "Cadastrar"}</C.Button>
            </C.SheetClose>
          </C.SheetFooter>
        </form>
      </C.SheetContent>
    </C.Sheet>
  );
}
