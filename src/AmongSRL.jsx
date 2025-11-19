import React, { useState } from "react";
import { ChevronRight, Award, Target, Eye, BarChart3, Star, Plus, Minus, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Menu, X, Building2, Users, Briefcase, Globe } from "lucide-react";

const LandingPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    window.open(`https://wa.me/59176619516?text=${encodeURIComponent("Hola, quisiera hacer una cotización")}`, "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/59176619516?text=${encodeURIComponent("Hola, quisiera hacer una cotización")}`, "_blank");
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-500/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              {/* Logo redondeado en navbar */}
              <img src="/src/assets/logoAMONG.webp" alt="A.M.O.N.G. SRL" className="h-16 w-16 rounded-full object-cover" />
              <div>
                <h1 className="text-xl font-bold text-white">A.M.O.N.G. SRL</h1>
                <p className="text-xs text-gray-300">Agencias de Movilidad</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-white hover:text-yellow-500 transition-colors">
                Inicio
              </a>
              <a href="#nosotros" className="text-white hover:text-yellow-500 transition-colors">
                Nosotros
              </a>
              <a href="#impacto" className="text-white hover:text-yellow-500 transition-colors">
                Ventajas
              </a>
              <a href="#testimonios" className="text-white hover:text-yellow-500 transition-colors">
                Testimonios
              </a>
              <a href="#contacto" className="text-white hover:text-yellow-500 transition-colors">
                Contacto
              </a>
              <button onClick={handleContactClick} className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors">
                Cotizar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden text-white hover:text-yellow-500 transition-colors">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-700 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#inicio" className="text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>
                  Inicio
                </a>
                <a href="#nosotros" className="text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>
                  Nosotros
                </a>
                <a href="#impacto" className="text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>
                  Ventajas
                </a>
                <a href="#testimonios" className="text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>
                  Testimonios
                </a>
                <a href="#contacto" className="text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>
                  Contacto
                </a>
                <button onClick={handleContactClick} className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors w-full">
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
              <span className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">Tu Aliado en Importaciones Internacionales</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Facilitamos tus
              <span className="text-yellow-500"> Importaciones</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed max-w-3xl mx-auto">
              Conectamos personas y empresas con sus proveedores internacionales, gestionando logística, trámites y despacho con total transparencia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                Comenzar Ahora
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => window.open("https://linktr.ee/A.M.O.N.G", "_blank")}
                className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Conocer Más
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Sobre Nosotros</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Somos una agencia especializada en facilitar el proceso de importación, conectando a personas y empresas con sus proveedores internacionales
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Nuestra Historia</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fundada con la visión de simplificar el comercio internacional, A.M.O.N.G. SRL se especializa en facilitar importaciones para personas y empresas, gestionando de forma integral la
                  logística, trámites aduaneros y entrega final.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Experiencia en Importaciones</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Trámites Simplificados</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Transparencia Total</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-black mb-4">¿Por Qué Elegirnos?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Users className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-black">Servicio Personalizado</h4>
                      <p className="text-gray-600">Atendemos tanto a personas como empresas de todos los tamaños</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-black">Gestión Integral</h4>
                      <p className="text-gray-600">Nos encargamos de logística, trámites y nacionalización completa</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-black">Transparencia Total</h4>
                      <p className="text-gray-600">Informamos cada etapa del proceso de importación</p>
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
              Facilitar el proceso de importación para personas y empresas, conectándolas con sus proveedores internacionales y gestionando de forma integral la logística, trámites y despacho, con
              transparencia, seguridad y eficiencia.
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
              Convertirnos en la agencia de referencia en soluciones de importación en Bolivia y Latinoamérica, reconocidos por brindar confianza, asesoría experta y un servicio que conecta a nuestros
              clientes con el mundo de manera simple y segura.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">Objetivos a Futuro</h3>
                <ul className="space-y-2 text-gray-100">
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Expandir nuestros servicios
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Presencia en más países
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Automatización de procesos
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">Nuestro Compromiso</h3>
                <ul className="space-y-2 text-gray-100">
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Servicio personalizado
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Transparencia total
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    Mejora continua
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="impacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Award className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Por Qué Somos la Mejor Opción</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Características que nos hacen únicos en el mercado de importaciones</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Importaciones a tu medida</h3>
                <p className="text-gray-600">Trabajamos tanto con personas como con empresas, sin importar el tamaño de su carga.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Tu proveedor, tu producto</h3>
                <p className="text-gray-600">Tú eliges a tu proveedor, nosotros nos encargamos de que tu compra llegue a tus manos.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Asesoría experta</h3>
                <p className="text-gray-600">Si aún no tienes definido qué o cómo importar, te guiamos en el proceso y te damos alternativas.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Confianza y transparencia</h3>
                <p className="text-gray-600">Informamos cada etapa de tu importación para que tengas total control de tu inversión.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Flexibilidad de pago</h3>
                <p className="text-gray-600">Puedes pagar directamente a tu proveedor o entregarnos el dinero para que realicemos la compra en tu nombre.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Alcance global</h3>
                <p className="text-gray-600">Realizamos importaciones desde cualquier parte del mundo, con especialización en mercados asiáticos.</p>
              </div>
            </div>

            <div className="text-center">
              <button onClick={handleContactClick} className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Solicita tu Cotización Ahora
              </button>
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
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">No solo tomes nuestra palabra: escucha de las empresas que hemos ayudado a transformar</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Excelente servicio. Me ayudaron a importar equipos para mi negocio desde China. Todo llegó in perfectas condiciones y en el tiempo prometido."
                </p>
                <div className="flex items-center">
                  <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-500 font-semibold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Juan Sánchez</h4>
                    <p className="text-gray-500 text-sm">Empresario, Santa Cruz</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"Muy profesionales y transparentes. Me mantuvieron informada en cada paso del proceso. Definitivamente los recomiendo."</p>
                <div className="flex items-center">
                  <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-500 font-semibold">MR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">María Rodríguez</h4>
                    <p className="text-gray-500 text-sm">Comerciante</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"Facilitaron todo el proceso de importación para mi empresa. Su asesoría fue clave para encontrar los mejores proveedores."</p>
                <div className="flex items-center">
                  <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-500 font-semibold">CA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Carlos Aguirre</h4>
                    <p className="text-gray-500 text-sm">CEO, TechImport</p>
                  </div>
                </div>
              </div>
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
              <p className="text-xl text-gray-600">Encuentra respuestas a preguntas comunes sobre nuestros servicios y procesos</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "¿Qué tipo de productos puedo importar con A.M.O.N.G?",
                  answer: "Cualquier producto permitido por la normativa boliviana, desde electrónicos hasta maquinaria o insumos para empresas.",
                },
                {
                  question: "¿Debo tener un proveedor definido para importar?",
                  answer: "Sí, el cliente debe contar con un proveedor. Sin embargo, ofrecemos asesoría para ayudarte a identificar opciones confiables si aún no tienes uno.",
                },
                {
                  question: "¿Cómo funciona el pago al proveedor?",
                  answer: "El cliente puede pagar directamente al proveedor. También ofrecemos la opción de realizar el pago en tu nombre, siempre que nos transfieras previamente el monto acordado.",
                },
                {
                  question: "¿Se encargan del transporte y la nacionalización?",
                  answer: "Sí, gestionamos todo el proceso de envío internacional, logística y trámites aduaneros hasta que tu carga esté en Bolivia.",
                },
                {
                  question: "¿Qué tiempo toma una importación?",
                  answer: "Depende del origen y tipo de carga, pero al inicio de cada proceso te entregamos un cronograma estimado.",
                },
                {
                  question: "¿Puedo importar aunque no tenga empresa registrada?",
                  answer: "Sí, también ofrecemos servicios a particulares que deseen traer productos en pequeñas cantidades.",
                },
                {
                  question: "¿Solo trabajan con China?",
                  answer: "China es uno de los principales mercados, pero realizamos importaciones desde cualquier parte del mundo.",
                },
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors" onClick={() => toggleFAQ(index)}>
                    <span className="font-semibold text-black">{faq.question}</span>
                    {openFAQ === index ? <Minus className="h-5 w-5 text-gray-500" /> : <Plus className="h-5 w-5 text-gray-500" />}
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
              <a href="mailto:info@amongsrl.com" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
                Contáctanos
              </a>
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
                  {/* Logo redondeado en footer */}
                  <img src="/src/assets/logoAMONG.webp" alt="A.M.O.N.G. SRL" className="h-16 w-16 rounded-full object-cover" />
                  <div>
                    <h3 className="text-xl font-bold">A.M.O.N.G. SRL</h3>
                    <p className="text-xs text-gray-300">Agencias de Movilidad</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">Facilitando el proceso de importación para conectar a nuestros clientes con el mundo.</p>
                <div className="flex space-x-4">
                  <a href="https://www.tiktok.com/@amongsrl" target="_blank" rel="noreferrer" aria-label="TikTok" className="p-1 rounded-md text-gray-300 hover:bg-yellow-500 transition-colors">
                    <img src="https://img.icons8.com/glyph-neue/64/FFFFFF/tiktok.png" alt="TikTok" className="h-6 w-6" />
                  </a>

                  <a
                    href="https://www.instagram.com/a.m.o.n.g_bolivia_s.r.l"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="p-1 rounded-md text-gray-300 hover:bg-yellow-500 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>

                  <button onClick={handleWhatsAppClick} aria-label="WhatsApp" className="p-1 rounded-md text-gray-300 hover:bg-yellow-500 transition-colors">
                    <img src="https://img.icons8.com/pastel-glyph/64/FFFFFF/whatsapp--v2.png" alt="WhatsApp" className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-500">Empresa</h3>
                <div className="space-y-2">
                  <a href="#nosotros" className="block text-gray-300 hover:text-white transition-colors">
                    Sobre Nosotros
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-500">Enlaces Rápidos</h3>
                <div className="space-y-2">
                  <a href="#nosotros" className="block text-gray-300 hover:text-white transition-colors">
                    Misión y Visión
                  </a>
                  <a href="#impacto" className="block text-gray-300 hover:text-white transition-colors">
                    Por Qué Elegirnos
                  </a>
                  <a href="#testimonios" className="block text-gray-300 hover:text-white transition-colors">
                    Testimonios
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-500">Contacto</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-yellow-500" />
                    <a href="mailto:info@amongsrl.com" className="text-gray-300 hover:text-white transition-colors">
                      info@amongsrl.com
                    </a>
                  </div>
                  <div className="flex items-center cursor-pointer" onClick={handleWhatsAppClick}>
                    <Phone className="h-5 w-5 mr-2 text-yellow-500" />
                    <span className="text-gray-300 hover:text-white transition-colors">+591 73394494</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                    <span className="text-gray-300">Santa Cruz, Bolivia</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="text-center">
                <p className="text-gray-300">&copy; {currentYear} A.M.O.N.G. SRL - Agencias de Movilidad de Operaciones y Negocios Globales. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
