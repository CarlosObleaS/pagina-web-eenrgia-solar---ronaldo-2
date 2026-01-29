export default function Contacto() {
  return (
    <>
      {/* Banner superior con gradiente */}
      <section className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contáctanos
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Estamos aquí para ayudarte a dar el paso hacia la energía solar
          </p>
        </div>
      </section>

      {/* Sección principal: Tarjetas de contacto + Formulario */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Múltiples formas de contacto
          </h2>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            Elige el canal que prefieras. Nuestro equipo está listo para responder todas tus preguntas.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
           {/* Izquierda: Tarjetas de contacto */}
<div className="space-y-8">
  {/* WhatsApp */}
  <div className="bg-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <div className="flex items-center">
      <div className="text-6xl text-green-600 mr-6">💬</div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900">WhatsApp</h3>
        <p className="text-gray-700">Respuesta inmediata</p>
      </div>
    </div>
    <a
      href="https://wa.me/+51XXXXXXXXX"  // ← Cambia por tu número real
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition whitespace-nowrap"
    >
      Chatea con nosotros →
    </a>
  </div>

  {/* Teléfono */}
  <div className="bg-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <div className="flex items-center">
      <div className="text-6xl text-blue-600 mr-6">📞</div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900">Teléfono</h3>
        <p className="text-gray-700">Llama ahora</p>
      </div>
    </div>
    <a
      href="tel:+51XXXXXXXXX"  // ← Cambia por tu número
      className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition whitespace-nowrap"
    >
      Llamar ahora →
    </a>
  </div>

  {/* Email */}
  <div className="bg-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <div className="flex items-center">
      <div className="text-6xl text-purple-600 mr-6">✉️</div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900">Email</h3>
        <p className="text-gray-700">info@enersol.pe</p>
      </div>
    </div>
    <a
      href="mailto:info@enersol.pe"
      className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition whitespace-nowrap"
    >
      Enviar email →
    </a>
  </div>

  {/* Ubicación */}
  <div className="bg-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <div className="flex items-center">
      <div className="text-6xl text-orange-600 mr-6">📍</div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900">Ubicación</h3>
        <p className="text-gray-700">Av. Sostenibilidad 123, Arequipa</p>
      </div>
    </div>
    <a
      href="https://maps.google.com/?q=Av.+Sostenibilidad+123,+Arequipa"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition whitespace-nowrap"
    >
      Ver en mapa →
    </a>
  </div>
</div>

       {/* Derecha: Formulario */}
<div className="bg-gray-50 rounded-2xl p-10 shadow-xl">
  <h3 className="text-3xl font-bold mb-8 text-gray-900">
    Envíenos un mensaje
  </h3>
  <p className="text-lg text-gray-700 mb-10">
    Completa el formulario y nos pondremos en contacto contigo
  </p>

  <form className="space-y-6">
    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Nombre completo
      </label>
      <input
        type="text"
        placeholder="Tu nombre"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 text-gray-900 placeholder:text-gray-400 text-lg"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Email
      </label>
      <input
        type="email"
        placeholder="tu@email.com"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 text-gray-900 placeholder:text-gray-400 text-lg"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Mensaje
      </label>
      <textarea
        rows={5}
        placeholder="Cuéntanos cómo podemos ayudarte..."
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 text-gray-900 placeholder:text-gray-400 text-lg resize-y min-h-[120px]"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition shadow-md"
    >
      Enviar mensaje
    </button>

    <p className="text-center text-gray-600 mt-4 text-sm">
      Nos comprometemos a responder en menos de 24 horas
    </p>
  </form>
</div>
          </div>
        </div>
      </section>

      {/* Sección Ayuda inmediata (WhatsApp flotante o destacado) */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Necesitas ayuda inmediata?
            </h2>
            <p className="text-xl mb-10">
              Chatea con nosotros por WhatsApp y recibe respuesta en minutos
            </p>
            <a
              href="https://wa.me/+51234567890"  // Cambia por número real
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition shadow-lg"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}