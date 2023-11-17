export function Card({ img, altImage, city, title }) {
  return (
    <div className="h-52 flex rounded-2xl gap-8">
      <div className="basis-1/3">
        <img className="h-full w-full rounded-2xl" src={img} alt={altImage} />
      </div>
      <div className="basis-3/5 flex flex-col py-8 justify-between">
        <div>
          <h3 className="text-xl font-bold">{city}</h3>
          <p className="font-light text-base">{title}</p>
        </div>
        <p className="font-medium text-base text-primary">Ver completo {">"}</p>
      </div>
    </div>
  );
}
