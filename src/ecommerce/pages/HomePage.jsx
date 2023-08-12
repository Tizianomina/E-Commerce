import { GaleryProductsPage } from "./GaleryProductsPage";

export const HomePage = () => {
  return (
    <section className="mt-[120px] w-full">
        <h1 className="text-center text-2xl font-semibold mb-1">
          Todos los productos a tan solo un click.
        </h1>
        <div className="flex justify-center">
        {/* <NavLink to="/galeryProducts" className="inline-block px-2 py-1 rounded text-green-900 font-semibold">
          Ir a los productos
        </NavLink> */}
      </div>
      <div className=" mt-3 m-auto w-[80%] h-[450px] grid gap-4 grid-cols-4 grid-rows-2 ">
        <div className="rounded-xl overflow-hidden">
          <img
            className="w-full h-full rounded-xl object-cover"
            src="/src/assets/Landing/Nike.jpg"
            alt=""
          />
        </div>
        <div className="row-span-2 rounded-xl overflow-hidden">
          <img
            className="w-full h-full rounded-xl object-cover"
            src="/src/assets/Landing/Auriculares.jpg"
            alt=""
          />
        </div>
        <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
          <img
            className="w-full h-full rounded-xl object-cover"
            src="/src/assets/Landing/Livin.jpg"
            alt=""
          />
        </div>
        <div className="col-start-1 rounded-xl overflow-hidden">
          <img
            className="w-full h-full rounded-xl object-cover"
            src="/src/assets/Landing/Reloj.jpg"
            alt=""
          />
        </div>
      </div>
      <GaleryProductsPage />
    </section>
  );
};
