export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-10">
      <form className="bg-[#CFAC91] rounded-xl shadow-lg p-8 w-full max-w-xl space-y-6">
        <h2 className="text-3xl font-bold text-[#AF611E] text-center">
          Contacto
        </h2>

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-[#AF611E] font-semibold mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            placeholder="Tu nombre"
            className="p-4 rounded-md bg-white text-[#AF611E] placeholder-[#AF611E]/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#AF611E]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-[#AF611E] font-semibold mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="tucorreo@ejemplo.com"
            className="p-4 rounded-md bg-white text-[#AF611E] placeholder-[#AF611E]/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#AF611E]"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-[#AF611E] font-semibold mb-2"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            className="p-4 rounded-md bg-white text-[#AF611E] placeholder-[#AF611E]/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#AF611E]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-[#AF611E] text-white font-semibold hover:bg-[#BF9A7C] hover:text-[#AF611E] hover:ring-2 hover:ring-[#AF611E] transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}
