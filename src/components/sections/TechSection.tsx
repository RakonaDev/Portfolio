"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Code2, Database, Globe, Cloud, Wrench, ChevronLeft, ChevronRight } from "lucide-react"

import Tailwindcss from "../../assets/logos/tailwind.svg"
import Typescript from "../../assets/logos/typescript.svg"
import React from "../../assets/logos/react.svg"
import Nextjs from "../../assets/logos/nextjs.svg"

import Nodejs from "../../assets/logos/nodejs.svg"
import Express from "../../assets/logos/express.svg"
import Laravel from "../../assets/logos/laravel.svg"
import Mysql from "../../assets/logos/mysql.svg"
import Prisma from "../../assets/logos/prisma.svg"

import Git from "../../assets/logos/git.svg"
import Docker from "../../assets/logos/docker.svg"
import Vercel from "../../assets/logos/vercel.svg"
import Cpanel from "../../assets/logos/cpanel.svg"

import Vscode from "../../assets/logos/vscode.svg"
import Postman from "../../assets/logos/postman.svg"

import 'swiper/swiper-bundle.css'

// Tipos para las tecnologías
interface Technology {
  name: string
  icon: string
  image: string // Nueva propiedad para la URL de la imagen
  category: string
}

// Datos de tecnologías organizadas por categorías
const techCategories = {
  all: {
    title: "Todas",
    icon: Code2,
    color: "bg-secondary",
    technologies: [] as Technology[],
  },
  frontend: {
    title: "Frontend",
    icon: Globe,
    color: "bg-secondary",
    technologies: [
      { name: "React", icon: "⚛️", image: React, category: "frontend" },
      { name: "Next.js", icon: "▲", image: Nextjs, category: "frontend" },
      { name: "TypeScript", icon: "📘", image: Typescript, category: "frontend" },
      { name: "Tailwind CSS", icon: "🎨", image: Tailwindcss, category: "frontend" },
    ],
  },
  backend: {
    title: "Backend",
    icon: Database,
    color: "bg-secondary",
    technologies: [
      { name: "Node.js", icon: "🟢", image: Nodejs, category: "backend" },
      { name: "Express", icon: "🚀", image: Express, category: "backend" },
      { name: "Laravel", icon: "🐍", image: Laravel, category: "backend" },
      { name: "MySQL", icon: "⚡", image: Mysql, category: "backend" },
      { name: "Prisma", icon: "⚡", image: Prisma, category: "backend" },
    ],
  },
  cloud: {
    title: "DevOps",
    icon: Cloud,
    color: "bg-secondary",
    technologies: [
      { name: "Docker", icon: "🐳", image: Docker, category: "cloud" },
      { name: "Vercel", icon: "▲", image: Vercel, category: "cloud" },
      { name: "Cpanel", icon: "🔥", image: Cpanel, category: "cloud" },
      { name: "Git", icon: "📝", image: Git, category: "cloud" },
    ],
  },
  tools: {
    title: "Herramientas",
    icon: Wrench,
    color: "bg-secondary",
    technologies: [
      { name: "VS Code", icon: "💻", image: Vscode, category: "tools" },
      { name: "Postman", icon: "📮", image: Postman, category: "tools" },
    ],
  },
}

// Llenar la categoría "all" con todas las tecnologías
techCategories.all.technologies = Object.values(techCategories)
  .filter((cat) => cat.title !== "Todas")
  .flatMap((cat) => cat.technologies)

const TechCard = ({ tech, index }: { tech: Technology; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-tertiary/80 backdrop-blur-sm rounded-xl p-6 border border-secondary/30 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col items-center justify-center text-center"
    >
      <div className="mb-4">
        <img
          src={tech.image || "/placeholder.svg"}
          alt={`${tech.name} logo`}
          className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-white group-hover:text-primary transition-colors text-sm">{tech.name}</h3>
    </motion.div>
  )
}

const CategoryButton = ({
  data,
  isActive,
  onClick,
}: {
  category: string
  data: typeof techCategories.frontend
  isActive: boolean
  onClick: () => void
}) => {
  const Icon = data.icon

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? `bg-gradient-to-r ${data.color} text-white shadow-lg`
          : "bg-tertiary/30 text-gray-300 hover:bg-tertiary/50 hover:text-white"
      }`}
    >
      <Icon size={16} />
      <span className="text-sm font-medium">{data.title}</span>
      <span className="text-xs opacity-75">({data.technologies.length})</span>
    </motion.button>
  )
}

export default function TechSection() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof techCategories>("all")
  const currentCategory = techCategories[selectedCategory]
  const totalTechs = Object.values(techCategories).reduce(
    (acc, category) => (category.title !== "Todas" ? acc + category.technologies.length : acc),
    0,
  )

  return (
    <section className="py-16 px-4 bg-quaternary text-white">
      <div className="max-w-7xl mx-auto" id="habilidades">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="text-primary">Tecnologías</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Las herramientas y tecnologías que domino para crear soluciones digitales excepcionales
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{totalTechs}+</div>
              <div className="text-xs text-gray-400">Tecnologías</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-xs text-gray-400">Categorías</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4+</div>
              <div className="text-xs text-gray-400">Años</div>
            </div>
          </div>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {Object.entries(techCategories).map(([category, data]) => (
              <CategoryButton
                key={category}
                category={category}
                data={data}
                isActive={selectedCategory === category}
                onClick={() => setSelectedCategory(category as keyof typeof techCategories)}
              />
            ))}
          </div>
        </motion.div>

        {/* Current Category Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${currentCategory.color} bg-opacity-20`}>
                <currentCategory.icon className="text-white" size={24} />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">{currentCategory.title}</h3>
                <p className="text-sm text-gray-400">
                  {currentCategory.technologies.length} tecnología{currentCategory.technologies.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Technologies Swiper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-primary/50",
                bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
              className="!py-20 !px-14"
            >
              {currentCategory.technologies.map((tech, index) => (
                <SwiperSlide key={tech.name} className="h-auto">
                  <TechCard tech={tech} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary/20 hover:bg-primary/40 backdrop-blur-sm rounded-full p-2 transition-all duration-300 group">
              <ChevronLeft className="text-white group-hover:text-primary" size={20} />
            </button>
            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary/20 hover:bg-primary/40 backdrop-blur-sm rounded-full p-2 transition-all duration-300 group">
              <ChevronRight className="text-white group-hover:text-primary" size={20} />
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
            <Code2 className="text-primary mx-auto mb-3" size={40} />
            <h3 className="text-xl font-bold text-white mb-3">Siempre Aprendiendo</h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm">
              La tecnología evoluciona constantemente, y yo también. Siempre estoy explorando nuevas herramientas y
              metodologías para mantenerme a la vanguardia del desarrollo web.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
