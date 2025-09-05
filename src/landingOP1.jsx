import React, { useState } from 'react';
import { 
  ChevronRight,
  Award,
  Target,
  Eye,
  BarChart3,
  Star,
  Plus,
  Minus,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  Building2,
  Users,
  Briefcase,
  Globe
} from 'lucide-react';

const LandingPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-500/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-yellow-500" />
              <div>
                <h1 className="text-xl font-bold text-white">A.M.O.N.G. SRL</h1>
                <p className="text-xs text-gray-300">Agencias de Movilidad</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-white hover:text-yellow-500 transition-colors">Inicio</a>
              <a href="#nosotros" className="text-white hover:text-yellow-500 transition-colors">Nosotros</a>
              <a href="#servicios" className="text-white hover:text-yellow-500 transition-colors">Servicios</a>
              <a href="#impacto" className="text-white hover:text-yellow-500 transition-colors">Impacto</a>
              <a href="#testimonios" className="text-white hover:text-yellow-500 transition-colors">Testimonios</a>
              <a href="#contacto" className="text-white hover:text-yellow-500 transition-colors">Contacto</a>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors">
                Cotizar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-yellow-500 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-700 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#inicio" className="text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Inicio</a>
                <a href="#nosotros" className="text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Nosotros</a>
                <a href="#servicios" className="text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Servicios</a>
                <a href="#impacto" className="text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Impacto</a>
                <a href="#testimonios" className="text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Testimonios</a>
                <a href="#contacto" className="text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Contacto</a>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors w-full">
                  Cotizar
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-r from-black to-gray-800 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Agencias de Movilidad de Operaciones y Negocios Globales
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transformamos tu Negocio con 
              <span className="text-yellow-500"> Soluciones Globales</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed max-w-3xl mx-auto">
              Ofrecemos soluciones integrales de movilidad y operaciones que impulsan el crecimiento de tu empresa a nivel global
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                Comenzar Ahora
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Conocer Más
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48V0h1200v120z"></path>
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Sobre Nosotros</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Somos una empresa especializada en brindar soluciones integrales de movilidad y operaciones 
                para empresas que buscan expandirse globalmente
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Nuestra Historia</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fundada con la visión de conectar empresas con oportunidades globales, A.M.O.N.G. SRL 
                  ha sido pionera en el desarrollo de estrategias de movilidad que transforman la manera 
                  en que las organizaciones operan a nivel internacional.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">10+ Años de Experiencia</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">500+ Proyectos Exitosos</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Presencia Global</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-black mb-4">¿Por Qué Elegirnos?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Users className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-black">Equipo Experto</h4>
                      <p className="text-gray-600">Profesionales altamente capacitados dedicados a tu éxito</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-black">Enfoque Innovador</h4>
                      <p className="text-gray-600">Soluciones personalizadas adaptadas a tus necesidades</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-black">Resultados Comprobados</h4>
                      <p className="text-gray-600">Historial de éxito entregando resultados medibles</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Target className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Nuestra Misión</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Facilitar la expansión global de las empresas mediante soluciones integrales de movilidad 
              y operaciones, brindando servicios especializados que optimicen sus procesos y maximicen 
              su potencial de crecimiento internacional.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-4">Valores Fundamentales</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-black">Integridad</h4>
                  <p className="text-gray-600 text-sm">Honestidad y transparencia en todas nuestras operaciones</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-black">Excelencia</h4>
                  <p className="text-gray-600 text-sm">Compromiso con la entrega de la más alta calidad</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-black">Innovación</h4>
                  <p className="text-gray-600 text-sm">Búsqueda constante de nuevas soluciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Eye className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Visión</h2>
            </div>
            <p className="text-xl text-gray-100 leading-relaxed mb-12">
              Ser la empresa líder en América Latina en soluciones de movilidad y operaciones globales, 
              reconocida por nuestra capacidad de transformar empresas locales en organizaciones de alcance mundial.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">Metas 2030</h3>
                <ul className="space-y-2 text-gray-100">
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Atender 1,000+ empresas globalmente
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Presencia en 25+ países
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Operaciones carbono neutral
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">Enfoque Futuro</h3>
                <ul className="space-y-2 text-gray-100">
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Soluciones digitales avanzadas
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Tecnología sostenible
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Accesibilidad global
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <BarChart3 className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Nuestro Impacto</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Medimos nuestro éxito a través de los cambios positivos que creamos para nuestros clientes y comunidades
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-yellow-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-500">
                  <BarChart3 className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-2">500+</h3>
                <p className="text-gray-600">Proyectos Completados</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-500">
                  <Users className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-2">98%</h3>
                <p className="text-gray-600">Satisfacción del Cliente</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-500">
                  <Globe className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-2">15+</h3>
                <p className="text-gray-600">Países Atendidos</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-500">
                  <Award className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-2">$25M+</h3>
                <p className="text-gray-600">Valor Generado</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-black mb-4">Crecimiento Empresarial</h3>
                <p className="text-gray-600 mb-4">
                  Nuestros clientes experimentan un promedio de 180% de aumento en eficiencia operacional 
                  en el primer año de implementación.
                </p>
                <div className="bg-yellow-500 h-2 rounded-full">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                <span className="text-sm text-gray-500 mt-2 block">90% Tasa de Éxito</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-black mb-4">Impacto Social</h3>
                <p className="text-gray-600 mb-4">
                  A través de nuestras iniciativas sostenibles, hemos contribuido a crear más de 2,000 
                  empleos directos e indirectos.
                </p>
                <div className="bg-yellow-500 h-2 rounded-full">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span className="text-sm text-gray-500 mt-2 block">85% Impacto Positivo</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-black mb-4">Índice de Innovación</h3>
                <p className="text-gray-600 mb-4">
                  Invertimos 25% de nuestros ingresos en I+D para asegurar soluciones de vanguardia 
                  para nuestros clientes.
                </p>
                <div className="bg-yellow-500 h-2 rounded-full">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                <span className="text-sm text-gray-500 mt-2 block">95% Puntuación de Innovación</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Star className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Lo Que Dicen Nuestros Clientes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No solo tomes nuestra palabra: escucha de las empresas que hemos ayudado a transformar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "A.M.O.N.G. SRL transformó completamente nuestro negocio. Su enfoque innovador y 
                  dedicación a la excelencia es incomparable."
                </p>
                <div className="flex items-center">
                  <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-500 font-semibold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Juan Sánchez</h4>
                    <p className="text-gray-500 text-sm">CEO, TechCorp Latam</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Los resultados hablan por sí solos: 250% de aumento en eficiencia y ahorros 
                  significativos. Altamente recomendado."
                </p>
                <div className="flex items-center">
                  <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-500 font-semibold">MR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">María Rodríguez</h4>
                    <p className="text-gray-500 text-sm">Directora, GlobalOps</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Profesionales, confiables e innovadores. Entregaron exactamente lo que necesitábamos, 
                  a tiempo y dentro del presupuesto."
                </p>
                <div className="flex items-center">
                  <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-500 font-semibold">CA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Carlos Aguirre</h4>
                    <p className="text-gray-500 text-sm">Fundador, InnovaLab</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-black hover:bg-gray-800 text-yellow-500 px-8 py-3 rounded-lg font-semibold transition-colors border border-yellow-500">
                Ver Todas las Reseñas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Preguntas Frecuentes</h2>
              <p className="text-xl text-gray-600">
                Encuentra respuestas a preguntas comunes sobre nuestros servicios y procesos
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "¿Qué servicios ofrecen?",
                  answer: "Ofrecemos una gama completa de servicios incluyendo consultoría en movilidad global, desarrollo de estrategias operacionales, gestión de expansión internacional, y soporte continuo para optimización de procesos."
                },
                {
                  question: "¿Cuánto tiempo toma un proyecto típico?",
                  answer: "Los tiempos varían según el alcance y complejidad. Proyectos simples pueden tomar 2-4 semanas, mientras que soluciones integrales pueden requerir 3-6 meses. Proporcionamos cronogramas detallados durante nuestra consulta inicial."
                },
                {
                  question: "¿Trabajan con empresas pequeñas?",
                  answer: "¡Absolutamente! Trabajamos con empresas de todos los tamaños, desde startups hasta organizaciones multinacionales. Nuestras soluciones son escalables y se pueden adaptar a cualquier presupuesto y requerimiento."
                },
                {
                  question: "¿Cuál es su estructura de precios?",
                  answer: "Nuestros precios se basan en proyectos y dependen de los requerimientos específicos y alcance del trabajo. Proporcionamos cotizaciones transparentes y detalladas después de entender sus necesidades durante nuestra consulta gratuita."
                },
                {
                  question: "¿Proporcionan soporte continuo?",
                  answer: "Sí, ofrecemos paquetes de soporte integral incluyendo mantenimiento, actualizaciones, monitoreo, y asistencia técnica para asegurar que sus soluciones continúen funcionando óptimamente."
                },
                {
                  question: "¿Cómo aseguran el éxito del proyecto?",
                  answer: "Seguimos metodologías probadas, mantenemos comunicación regular, proporcionamos informes detallados de progreso, y trabajamos estrechamente con su equipo durante todo el ciclo de vida del proyecto."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold text-black">{faq.question}</span>
                    {openFAQ === index ? (
                      <Minus className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">¿Aún tienes preguntas?</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="h-8 w-8 text-yellow-500" />
                  <div>
                    <h3 className="text-xl font-bold">A.M.O.N.G. SRL</h3>
                    <p className="text-xs text-gray-300">Agencias de Movilidad</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Transformando empresas a través de soluciones globales de movilidad y operaciones.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-500">Empresa</h3>
                <div className="space-y-2">
                  <a href="#nosotros" className="block text-gray-300 hover:text-white transition-colors">Sobre Nosotros</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Nuestro Equipo</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Carreras</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Noticias</a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-500">Servicios</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Consultoría</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Movilidad Global</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Operaciones</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Capacitación</a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-500">Contacto</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-yellow-500" />
                    <span className="text-gray-300">info@among.srl</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-yellow-500" />
                    <span className="text-gray-300">+54 11 1234-5678</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                    <span className="text-gray-300">Buenos Aires, Argentina</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-gray-300">
                    &copy; 2024 A.M.O.N.G. SRL - Agencias de Movilidad de Operaciones y Negocios Globales. 
                    Todos los derechos reservados.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center md:justify-end">
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Política de Privacidad</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Términos de Servicio</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Política de Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;