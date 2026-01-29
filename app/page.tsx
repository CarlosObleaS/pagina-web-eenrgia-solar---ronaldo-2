export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509395596868-d797a0ec437a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }} // Imagen placeholder de paneles
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay oscuro */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <span className="inline-block bg-green-600/80 text-white px-4 py-2 rounded-full mb-6">
            Líderes en energía solar
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Energía limpia para un <span className="text-green-400">futuro sostenible</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10">
            Transforma tu hogar o negocio con energía solar. Ahorra dinero mientras cuidas el planeta.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-lg text-xl font-semibold">
              Conoce nuestros proyectos →
            </button>
            <button className="bg-white text-green-800 hover:bg-gray-100 px-10 py-5 rounded-lg text-xl font-semibold">
              Solicita información
            </button>
          </div>
        </div>
      </section>

      {/* Sección ¿Por qué elegirnos? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Por qué elegir Enersol?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Soluciones completas de energía solar con tecnología de última generación
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">↓</div> {/* Icono placeholder */}
              <h3 className="text-2xl font-bold mb-2">Ahorro garantizado</h3>
              <p>Reduce hasta 80% en tu factura eléctrica</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🌞</div>
              <h3 className="text-2xl font-bold mb-2">Energía limpia</h3>
              <p>100% renovable y ecológica</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-2">Garantía extendida</h3>
              <p>25 años en paneles solares</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-2">Alta eficiencia</h3>
              <p>Última tecnología en conversión solar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final - gradiente */}
      <section className="py-32 bg-gradient-to-r from-blue-500 to-green-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6">Comienza tu transición a energía solar hoy</h2>
          <p className="text-2xl mb-10">
            Únete a miles de familias y empresas que ya están ahorrando mientras cuidan el medio ambiente
          </p>
          <button className="bg-white text-green-700 hover:bg-gray-100 px-12 py-6 rounded-full text-2xl font-bold">
            Solicita tu cotización gratuita →
          </button>
        </div>
      </section>
    </>
  );
}