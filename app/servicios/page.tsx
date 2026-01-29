export default function Servicios() {
  return (
    <>
      {/* Hero / Banner superior con gradiente */}
      <section className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Soluciones completas de energía solar para cada necesidad
          </p>
        </div>
      </section>

      {/* Sección de tarjetas de servicios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Servicio 1: Instalación Completa */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/images/servicio-instalacion.png"
                alt="Instalación completa de paneles solares"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="text-5xl mb-4 text-green-600">🔧</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Instalación Completa
                </h3>
                <p className="text-gray-700 mb-6">
                  Diseño e instalación de sistemas solares personalizados para hogares y empresas. Incluye análisis previo, montaje profesional y puesta en marcha.
                </p>
                <a
                  href="#"
                  className="text-green-600 font-semibold hover:text-green-800 transition flex items-center"
                >
                  Más información →
                </a>
              </div>
            </div>

            {/* Servicio 2: Auditoría Energética */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/images/servicio-auditoria.png"
                alt="Auditoría energética"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="text-5xl mb-4 text-green-600">🔍</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Auditoría Energética
                </h3>
                <p className="text-gray-700 mb-6">
                  Evaluación completa de tu consumo energético actual. Te ayudamos a identificar oportunidades de ahorro y el sistema solar ideal para ti.
                </p>
                <a
                  href="#"
                  className="text-green-600 font-semibold hover:text-green-800 transition flex items-center"
                >
                  Más información →
                </a>
              </div>
            </div>

            {/* Servicio 3: Mantenimiento */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/images/servicio-mantenimiento.png"
                alt="Mantenimiento de sistemas solares"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="text-5xl mb-4 text-green-600">🛠️</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Mantenimiento
                </h3>
                <p className="text-gray-700 mb-6">
                  Servicio de mantenimiento preventivo y correctivo. Aseguramos el máximo rendimiento de tu sistema solar durante toda su vida útil.
                </p>
                <a
                  href="#"
                  className="text-green-600 font-semibold hover:text-green-800 transition flex items-center"
                >
                  Más información →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Proyectos Realizados (como en tus capturas) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            Proyectos Realizados
          </h2>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            Casos de éxito que demuestran nuestro compromiso con la excelencia
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Proyecto 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/images/proyecto-techcorp.png"
                alt="Planta Industrial TechCorp"
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 text-2xl mr-2">★</span>
                  <h3 className="text-2xl font-bold text-gray-900">Planta Industrial TechCorp</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Sistema solar de 500 kW para planta de manufactura. ROI estimado en 5 años con ahorro anual de $120,000.
                </p>
                <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600">
                  "La inversión más inteligente que hemos hecho. Reducción dramática en costos operativos."
                  <br />
                  — Roberto Sánchez, Director de Operaciones
                </blockquote>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/images/proyecto-greenvalley.png"
                alt="Complejo Residencial Green Valley"
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 text-2xl mr-2">★</span>
                  <h3 className="text-2xl font-bold text-gray-900">Complejo Residencial Green Valley</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Instalación de 250 kW en conjunto residencial de 50 viviendas. Reducción del 75% en costos energéticos.
                </p>
                <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600">
                  "Excelente servicio, instalación rápida y profesional. Ya estamos viendo ahorros significativos."
                  <br />
                  — Ana Martínez, Administradora
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}