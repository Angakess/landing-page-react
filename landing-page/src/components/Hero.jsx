import img1 from "../assets/hero.png"

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full transition-opacity duration-1000 opacity-100">
        <img
          className="object-cover w-full h-full"
          src={img1}
        ></img>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white sapce-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Bienvenido a Digiano Asesores
            </h1>
            <p className="text-xl">Asegurando tranquilidad</p>
          </div>
        </div>
      </div>
    </section>
  );
}
