import { CardAccommodation } from "./components/cardAccommodation";
import { Search } from "./components/search";

export function AccommodationsList() {
  return (
    <section className="px-[6%] py-5 grid grid-cols-5 bg-secondary gap-5">
      <Search />
      <div className="col-span-4">
        <div></div>
        <div className="flex flex-col gap-5">
          <CardAccommodation />
          <CardAccommodation />
          <CardAccommodation />
          <CardAccommodation />
          <CardAccommodation />
          <CardAccommodation />
          <CardAccommodation />
        </div>
      </div>
    </section>
  );
}
