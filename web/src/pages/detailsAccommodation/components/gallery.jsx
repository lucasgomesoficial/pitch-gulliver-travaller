const imageBig =
  "https://media.staticontent.com/media/pictures/6a897956-c853-4d8b-8623-a96a00afc205/853x380?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1.5";

const linkImg =
  "https://media.staticontent.com/media/pictures/2c3c1a07-6110-4272-91b6-2fdaae7cf373/422x250?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1.5";

export function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-1">
      <div className="col-span-2">
        <img src={imageBig} alt="Image da piscina" />
      </div>
      <div className="flex flex-col col-span-1 gap-1">
        <img src={linkImg} alt="Image da piscina" />
        <div className="flex gap-1">
          <div>
            <img src={linkImg} alt="Image da piscina" />
          </div>
          <div>
            <img src={linkImg} alt="Image da piscina" />
          </div>
        </div>
      </div>
    </div>
  );
}
