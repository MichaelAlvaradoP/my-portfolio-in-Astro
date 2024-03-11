
import logoabout from "../assets/about.svg";
// import { Icon } from "astro-icon";
import profilephoto from "../assets/Michael Profile photo.jpeg"
import React from "react";
import { FaLinkedin, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { motion } from "framer-motion"
import { IoLogoJavascript } from "react-icons/io5";
import { SiAstro, SiNextdotjs } from "react-icons/si";
export const About = () => {
  return (
    <motion.div id="about" class="flex flex-col gap-10 items-center min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}>
      <h2 class="mt-10 md:mt-32 text-7xl text-white ">Sobre mi</h2>
      {/* <!-- Flex --> */}
      <div
        class="flex flex-col md:flex-row md:justify-center pt-10 md:w-[60%] 2xl:w-[50%] md:gap-5"
      >
        {/* <!-- ¿Quien soy --> */}
        <div class="w-full flex flex-col items-center xl:w-1/3 shadow-sm">
          <h3 class="text-3xl text-center text-sky-400">¿Quien soy?</h3>
          {/* <!-- Img propia --> */}
          <div class="object-cover w-48 mt-8 text-white overflow-hidden rounded-full">
            <img src={profilephoto} alt="Michael Alvarado's Photo" />
          </div>

          {/* <!-- Descripcion --> */}
          <p class="text-xl w-[82%] md:w-full md:text-lg text-center mt-5 text-sky-200">
            Soy <span class="text-sky-400">autodidacta</span> por naturaleza  y encuentro en el  <span
              class="text-sky-400">aprendizaje constante </span
            >, <span class="text-sky-400">búsqueda</span> de nuevas tecnologías y enfoques laborales, la <span class="text-sky-400">clave</span> para mi <span class="text-sky-400">crecimiento</span> tanto profesional como personal.
          </p>
          {/* <!-- CV y Linkedin--> */}
          <div
            class="w-1/2 md:w-2/3 flex flex-row justify-center items-center gap-x-5 mt-10 mb-10 md:mb-0 text-sky-600"
          >
            <a class="w-[89%] transition duration-200 hover:scale-105 text-7xl" href="https://drive.google.com/file/d/1nG95Kwtu2k39-qDqVhcMLOPeJ8a990Yl/view?usp=sharing" target="_blank">
              <BsFileEarmarkPersonFill />
            </a>
            <a class="w-[89%] transition duration-200 hover:scale-105 text-7xl" href="https://www.linkedin.com/in/michael-alvarado-77265126b/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
        {/* <!-- Tecnologías --> */}
        <div
          class="flex flex-col justify-center md:justify-start place-items-center gap-5 text-3xl text-center text-sky-400"
        >
          {/* <!-- Logos tecnologías --> */}
          Tecnologías

          <div class=" px-5 md:px-0 md:w-[45%] lg:w-[30%]  flex flex-row md:flex-col gap-10 justify-center pt-10 text-7xl">
            <FaReact class="text-sky-500" />
            <FaNodeJs class="text-green-500" />
            <IoLogoJavascript class="text-yellow-500" />

          </div>
          <div class=" px-5 md:px-0 md:w-[45%] lg:w-[30%] flex flex-row md:flex-col gap-10 justify-center pt-10 md:pt-2 text-7xl">
            <FaGitAlt class="text-orange-500" />
            <SiAstro  class="text-purple-800" />
            <SiNextdotjs class="text-white" />
            
            {/* <Icon class="text-orange-500 w-full" name="simple-icons:git" /> */}
            {/* <Icon class="text-purple-800 w-full" name="simple-icons:astro" /> */}
            {/* <Icon class="text-white w-full" name="cib:next-js" /> */}

          </div>
        </div>
      </div>

    </motion.div>
  )
}

