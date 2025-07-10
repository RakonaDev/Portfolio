import { Github, Linkedin, Mail } from 'lucide-react';
import { scrollToElement } from '../../logic/scrollToElement';

export default function BannerSection() {
  return (
    <div>
      {/* Hero Banner */}
      <section
        id="inicio"
        className="relative min-h-screen w-full flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, #0B192C 0%, #1E3E62 50%, #0B192C 100%)`
        }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: 'rgba(255, 101, 0, 0.1)' }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ backgroundColor: 'rgba(30, 62, 98, 0.2)' }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="">
            {/* Greeting */}
            <div className="opacity-0 animate-fade-in">
              <p className="text-lg md:text-xl font-medium" style={{ color: '#9CA3AF' }}>
                ¡Hola! Soy
              </p>
            </div>

            {/* Name */}
            <div className="opacity-0 animate-fade-in delay-200">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold" style={{ color: '#FF6500' }}>
                Juan Cajas
              </h1>
            </div>

            {/* Career */}
            <div className="opacity-0 animate-fade-in delay-400 mt-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold" style={{ color: '#FFFFFF' }}>
                Ingeniero en Sistemas Computacionales
              </h2>
            </div>

            {/* Slogan */}
            <div className="opacity-0 animate-fade-in delay-600">
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mt-10" style={{ color: '#FFFFFF' }}>
                "Transformando ideas en código, creando soluciones digitales que marcan la diferencia"
              </p>
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-in delay-800">
              <div className="flex justify-center items-center space-x-6 pt-8">
                <a
                  href="https://www.linkedin.com/in/juan-cajas-4a37b2345/"
                  className="group flex items-center space-x-3 px-6 py-3 border rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderColor: 'rgba(156, 163, 175, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <Linkedin className="w-6 h-6" style={{ color: '#9CA3AF' }} />
                  <span className="font-medium" style={{ color: '#9CA3AF' }}>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/RakonaDev"
                  className="group flex items-center space-x-3 px-6 py-3 border rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderColor: 'rgba(156, 163, 175, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <Github className="w-6 h-6" style={{ color: '#9CA3AF' }} />
                  <span className="font-medium" style={{ color: '#9CA3AF' }}>GitHub</span>
                </a>

                <a
                  href="mailto:juancajas1905@gmail.com"
                  className="group flex items-center space-x-3 px-6 py-3 border rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderColor: 'rgba(156, 163, 175, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <Mail className="w-6 h-6" style={{ color: '#9CA3AF' }} />
                  <span className="font-medium" style={{ color: '#9CA3AF' }}>Email</span>
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="opacity-0 animate-fade-in delay-1000">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
                <button
                  onClick={() => scrollToElement('#proyectos', 100)}
                  className="px-6 py-4 cssbuttons-io ring-2 ring-primary text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Ver mis proyectos</span>
                </button>

                <button
                  onClick={() => scrollToElement('#contactos', 100)}
                  className="px-6 py-4 cssbuttons-io ring-2 ring-primary text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"

                >
                  <span>Contáctame</span>
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in delay-1200">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm" style={{ color: '#9CA3AF' }}>Scroll</span>
              <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#1E3E62' }}>
                <div className="w-1 h-3 rounded-full mt-2 animate-bounce" style={{ backgroundColor: '#FF6500' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
