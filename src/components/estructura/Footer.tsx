"use client"

import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Heart,
  ArrowUp,
  Code,
  Briefcase,
  User,
  MessageCircle,
  ExternalLink,
  Coffee,
} from "lucide-react"
import { scrollToElement } from "../../logic/scrollToElement"

// Datos del footer
const footerData = {
  personal: {
    name: "Juan Carlos Cajas",
    title: "Full Stack Developer",
    description: "Creando experiencias digitales excepcionales con código limpio y diseño intuitivo.",
  },
  contact: {
    email: "juancajas1905@gmail.com",
    phone: "+51 978 791 690",
    location: "Los Olivos - Lima, Perú",
  },
  social: [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/RakonaDev",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/juan-cajas-4a37b2345/",
      color: "hover:text-blue-400",
    }
  ],
  navigation: [
    { name: "Inicio", href: "#inicio", icon: User },
    { name: "Sobre Mí", href: "#nosotros", icon: User },
    { name: "Proyectos", href: "#proyectos", icon: Briefcase },
    { name: "Tecnologías", href: "#tecnologias", icon: Code },
    { name: "Contacto", href: "#contacto", icon: MessageCircle },
  ],
  services: [
    { name: "Desarrollo Web", href: "#web-dev" },
    { name: "Aplicaciones Móviles", href: "#mobile-dev" },
    { name: "Consultoría Técnica", href: "#consulting" },
    { name: "Mentoría", href: "#mentoring" },
  ],
}

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg transition-all duration-300 z-50 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
    </motion.button>
  )
}

const NewsletterSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 mb-12"
    >
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Send className="text-primary" size={24} />
          <h3 className="text-2xl font-bold text-white">Mantente Conectado</h3>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Suscríbete para recibir actualizaciones sobre nuevos proyectos, artículos técnicos y consejos de desarrollo.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="tu@email.com"
          className="flex-1 px-4 py-3 bg-tertiary border border-secondary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          Suscribirse
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <ScrollToTop />
      <footer className="bg-gradient-to-b from-quaternary to-tertiary text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Newsletter Section */}
          <NewsletterSection />

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Información Personal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{footerData.personal.name}</h3>
                <p className="text-primary font-medium mb-4">{footerData.personal.title}</p>
                <p className="text-gray-300 leading-relaxed max-w-md">{footerData.personal.description}</p>
              </div>

              {/* Información de Contacto */}
              <div className="space-y-3">
                <motion.a
                  href={`mailto:${footerData.contact.email}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-primary transition-all group"
                >
                  <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <Mail size={16} />
                  </div>
                  <span>{footerData.contact.email}</span>
                </motion.a>

                <motion.a
                  href={`tel:${footerData.contact.phone}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-primary transition-all group"
                >
                  <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <Phone size={16} />
                  </div>
                  <span>{footerData.contact.phone}</span>
                </motion.a>

                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 text-gray-300 group">
                  <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <MapPin size={16} />
                  </div>
                  <span>{footerData.contact.location}</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Navegación Rápida */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Code className="text-primary" size={20} />
                Navegación
              </h4>
              <ul className="space-y-3">
                {footerData.navigation.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <li key={index}>
                      <motion.button
                        onClick={() => scrollToElement(item.href, 100)}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-gray-300 hover:text-primary transition-all group"
                      >
                        <Icon size={16} className="group-hover:text-primary transition-colors" />
                        <span>{item.name}</span>
                      </motion.button>
                    </li>
                  )
                })}
              </ul>
            </motion.div>

            {/* Servicios */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Briefcase className="text-primary" size={20} />
                Servicios
              </h4>
              <ul className="space-y-3">
                {footerData.services.map((service, index) => (
                  <li key={index}>
                    <motion.a
                      href={service.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-300 hover:text-primary transition-all group"
                    >
                      <ExternalLink size={14} className="group-hover:text-primary transition-colors" />
                      <span>{service.name}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border-t border-secondary/20 pt-8 mb-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Coffee className="text-primary" size={20} />
                <span>Sígueme en mis redes sociales</span>
              </div>

              <div className="flex gap-4">
                {footerData.social.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-tertiary border border-secondary/20 rounded-lg hover:border-primary/30 transition-all group ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon size={20} className="transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Copyright y Footer Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="border-t border-secondary/20 pt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>
                  © {currentYear} {footerData.personal.name}. Todos los derechos reservados.
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <span>Hecho con</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                >
                  <Heart className="text-primary" size={16} fill="currentColor" />
                </motion.div>
                <span>y mucho</span>
                <Coffee className="text-primary" size={16} />
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  )
}
