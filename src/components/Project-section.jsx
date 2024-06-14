// import { Icon } from "astro-icon";
import AscentPhoto from "../assets/Ascent.png"
import { motion } from "framer-motion"

import React from 'react';

export const ProjectSection = () => {
  return (
    <motion.div id="projects" className="min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}>
      <h2 className="pt-20 md:pt-32 text-7xl text-white text-center mb-16 md:mb-28">
        Proyectos
      </h2>
      {/* <!-- Grid proyectos --> */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
        {/* <!-- Proyecto --> */}
        <div className="relative">
          <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={AscentPhoto}
                  alt="Ascent Project"
                />
              </a>
              <div className="p-5">
                <a href="https://www.ascent.cl/"
                  target="_blank">
                  <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Ascent
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Landing page del proyecto "Ascent", creado con Astro y componentes de React estilizados con TailwindCSS.
                </p>

                <div className="mt-16">
                  <a
                    className="w-12 text-slate-700 transition duration-200 hover:scale-105 absolute bottom-3 right-5"

                  >
                    {/* <!-- <Icon name="mdi:web" /> --> */}
                  </a>
                  {/* <!-- <a
                    className="w-12 text-slate-700 transition duration-200 hover:scale-105 absolute bottom-0 right-2 pt-2"
                    href=""
                    target="_blank"
                  >
                    <Icon name="mdi:github" /> -->
                  <!-- </a> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

