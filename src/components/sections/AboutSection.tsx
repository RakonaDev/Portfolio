"use client"
import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Heart, Download } from "lucide-react"
import User from "../../assets/o.jpg"

// Tipos para la experiencia laboral
interface Experience {
  id: string
  position: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

// Datos de experiencia laboral
const experiences: Experience[] = [
  {
    id: "1",
    position: "Trainee Full Stack Developer",
    company: "Logos Perú",
    location: "Híbrido",
    period: "2025 - Presente",
    description: [
      "Lideré el desarrollo de aplicaciones web escalables usando React , Node.js y Laravel",
      "Implementé arquitecturas MVC que mejoraron el rendimiento en un 40%",
      "Realizé entregas de alta calidad y mejores prácticas de código",
      "Colaboré con mi equipo seleccionado para entregar proyectos en tiempo y forma",
    ],
    technologies: ["React", "Node.js", "TypeScript", "CPanel", "Docker", "Next.js", "Laravel"],
  },
  {
    id: "2",
    position: "Freelance Frontend Developer",
    company: "",
    location: "Remoto",
    period: "2024 - 2025",
    description: [
      "Desarrollé paginas web de forma freelance para clientes locales",
      "Optimicé aplicaciones web logrando mejoras del 60% en Core Web Vitals",
      "Implementé sistemas de design systems reutilizables",
      "Trabajé en estrecha colaboración con diseñadores UX/UI",
    ],
    technologies: ["React", "Tailwindcss", "Sass", "Figma", "Git"],
  },
  /*
  {
    id: "3",
    position: "Junior Web Developer",
    company: "StartupTech",
    location: "Ciudad, País",
    period: "2020 - 2021",
    description: [
      "Desarrollé y mantuve sitios web corporativos usando HTML, CSS y JavaScript",
      "Participé en la migración de sitios legacy a tecnologías modernas",
      "Apoyé en la implementación de funcionalidades backend básicas",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  */
]

// Datos personales
const personalInfo = {
  name: "Juan Carlos Cajas",
  title: "Full Stack Developer",
  location: "Los Olivos - Lima, Perú",
  experience: "2 años",
  projects: "10+",
  description: `Soy un desarrollador full stack apasionado por crear soluciones digitales innovadoras 
    que impacten positivamente en la vida de las personas. Con más de 4 años de experiencia, 
    me especializo en tecnologías modernas como React, Node.js y TypeScript.`,
  highlights: [
    "Especialista en desarrollo web moderno",
    "Experiencia en arquitecturas escalables",
    "Enfoque en UX/UI y performance",
    "Mentoría y liderazgo técnico",
  ],
}

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-secondary" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 border-2 border-quaternary" />

      <div className="bg-tertiary/50 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 hover:border-primary/30 transition-all duration-300 group">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
              {experience.position}
            </h3>
            <div className="flex items-center gap-4 text-gray-300 mt-1">
              <div className="flex items-center gap-1">
                <Briefcase size={16} />
                <span className="font-medium">{experience.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-primary font-medium mt-2 md:mt-0">
            <Calendar size={16} />
            <span>{experience.period}</span>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {experience.description.map((item, idx) => (
            <li key={idx} className="text-gray-300 flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
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

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-quaternary text-white" > 
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16" id="nosotros">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="text-primary">Mí</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce mi trayectoria profesional y lo que me apasiona del desarrollo web
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Foto y Info Personal */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
            <div className="bg-tertiary/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 sticky top-8">
              {/* Foto de perfil */}
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-primary/20"
                >
                  <img
                    src={User}
                    alt="Foto profesional"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </motion.div>
              </div>

              {/* Info básica */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h3>
                <p className="text-primary font-medium mb-4">{personalInfo.title}</p>
                <div className="flex items-center justify-center gap-1 text-gray-300 mb-4">
                  <MapPin size={16} />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-secondary/20 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{personalInfo.experience}</div>
                  <div className="text-sm text-gray-300">Experiencia</div>
                </div>
                <div className="text-center p-3 bg-secondary/20 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{personalInfo.projects}</div>
                  <div className="text-sm text-gray-300">Proyectos</div>
                </div>
              </div>

              {/* Botón CV */}
              <motion.a
                href="Juan_Carlos_CV.pdf"
                download='Juan_Carlos_CV.pdf'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full ring-2 ring-primary cssbuttons-io text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                  Descargar CV
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Descripción y Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Descripción */}
            <div className="bg-tertiary/30 backdrop-blur-sm rounded-xl p-8 border border-secondary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Heart className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Mi Pasión</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">{personalInfo.description}</p>
            </div>

            {/* Highlights */}
            <div className="bg-tertiary/30 backdrop-blur-sm rounded-xl p-8 border border-secondary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Fortalezas Clave</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalInfo.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-gray-300">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Experiencia Laboral */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-primary/20 rounded-xl">
              <GraduationCap className="text-primary" size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Experiencia Profesional</h3>
              <p className="text-gray-300">Mi trayectoria en el mundo del desarrollo</p>
            </div>
          </div>

          <div className="relative">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
