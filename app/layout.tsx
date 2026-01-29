  import type { Metadata } from "next";
  import { Inter } from "next/font/google";
  import "./globals.css";

  const inter = Inter({ subsets: ["latin"] });

  export const metadata: Metadata = {
    title: "Enersol - Energía Solar",
    description: "Soluciones de energía solar para hogares y negocios en Perú",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="es">
        <body className={inter.className}>
          {/* Header */}
          <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
    <div className="flex items-center">
      <div className="text-4xl font-extrabold text-green-600">E</div>
      <span className="ml-2 text-xl font-semibold text-gray-800">Enersol</span>
    </div>
    <nav className="hidden md:flex items-center space-x-8">
      <a href="/" className="text-gray-700 hover:text-green-600 font-medium transition">Home</a>
      <a href="/servicios" className="text-gray-700 hover:text-green-600 font-medium transition">Servicios</a>
      <a href="/beneficios" className="text-gray-700 hover:text-green-600 font-medium transition">Beneficios</a>
      <a href="/historia" className="text-gray-700 hover:text-green-600 font-medium transition">Historia</a>
      <a href="/contacto" className="text-gray-700 hover:text-green-600 font-medium transition">Contacto</a>
    </nav>
    {/* Para mobile: botón menú hamburguesa (puedes agregar después) */}
  </div>
</header>

          {/* Contenido principal con padding para que no tape el header fijo */}
          <main className="pt-0">
            {children}
          </main>

        {/* Footer */}
  <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="text-3xl font-bold text-green-600 mb-4">E</div>
        <p>Energía limpia para un futuro sostenible.</p>
        <p>Liderando la revolución de la energía solar renovable.</p>
      </div>
      <div>
        <h4 className="font-bold mb-4 text-gray-900">Contacto</h4>
        <p className="flex items-center"><span className="mr-2">📞</span> +51 999 123 456</p>
        <p className="flex items-center"><span className="mr-2">✉️</span> info@enersol.pe</p>
        <p className="flex items-center"><span className="mr-2">📍</span> Av. Sostenibilidad 123, Arequipa</p>
      </div>
      <div>
        <h4 className="font-bold mb-4 text-gray-900">Enlaces rápidos</h4>
        <ul className="space-y-2">
          <li><a href="/servicios" className="hover:text-green-600">Servicios</a></li>
          <li><a href="/beneficios" className="hover:text-green-600">Beneficios</a></li>
          <li><a href="/historia" className="hover:text-green-600">Historia</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4 text-gray-900">Síguenos</h4>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-green-600">LinkedIn</a>
          <a href="#" className="hover:text-green-600">Facebook</a>
          <a href="#" className="hover:text-green-600">Instagram</a>
        </div>
      </div>
    </div>
    <div className="text-center mt-8 pt-4 text-gray-600 border-t border-gray-200">
      © 2026 Enersol. Todos los derechos reservados.
    </div>
  </footer>
        </body>
      </html>
    );
  }