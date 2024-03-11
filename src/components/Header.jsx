import React from 'react'
import { motion } from "framer-motion"



export const Header = () => {
  return (
    <motion.div
      id="home"
      class="flex flex-col justify-center items-center min-h-screen mt-5 md:mt-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}>
      <section class="md:w-2/3 2xl:w-1/2 pt-24">
        <div class="text-center md:text-left">
          <h1
            class="text-white pb-3 text-5xl md:text-5xl flex items-center justify-center md:justify-start"
          >
            Michael Alvarado
          </h1>

          <p className="text-sky-500 pb-7 text-5xl md:mt-5">Desarrollador Web</p>
          <p className="text-sky-200 pb-7 text-xl">
            Especializado en la creación de <span className="text-sky-400">experiencias web</span> impactantes.
            Combino retroalimentación y aprendizaje con el fin de mejorar constantemente, resaltando mi enfoque en
            el <span className="text-sky-400">diseño</span> y la <span className="text-sky-400">experiencia del usuario</span>,
            así como en la <span className="text-sky-400">implementación de pruebas</span> para garantizar la calidad deseada en los proyectos.
          </p>
        </div>
        <div className="text-center relative pt-20">
          <h2 className="text-sky-500 text-4xl md:text-5xl lg:text-5xl py-10 mb-5">
            ¿Interesado en mi trabajo?
          </h2>
          <a
            className="text-white px-4 py-2 text-lg md:text-2xl rounded-md inline-block shadow-xl bg-sky-500 hover:bg-sky-400 transition duration-200 hover:scale-105"
            href="#projects">Mis proyectos</a>
        </div>
      </section>
    </motion.div>
  );
}
