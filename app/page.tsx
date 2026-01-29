export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4 md:px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Izquierda - texto */}
            <div className="space-y-6 max-w-xl">
              <span className="inline-block bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                Líderes en energía solar
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Energía limpia para un <span className="text-green-600">futuro sostenible</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Transforma tu hogar o negocio con energía solar. Ahorra dinero mientras cuidas el planeta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/servicios"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition text-base md:text-lg inline-block text-center"
                >
                  Conoce nuestros proyectos →
                </a>
                <a
                  href="/contacto"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition text-base md:text-lg inline-block text-center"
                >
                  Solicita información
                </a>
              </div>
            </div>

            {/* Derecha - imagen */}
            <div>
              <img
                src="/images/instalacion-paneles.png"
                alt="Instalación paneles solares"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección ¿Por qué elegir Enersol? - Ya con buen contraste */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            ¿Por qué elegir Enersol?
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            Soluciones completas de energía solar con tecnología de última generación
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-6xl mb-6 text-green-600">↓</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Ahorro garantizado</h3>
              <p className="text-gray-700">Reduce hasta 80% en tu factura eléctrica</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-6xl mb-6 text-green-600">🌞</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Energía limpia</h3>
              <p className="text-gray-700">100% renovable y ecológica</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-6xl mb-6 text-green-600">🛡️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Garantía extendida</h3>
              <p className="text-gray-700">25 años en paneles solares</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-6xl mb-6 text-green-600">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Alta eficiencia</h3>
              <p className="text-gray-700">Última tecnología en conversión solar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final - gradiente azul-verde */}
      <section className="py-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6">
            Comienza tu transición a energía solar hoy
          </h2>
          <p className="text-2xl mb-10 max-w-4xl mx-auto">
            Únete a miles de familias y empresas que ya están ahorrando mientras cuidan el medio ambiente
          </p>
          <a
            href="/contacto"
            className="bg-white text-green-700 hover:bg-gray-100 px-12 py-6 rounded-full text-2xl font-bold transition shadow-lg inline-block"
          >
            Solicita tu cotización gratuita →
          </a>
        </div>
      </section>
    </>
  );
}