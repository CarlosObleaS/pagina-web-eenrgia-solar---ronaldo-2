export default function Historia() {
  return (
    <>
      {/* Banner superior con gradiente */}
      <section className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nuestra Historia
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Más de 15 años liderando la revolución de la energía solar
          </p>
        </div>
      </section>

      {/* Sección introductoria con imagen grande */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Transformando el futuro energético
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Fundada en 2010, Enersol nació con una visión clara: hacer que la energía solar sea accesible para todos. Comenzamos como un pequeño equipo de ingenieros apasionados por las energías renovables, y hoy somos líderes en soluciones solares integrales.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Nuestro compromiso con la sostenibilidad va más allá de instalar paneles solares. Creamos en educar a nuestros clientes, en usar tecnología de vanguardia, y en construir un futuro donde la energía limpia sea la norma, no la excepción.
              </p>
              <p className="text-xl font-semibold text-green-700">
                Con más de 5,000 instalaciones completadas y 150 MW de capacidad instalada, hemos ayudado a miles de familias y empresas a reducir su huella de carbono mientras ahorran millones en costos energéticos.
              </p>
            </div>
            <div>
              <img
                src="/images/historia-equipo.jpg"
                alt="Equipo Enersol trabajando en paneles solares"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
 {/* Sección Trayectoria (timeline) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Nuestra Trayectoria
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Línea vertical del timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600 hidden md:block"></div>

            {/* Item 2010 */}
            <div className="relative mb-16 md:mb-24 flex flex-col md:flex-row items-center md:justify-between">
              <div className="w-full md:w-5/12 text-center md:text-right pr-0 md:pr-12">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-3xl font-bold text-green-600 mb-4">2010</h3>
                  <p className="text-xl font-semibold text-gray-900">Fundación de Enersol</p>
                </div>
              </div>
              <div className="hidden md:block w-12 h-12 bg-green-600 rounded-full border-4 border-white z-10"></div>
              <div className="w-full md:w-5/12"></div>
            </div>

            {/* Item 2015 */}
            <div className="relative mb-16 md:mb-24 flex flex-col md:flex-row-reverse items-center md:justify-between">
              <div className="w-full md:w-5/12 text-center md:text-left pl-0 md:pl-12">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-3xl font-bold text-green-600 mb-4">2015</h3>
                  <p className="text-xl font-semibold text-gray-900">1,000 instalaciones completadas</p>
                </div>
              </div>
              <div className="hidden md:block w-12 h-12 bg-green-600 rounded-full border-4 border-white z-10"></div>
              <div className="w-full md:w-5/12"></div>
            </div>

            {/* Item 2020 */}
            <div className="relative mb-16 md:mb-24 flex flex-col md:flex-row items-center md:justify-between">
              <div className="w-full md:w-5/12 text-center md:text-right pr-0 md:pr-12">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-3xl font-bold text-green-600 mb-4">2020</h3>
                  <p className="text-xl font-semibold text-gray-900">Expansión nacional</p>
                </div>
              </div>
              <div className="hidden md:block w-12 h-12 bg-green-600 rounded-full border-4 border-white z-10"></div>
              <div className="w-full md:w-5/12"></div>
            </div>

            {/* Item 2023 */}
            <div className="relative mb-16 md:mb-24 flex flex-col md:flex-row-reverse items-center md:justify-between">
              <div className="w-full md:w-5/12 text-center md:text-left pl-0 md:pl-12">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-3xl font-bold text-green-600 mb-4">2023</h3>
                  <p className="text-xl font-semibold text-gray-900">5,000+ clientes satisfechos</p>
                </div>
              </div>
              <div className="hidden md:block w-12 h-12 bg-green-600 rounded-full border-4 border-white z-10"></div>
              <div className="w-full md:w-5/12"></div>
            </div>

            {/* Item 2026 */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-between">
              <div className="w-full md:w-5/12 text-center md:text-right pr-0 md:pr-12">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-3xl font-bold text-green-600 mb-4">2026</h3>
                  <p className="text-xl font-semibold text-gray-900">Líderes en innovación solar</p>
                </div>
              </div>
              <div className="hidden md:block w-12 h-12 bg-green-600 rounded-full border-4 border-white z-10"></div>
              <div className="w-full md:w-5/12"></div>
            </div>
          </div>
        </div>
      </section>
     
      {/* Sección Nuestros Valores */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nuestros Valores
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            Los pilares que guían cada una de nuestras decisiones
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="text-7xl mb-6 text-green-600">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Misión</h3>
              <p className="text-gray-700">
                Democratizar el acceso a la energía solar y acelerar la transición hacia un futuro 100% renovable.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="text-7xl mb-6 text-green-600">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Compromiso</h3>
              <p className="text-gray-700">
                Cada instalación es un paso hacia un planeta más limpio. Estamos comprometidos con la sostenibilidad real.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="text-7xl mb-6 text-green-600">👥</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Equipo</h3>
              <p className="text-gray-700">
                Profesionales certificados con más de 15 años de experiencia en energías renovables.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="text-7xl mb-6 text-green-600">🏆</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Excelencia</h3>
              <p className="text-gray-700">
                Calidad superior en cada proyecto. Certificaciones internacionales y tecnología de punta.
              </p>
            </div>
          </div>
        </div>
      </section>
 {/* Sección Nuestro Equipo */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            Profesionales apasionados por la energía renovable
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/equipo-1.jpg"
                alt="Miembro del equipo Enersol"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/equipo-2.jpg"
                alt="Miembro del equipo Enersol"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/equipo-3.jpg"
                alt="Miembro del equipo Enersol"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/equipo-4.jpg"
                alt="Miembro del equipo Enersol"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}