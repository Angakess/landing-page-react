export default function Contact() {
  return (
    <div
      id="contacto"
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16"
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contáctanos
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Déjanos tu mensaje y un asesor se comunicará contigo a la brevedad
        </p>
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
          <form className="space-y-6">
            <div>
              <label
                for="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre Completo"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200"
                required=""
                value=""
              />
            </div>
            <div>
              <label
                for="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Nombre de su empresa"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200"
                value=""
              />
            </div>
            <div>
              <label
                for="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Su correo"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200"
                required=""
                value=""
              />
            </div>
            <div>
              <label
                for="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Ingrese su mensaje"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200 resize-none"
                required=""
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[rgb(19,120,119)] to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(19,120,119)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
