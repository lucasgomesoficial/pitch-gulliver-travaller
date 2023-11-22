import { FavAccommodation } from "./components/favAccommodation";
import { MotivationCards } from "./components/motivationCards";
import { Search } from "./components/search";

export function Home() {
  return (
    <section>
      <Search />
      <div className="flex flex-col items-center py-20 gap-7">
        <h3 className="text-5xl font-bold w-[40%] text-center leading-[4.3rem] 2xl:w-[45%]">
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
      <FavAccommodation />
      <MotivationCards />
    </section>
  );
}
