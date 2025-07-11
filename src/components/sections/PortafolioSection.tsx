"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  ExternalLink,
  Code,
  Server,
  Globe,
  Calendar,
} from "lucide-react"

import Empty from "../../assets/empty.svg"

import Zaitex from "../../assets/proyectos/zaitex.png"
import Plantillas from "../../assets/proyectos/plantillas.png"
import Cayego from "../../assets/proyectos/cayego.png"

import Assessor from "../../assets/proyectos/assessor.png"
import TiendaVirtual from "../../assets/proyectos/tienda-virtual.png"
import SistemaInventario from "../../assets/proyectos/sistema-inventario.png"
import RMM from "../../assets/proyectos/rmm.png"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css'
import { FreeMode } from "swiper/modules"
import Swal from "sweetalert2"

// Tipos para los proyectos
interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  date: string
}

// Datos de ejemplo para los proyectos
const projects: Record<string, Project[]> = {
  frontend: [
    {
      id: "1",
      title: "Plantillas de LandingPage",
      description:
        "Como parte de mi trabajo en desarrollo web, diseñé y desarrollé seis plantillas de landing page modernas, responsivas y enfocadas en la conversión de leads.",
      image: Plantillas,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/RakonaDev/Plantillas_Landing_LogosPeru",
      liveUrl: "https://plantillas.logosperu.com.pe/landing_page/plantilla12/",
      date: "2025",
    },
    {
      id: "2",
      title: "Web Informativa - CayeGo",
      description: "Desarrollé una web responsive para una empresa de movilidad dentro de Lima, que permite a usuarios individuales y corporativos reservar traslados urbanos, servicios corporativos, traslados al aeropuerto y envío de paquetes.",
      image: Cayego,
      technologies: ["Next.js", "Tyepscript", "Framer Motion", "PHP"],
      githubUrl: "https://github.com/RakonaDev/Cayego",
      liveUrl: "https://cayego.com/",
      date: "2025",
    },
    {
      id: "3",
      title: "Web Informativa - Zaitex",
      description:
        "Desarrollé una web responsiva para una academia digital en Lima con cursos prácticos como Adobe Photoshop, Premiere Pro, AutoCAD, dibujo tradicional e ilustración digital. Implementé filtros de selección por región y modalidad",
      image: Zaitex,
      technologies: ["Angular", "Tailwindcss", "EmailJS"],
      githubUrl: "https://github.com/RakonaDev/ZaiTexFrontend",
      liveUrl: "https://zaitex.edu.pe/",
      date: "2024",
    },
  ],
  backend: [
    
  ],
  fullstack: [
    {
      id: "6",
      title: "Sistema de Facturación, Leasing y Préstamos",
      description:
        "Desarrollé una web corporativa y un módulo administrativo para una fintech registrada ante la SBS, especializada en cambio de divisas, facturación electrónica, leasing operativo y financiero, y préstamos personalizados.",
      image: Assessor,
      technologies: ["Next.js", "Prisma", "Node.js", "Express"],
      githubUrl: "https://github.com",
      liveUrl: "https://assessorperu.com/",
      date: "2025",
    },
    {
      id: "7",
      title: "Sistema de Inventario",
      description:
        "Desarrollé un sistema completo de gestión de inventario para la empresa Logos Perú, orientado al control eficiente de productos, movimientos de stock, proveedores y compras. Este sistema es totalmente administrable, accesible desde web y optimizado para tareas logísticas internas.",
      image: SistemaInventario,
      technologies: ["Next.js", "Tailwindcss", "Laravel", "MySQL"],
      githubUrl: "https://github.com/RakonaDev/InventarioFrontend",
      liveUrl: "https://demo-inventario.logosperu.com/login",
      date: "2025",
    },
    {
      id: "9",
      title: "Tienda Virtual - Sistema",
      description:
        "Desarrollé un sistema integral para la gestión comercial y logística interna de una tienda virtual, orientado a pequeñas y medianas empresas que requieren controlar su inventario, ventas y operaciones internas desde un solo panel web.",
      image: TiendaVirtual,
      technologies: ["Next.js", "Node.js", "Prisma", "MySQL"],
      githubUrl: "https://github.com/RakonaDev/TiendaVirtual",
      liveUrl: "https://tienda.exportando.online/login-sistema",
      date: "2025",
    },
    {
      id: "8",
      title: "Landing Page Administrable",
      description:
        "Desarrollé el sitio web de RMM Consultoría END, una firma de asesoría enfocada en brindar servicios profesionales (jurídicos, contables, fiscales o afines). La plataforma cuenta tanto con una presencia pública clara como un potente sistema administrativo para gestionar productos y operaciones internas.",
      image: RMM,
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com/RakonaDev/rmm-frontend",
      liveUrl: "https://rmmconsultoriaend.com/",
      date: "2025",
    },
  ],
}
/*
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5 }}
      className="bg-tertiary border border-secondary/20 rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex gap-2">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-quaternary/80 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors"
          >
            <Github size={16} />
          </motion.a>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-quaternary/80 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors"
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar size={14} className="mr-1" />
            {project.date}
          </div>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary/30 text-primary text-sm rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
*/

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5 }}
      className="bg-tertiary border border-secondary/20 rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg?height=192&width=400"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex gap-2">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-quaternary/80 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors"
          >
            <Github size={16} />
          </motion.a>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-quaternary/80 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors"
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3 h-14">
          <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar size={14} className="mr-1" />
            {project.date}
          </div>
        </div>

        <p className="text-gray-300 mb-4 h-32 line-clamp-5 leading-relaxed">{project.description}</p>

        {/* Swiper para las tecnologías */}
        <div className="relative">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={8}
            slidesPerView="auto"
            freeMode={true}
            grabCursor={true}
            className="technologies-swiper"
          >
            {project.technologies.map((tech, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-3 py-1 bg-secondary/30 text-primary text-sm rounded-full border border-primary/20 whitespace-nowrap cursor-pointer hover:bg-secondary/50 transition-colors"
                >
                  {tech}
                </motion.span>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Gradiente para indicar que hay más contenido */}
          {project.technologies.length > 4 && (
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-tertiary to-transparent pointer-events-none z-10" />
          )}
        </div>
      </div>
    </motion.div>
  )
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí manejarías el envío del formulario
    console.log("Form submitted:", formData)
    Swal.fire({
      title: "¡Gracias por tu mensaje!, Me contactaré contigo en breve",
      icon: "success",
      confirmButtonText: "Aceptar",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-tertiary border border-secondary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-tertiary border border-secondary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Asunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-tertiary border border-secondary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder="Asunto del mensaje"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-tertiary border border-secondary/30 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          placeholder="Escribe tu mensaje aquí..."
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
        Enviar Mensaje
      </motion.button>
    </motion.form>
  )
}

export default function PortfolioSections() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "fullstack">("frontend")

  const tabs = [
    { id: "frontend" as const, label: "Frontend", icon: Code },
    { id: "backend" as const, label: "Backend", icon: Server },
    { id: "fullstack" as const, label: "Full Stack", icon: Globe },
  ]

  return (
    <div className="min-h-screen bg-quaternary text-white">
      {/* Sección de Proyectos */}
      <section className="py-20 px-4" id="proyectos">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mis <span className="text-primary">Proyectos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Una selección de mis trabajos más destacados, desde aplicaciones frontend hasta soluciones full-stack
              completas.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-tertiary rounded-xl flex gap-3 md:flex-row flex-col p-2 border border-secondary/20">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? "text-white bg-primary shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-secondary/30"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Proyectos */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`${projects[activeTab].length === 0 ? '' :'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-8`}
            >
              {projects[activeTab].map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              {
                projects[activeTab].length === 0 &&
                <div className="flex flex-col items-center justify-center">
                  <h4 className="text-2xl font-bold text-primary">No hay proyectos disponibles</h4>
                  <img src={Empty} alt="Empty" className="w-[500px] h-full object-cover" />
                </div>
              }
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-20 px-4 bg-gradient-to-b from-quaternary to-tertiary">
        <div className="max-w-7xl mx-auto" id="contactos">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hablemos de tu <span className="text-primary">Proyecto</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ¿Tienes una idea increíble? Me encantaría escucharla y ayudarte a hacerla realidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Información de Contacto</h3>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-tertiary rounded-lg border border-secondary/20 hover:border-primary/30 transition-all"
                  >
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-300">juancajas1905@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-tertiary rounded-lg border border-secondary/20 hover:border-primary/30 transition-all"
                  >
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-gray-300">+51 978 791 690</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-tertiary rounded-lg border border-secondary/20 hover:border-primary/30 transition-all"
                  >
                    <div className="p-3 bg-primary/20 rounded-full">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Ubicación</p>
                      <p className="text-gray-300">Los Olivos - Lima, Perú</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Sígueme en</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/RakonaDev", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  ].map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-tertiary border border-secondary/20 rounded-lg hover:border-primary/30 hover:bg-primary/10 transition-all group"
                        aria-label={social.label}
                      >
                        <Icon size={24} className="text-gray-300 group-hover:text-primary transition-colors" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Formulario de Contacto */}
            <div className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-8 border border-secondary/30">
              <h3 className="text-2xl font-bold mb-6 text-primary">Envíame un Mensaje</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
