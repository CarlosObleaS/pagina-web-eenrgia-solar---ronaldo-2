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
        <header className="bg-white shadow-md fixed w-full z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-3xl font-bold text-green-600">E</div> {/* Logo E */}
            <nav>
              <ul className="flex space-x-8 text-gray-700 font-medium">
                <li><a href="/" className="hover:text-green-600">Home</a></li>
                <li><a href="/servicios" className="hover:text-green-600">Servicios</a></li>
                <li><a href="/beneficios" className="hover:text-green-600">Beneficios</a></li>
                <li><a href="/historia" className="hover:text-green-600">Historia</a></li>
                <li><a href="/contacto" className="hover:text-green-600">Contacto</a></li>
                <li><a href="/blog" className="hover:text-green-600">Blog</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Contenido principal con padding para que no tape el header fijo */}
        <main className="pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-4">E</div>
              <p>Energía limpia para un futuro sostenible. Liderando la revolución de la energía solar renovable.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p>📞 +51 999 123 456</p>
              <p>✉️ info@enersol.pe</p>
              <p>📍 Av. Sostenibilidad 123, Arequipa</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2">
                <li><a href="/servicios">Servicios</a></li>
                <li><a href="/beneficios">Beneficios</a></li>
                <li><a href="/historia">Historia</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#">LinkedIn</a>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 border-t border-white/20 pt-4">
            © 2026 Enersol. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}