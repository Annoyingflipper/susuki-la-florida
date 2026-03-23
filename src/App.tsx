import { useState } from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, Navigation, CarFront, Menu, X } from 'lucide-react';
import imgHero from './assets/images/hero-bg.jpg';
import imgGrandVitara from './assets/images/grand-vitara.jpg';
import imgJimny from './assets/images/jimny.jpg';
import imgSwift from './assets/images/swift.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white text-deep-black font-sans scroll-smooth">
      {/* Navbar */}
      <header className="fixed w-full top-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 flex items-center justify-between px-6 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="font-bold text-3xl tracking-tighter flex items-center gap-1 group cursor-pointer">
            <span className="text-deep-black group-hover:text-dark-grey transition-colors">FCG</span>
            <div className="w-2 h-2 bg-primary-red self-end mb-1.5" />
          </div>
          <span className="ml-2 pl-2 border-l-2 border-primary-red text-sm font-semibold tracking-widest text-dark-grey uppercase">
            Suzuki La Florida
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide">
          <a href="#inicio" className="hover:text-primary-red transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary-red hover:after:w-full after:transition-all after:duration-300">Inicio</a>
          <a href="#modelos" className="hover:text-primary-red transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary-red hover:after:w-full after:transition-all after:duration-300">Modelos</a>
          <a href="#servicios" className="hover:text-primary-red transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary-red hover:after:w-full after:transition-all after:duration-300">Servicios</a>
          <a href="#contacto" className="hover:text-primary-red transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary-red hover:after:w-full after:transition-all after:duration-300">Contacto</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3 mr-4 text-dark-grey">
            <a href="https://www.instagram.com/suzukilaflorida/" target="_blank" rel="noreferrer" className="hover:text-primary-red transition-colors"><Instagram size={20} /></a>
            <a href="https://www.tiktok.com/@suzuki.la.florida" target="_blank" rel="noreferrer" className="hover:text-primary-red transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a href="https://www.facebook.com/p/Suzuki-La-Florida-61573582777619/" target="_blank" rel="noreferrer" className="hover:text-primary-red transition-colors"><Facebook size={20} /></a>
          </div>
          <a href="#contacto" className="hidden md:flex bg-primary-red text-white px-6 py-2.5 rounded-sm font-bold text-sm hover:bg-red-700 hover:shadow-lg hover:shadow-primary-red/20 transition-all items-center gap-2">
            Cotizar <Navigation size={16} />
          </a>
          
          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-deep-black p-2 focus:outline-none hover:text-primary-red transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay Wrapper */}
      <div 
        className={`fixed left-0 right-0 top-[76px] bg-white z-40 md:hidden shadow-2xl border-t border-gray-100 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMenuOpen ? 'max-h-[calc(100vh-76px)] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center pt-10 pb-12 overflow-y-auto h-full max-h-[calc(100vh-76px)] w-full">
          <nav className={`flex flex-col items-center gap-8 font-semibold text-xl tracking-wide w-full transition-all duration-500 delay-100 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="#inicio" onClick={toggleMenu} className="w-full text-center py-2 hover:text-primary-red transition-colors">Inicio</a>
            <a href="#modelos" onClick={toggleMenu} className="w-full text-center py-2 hover:text-primary-red transition-colors">Modelos</a>
            <a href="#servicios" onClick={toggleMenu} className="w-full text-center py-2 hover:text-primary-red transition-colors">Servicios</a>
            <a href="#contacto" onClick={toggleMenu} className="w-full text-center py-2 hover:text-primary-red transition-colors">Contacto</a>
          </nav>
          <div className={`mt-12 mb-8 transition-all duration-500 delay-200 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="#contacto" onClick={toggleMenu} className="bg-primary-red text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-red-700 hover:shadow-lg transition-all flex items-center gap-2">
              Cotizar <Navigation size={20} />
            </a>
          </div>
          <div className={`flex items-center gap-6 mt-auto pb-12 text-dark-grey transition-all duration-500 delay-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="https://www.instagram.com/suzukilaflorida/" target="_blank" rel="noreferrer"><Instagram size={24} /></a>
            <a href="https://www.tiktok.com/@suzuki.la.florida" target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a href="https://www.facebook.com/p/Suzuki-La-Florida-61573582777619/" target="_blank" rel="noreferrer"><Facebook size={24} /></a>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative h-[90vh] flex items-center justify-center bg-deep-black pt-20 overflow-hidden">
          {/* Background image placeholder */}
          <div className="absolute inset-0 opacity-70">
            <img src={imgHero} alt="Suzuki Cars" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="container relative mx-auto px-6 flex flex-col items-center justify-center text-center z-10 mt-16 w-full">
            <div className="inline-block border border-white/20 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
              <span className="text-white text-xs font-bold tracking-widest uppercase pl-[0.1em]">Finest Cars Group</span>
            </div>
            
            <h1 className="text-balance text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[1.1] drop-shadow-xl w-full flex flex-col items-center justify-center">
              <span>POTENCIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-red-500">SUZUKI</span></span>
              <span>EN CARACAS.</span>
            </h1>
            
            <p className="text-balance text-lg md:text-2xl text-light-grey mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md w-full">
              Descubre nuestra línea exclusiva de vehículos y experimenta la verdadera aventura. Tu viaje comienza en La Florida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#modelos" className="bg-primary-red text-white text-lg px-8 py-4 rounded-sm font-bold shadow-xl shadow-primary-red/30 hover:bg-white hover:text-primary-red transition-all duration-300 flex items-center justify-center gap-3">
                <CarFront size={22} />
                Explorar Modelos
              </a>
              <a href="#contacto" className="bg-transparent border-2 border-white text-white text-lg px-8 py-4 rounded-sm font-bold hover:bg-white hover:text-deep-black transition-all duration-300">
                Agendar Cita
              </a>
            </div>
          </div>
        </section>

        {/* Models Section */}
        <section id="modelos" className="py-24 bg-light-grey">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <h2 className="text-primary-red font-bold tracking-widest text-sm uppercase mb-2">Vehículos Destacados</h2>
                <h3 className="text-4xl md:text-5xl font-black text-deep-black tracking-tight">Nuestros Modelos</h3>
              </div>
              <p className="max-w-md text-dark-grey mt-4 md:mt-0">
                Diseñados para la ciudad y la aventura. Conoce la gama Suzuki disponible en Finest Cars Group.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Grand Vitara Card */}
              <div className="bg-white group cursor-pointer border border-gray-100 rounded-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="h-64 bg-gray-200 overflow-hidden relative">
                  <img src={imgGrandVitara} alt="Grand Vitara" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-deep-black text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-lg">SUV</div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-black mb-2 group-hover:text-primary-red transition-colors">Grand Vitara</h4>
                  <p className="text-dark-grey mb-6 text-sm line-clamp-2">Lujo, espacio y tecnología para toda la familia. Preparada para cualquier camino.</p>
                  <a href="#contacto" className="border-b-2 border-primary-red text-deep-black font-bold pb-1 hover:text-primary-red transition-colors inline-block uppercase text-sm tracking-widest">
                    Consultar Precio
                  </a>
                </div>
              </div>

               {/* Jimny Card */}
               <div className="bg-white group cursor-pointer border border-gray-100 rounded-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="h-64 bg-gray-200 overflow-hidden relative">
                  <img src={imgJimny} alt="Jimny 5 Puertas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-primary-red text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-lg">4x4</div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-black mb-2 group-hover:text-primary-red transition-colors">Jimny 5 Puertas</h4>
                  <p className="text-dark-grey mb-6 text-sm line-clamp-2">El 4x4 más icónico ahora con más espacio. Listo para las rutas más extremas de Venezuela.</p>
                  <a href="#contacto" className="border-b-2 border-primary-red text-deep-black font-bold pb-1 hover:text-primary-red transition-colors inline-block uppercase text-sm tracking-widest">
                    Consultar Precio
                  </a>
                </div>
              </div>

              {/* Swift Card */}
              <div className="bg-white group cursor-pointer border border-gray-100 rounded-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="h-64 bg-gray-200 overflow-hidden relative">
                  <img src={imgSwift} alt="Swift" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-deep-black text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-lg">Hatchback</div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-black mb-2 group-hover:text-primary-red transition-colors">Swift</h4>
                  <p className="text-dark-grey mb-6 text-sm line-clamp-2">Dinámico, eficiente y estilizado. El auto perfecto para tu día a día en la ciudad.</p>
                  <a href="#contacto" className="border-b-2 border-primary-red text-deep-black font-bold pb-1 hover:text-primary-red transition-colors inline-block uppercase text-sm tracking-widest">
                    Consultar Precio
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <button className="bg-deep-black text-white px-8 py-3 rounded-sm font-bold tracking-widest text-sm hover:bg-gray-800 transition-colors uppercase">
                Ver Catálogo Completo
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-24 bg-deep-black text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-primary-red font-bold tracking-widest text-sm uppercase mb-2">Respaldo Total</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Servicios FCG Suzuki</h3>
              <p className="max-w-2xl mx-auto text-gray-400">
                Ofrecemos una experiencia integral. Desde la adquisición de tu vehículo hasta el mantenimiento y cuidado continuo.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-dark-grey/40 p-10 rounded-sm border border-gray-800 hover:border-primary-red/50 hover:bg-dark-grey/60 transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary-red/10 text-primary-red flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary-red group-hover:text-white transition-colors duration-300">
                  <CarFront size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4">Venta de Vehículos</h4>
                <p className="text-gray-400 leading-relaxed">
                  Asesoría personalizada para que encuentres el Suzuki perfecto que se adapte a tus necesidades, estilo de vida y presupuesto.
                </p>
              </div>
              
              {/* Service 2 */}
              <div className="bg-dark-grey/40 p-10 rounded-sm border border-gray-800 hover:border-primary-red/50 hover:bg-dark-grey/60 transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary-red/10 text-primary-red flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary-red group-hover:text-white transition-colors duration-300">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <h4 className="text-2xl font-bold mb-4">Servicio Técnico</h4>
                <p className="text-gray-400 leading-relaxed">
                  Taller especializado con mecánicos altamente capacitados. Mantenimiento preventivo, correctivo y diagnóstico computarizado.
                </p>
              </div>
              
              {/* Service 3 */}
              <div className="bg-dark-grey/40 p-10 rounded-sm border border-gray-800 hover:border-primary-red/50 hover:bg-dark-grey/60 transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary-red/10 text-primary-red flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary-red group-hover:text-white transition-colors duration-300">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h4 className="text-2xl font-bold mb-4">Repuestos y Accesorios</h4>
                <p className="text-gray-400 leading-relaxed">
                  Piezas, repuestos 100% originales Suzuki y mercancía oficial para garantizar el mejor rendimiento y vida útil de tu auto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-primary-red font-bold tracking-widest text-sm uppercase mb-2">Finest Cars Group</h2>
                <h3 className="text-4xl md:text-5xl font-black text-deep-black tracking-tight mb-8">Contáctanos</h3>
                <p className="text-dark-grey mb-10 text-lg">
                  Visita nuestro concesionario en La Florida y descubre de cerca la gama completa de vehículos Suzuki. Nuestro equipo está listo para asesorarte.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-light-grey p-3 rounded-sm text-primary-red shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">Visítanos</h5>
                      <p className="text-dark-grey">Av. Los Chaguaramos, La Florida, Caracas. Distrito Capital, Venezuela.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-light-grey p-3 rounded-sm text-primary-red shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">Llámanos</h5>
                      <p className="text-dark-grey">+58 212-0000000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-light-grey p-3 rounded-sm text-primary-red shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">Escríbenos</h5>
                      <p className="text-dark-grey">ventas@suzukilaflorida.com.ve</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12">
                  <h5 className="font-bold text-lg mb-4">Síguenos en nuestras redes</h5>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/suzukilaflorida/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-light-grey flex items-center justify-center rounded-sm hover:bg-primary-red hover:text-white transition-colors duration-300">
                      <Instagram size={20} />
                    </a>
                    <a href="https://www.tiktok.com/@suzuki.la.florida" target="_blank" rel="noreferrer" className="w-12 h-12 bg-light-grey flex items-center justify-center rounded-sm hover:bg-primary-red hover:text-white transition-colors duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                    </a>
                    <a href="https://www.facebook.com/p/Suzuki-La-Florida-61573582777619/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-light-grey flex items-center justify-center rounded-sm hover:bg-primary-red hover:text-white transition-colors duration-300">
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-light-grey p-10 rounded-sm shadow-xl">
                <h4 className="text-2xl font-bold mb-6">Solicita tu cotización</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-dark-grey">Nombre Completo</label>
                    <input type="text" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all" placeholder="Juan Pérez" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-dark-grey">Teléfono</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all" placeholder="0414-0000000" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-dark-grey">Correo</label>
                      <input type="email" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all" placeholder="correo@ejemplo.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-dark-grey">Modelo de Interés</label>
                    <select className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all bg-white">
                      <option>Selecciona un vehículo</option>
                      <option>Grand Vitara</option>
                      <option>Jimny 5 Puertas</option>
                      <option>Swift</option>
                      <option>Fronx</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-dark-grey">Mensaje (Opcional)</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all resize-none" placeholder="Cuéntanos más sobre lo que buscas..."></textarea>
                  </div>
                  <button className="w-full bg-primary-red text-white font-bold tracking-widest uppercase text-sm py-4 rounded-sm hover:bg-red-700 transition-colors shadow-lg active:transform active:scale-95">
                    Enviar Solicitud
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-deep-black text-white pt-20 pb-10 border-t-4 border-primary-red">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
               <div className="font-bold text-4xl tracking-tighter flex items-center gap-1 mb-4">
                  <span className="text-white">FCG</span>
                  <div className="w-2.5 h-2.5 bg-primary-red self-end mb-1.5" />
                </div>
              <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
                Finest Cars Group - Concesionario oficial Suzuki en La Florida, Caracas. Tu próximo vehículo te espera.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 md:gap-24 text-center md:text-left">
              <div>
                <h6 className="font-bold mb-4 uppercase text-sm tracking-widest text-primary-red">Enlaces</h6>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                  <li><a href="#modelos" className="hover:text-white transition-colors">Modelos</a></li>
                  <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
                  <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
                </ul>
              </div>
              <div>
                <h6 className="font-bold mb-4 uppercase text-sm tracking-widest text-primary-red">Legal</h6>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Términos de Privacidad</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Políticas de Venta</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Finest Cars Group - Suzuki La Florida. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">Diseñado con ❤️ en Caracas.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
