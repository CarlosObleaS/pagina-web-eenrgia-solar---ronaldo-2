export default function Beneficios() {
  return (
    <>
      {/* Banner superior con gradiente */}
      <section className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Beneficios de la Energía Solar
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Descubre cómo la energía solar transforma tu vida y el planeta
          </p>
        </div>
      </section>

     {/* Sección principal de beneficios - Tarjetas encerradas en cuadros */}
<section className="py-16 md:py-24 bg-gray-50">
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      
      {/* Tarjeta 1: Ahorro Económico */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <div className="h-56 overflow-hidden">
          <img
            src="/images/beneficio-ahorro.jpg"
            alt="Ahorro económico"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <div className="flex items-center mb-6">
            <div className="text-6xl text-green-600 mr-4">$</div>
            <h3 className="text-3xl font-bold text-gray-900">Ahorro Económico</h3>
          </div>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Reduce hasta 80% tu factura eléctrica mensual. Recupera tu inversión en 5-7 años y disfruta de energía gratuita por 25+ años.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              Ahorro promedio: $1,500/año
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              ROI típico: 5-7 años
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              Vida útil: 25+ años
            </li>
          </ul>
        </div>
      </div>

      {/* Tarjeta 2: Sostenibilidad Ambiental */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <div className="h-56 overflow-hidden">
          <img
            src="/images/beneficio-ambiental.jpg"
            alt="Sostenibilidad ambiental"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <div className="flex items-center mb-6">
            <div className="text-6xl text-green-600 mr-4">🌿</div>
            <h3 className="text-3xl font-bold text-gray-900">Sostenibilidad Ambiental</h3>
          </div>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Reduce tu huella de carbono significativamente. Cada sistema solar evita toneladas de CO₂ y contribuye a un planeta más limpio.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              Reducción CO₂: 3-4 toneladas/año
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              Equivalente a plantar 100 árboles
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              Energía 100% renovable
            </li>
          </ul>
        </div>
      </div>

      {/* Tarjeta 3: Independencia Energética */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <div className="h-56 overflow-hidden">
          <img
            src="/images/beneficio-independencia.jpg"
            alt="Independencia energética"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <div className="flex items-center mb-6">
            <div className="text-6xl text-green-600 mr-4">⚡</div>
            <h3 className="text-3xl font-bold text-gray-900">Independencia Energética</h3>
          </div>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Libérate de los aumentos constantes en tarifas eléctricas. Genera tu propia energía y protéggete de la volatilidad del mercado.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              Protección contra alzas de tarifas
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              Autonomía energética
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              Respaldo con baterías opcional
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>
     {/* Sección Más Ventajas - Fondo ligeramente más oscuro */}
<section className="py-20 md:py-28 bg-gray-100">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
      Más Ventajas
    </h2>
    <p className="text-xl md:text-2xl text-gray-700 text-center mb-16 max-w-4xl mx-auto">
      Beneficios adicionales que hacen de la energía solar la mejor inversión
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
      {/* Tarjeta 1 */}
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-2xl transition-all duration-300 border border-gray-200">
        <div className="text-7xl mb-6 text-green-600">↑</div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          Incremento del valor de propiedad
        </h3>
        <p className="text-gray-700 text-lg">
          Propiedades con sistemas solares se valorizan hasta 4% más
        </p>
      </div>

      {/* Tarjeta 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-2xl transition-all duration-300 border border-gray-200">
        <div className="text-7xl mb-6 text-green-600">☀️</div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          Tecnología probada
        </h3>
        <p className="text-gray-700 text-lg">
          Paneles de última generación con eficiencia superior al 22%
        </p>
      </div>

      {/* Tarjeta 3 */}
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-2xl transition-all duration-300 border border-gray-200">
        <div className="text-7xl mb-6 text-green-600">🛡️</div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          Garantía extendida
        </h3>
        <p className="text-gray-700 text-lg">
          25 años en paneles y 10 años en inversores
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Impacto en Números */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Impacto en Números
          </h2>
          <p className="text-xl mb-16 opacity-90">
            El poder transformador de la energía solar
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl md:text-7xl font-bold mb-2">25+</div>
              <p className="text-lg opacity-90">Años de garantía</p>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-bold mb-2">80%</div>
              <p className="text-lg opacity-90">Ahorro energético</p>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-bold mb-2">100%</div>
              <p className="text-lg opacity-90">Energía renovable</p>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-bold mb-2">5-7</div>
              <p className="text-lg opacity-90">Años ROI</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}