import React from 'react';
import { motion } from "framer-motion"

export const ContactSection = () => {
  return (
    <motion.div className="container mx-auto w-2/3 lg:w-1/3 min-h-screen" id="contact"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}>
      <h2 className="text-center text-7xl text-white mt-32 mb-10">Contacto</h2>
      <p className="text-center text-xl text-sky-500">¿Interesado en trabajar conmigo?</p>
      <div className="my-5">
        <div className="p-5 space-y-5 shadow-xl">
          <form action="https://formsubmit.co/177ae23b11a1b15994cfa376998fd046" method="POST" >
            <div className="grid grid-cols-2 gap-5">
              {/* Subject */}
              <input type="hidden" name="_subject" value="Formsubmit - Nuevo mensaje!"/>
              {/* Honeypot */}
              <input type="text" name="_honey" style={{display: 'none'}}/>

              {/* Disable Captcha */}
              <input type="hidden" name="_captcha" value="true"/>
              {/* Blacklist */}
              <input type="hidden" name="_blacklist" value="Hola, volia saber el seu preu."/>
              <input type="hidden" name="_blacklist" value="Xin chào, tôi muốn biết giá của bạn."/>
              <input type="hidden" name="_blacklist" value="Hi, მინდოდა ვიცოდე თქვენი ფასი."/>
              <input type="hidden" name="_blacklist" value="Hæ, ég vildi vita verð þitt."/>
              <input type="hidden" name="_blacklist" value="Robertseevy"/>
              <input type="hidden" name="_blacklist" value="Dia duit, theastaigh uaim do phraghas a fháil."/>
              <input type="hidden" name="_blacklist" value="Sveiki, es gribēju zināt savu cenu."/>
              <input type="hidden" name="_blacklist" value="Hai, saya ingin tahu harga Anda."/>
              
              {/* Thanks */}
              <input type="hidden" name="_next" value="https://michael-alvarado-portfolio.vercel.app/thanks"/>
              <input type="hidden" name="_autoresponse" value="Gracias por contactarte conmigo, ¡trataré de responderte en la brevedad!"/>
              {/* Form */}
              <input
                type="text"
                name="Nombre"
                className="bg-sky-900 placeholder-sky-200 text-sky-100 px-4 py-2 focus:outline-none focus:sky-purple-500 col-span-2"
                placeholder="Nombre"
                required
              />
              <input
                type="email"
                name="Email"
                className="bg-sky-900 placeholder-sky-200 text-sky-100 px-4 py-2 focus:outline-none focus:border-sky-500 col-span-2"
                placeholder="Email"
                required
              />
              <textarea
                name="Mensaje"
                cols="10"
                rows="5"
                className="bg-sky-900 placeholder-sky-200 text-sky-100 px-4 py-2 focus:outline-none focus:sky-purple-500 col-span-2"
                placeholder="Escriba su mensaje..."
                required
              ></textarea>
            </div>
            <div className="flex justify-left md:justify-end">
              <button type="submit" className="focus:outline-none mt-5 bg-sky-500 hover:bg-sky-400 px-4 py-2 rounded-lg text-white text-lg shadow-xl transition duration-500 hover:scale-105">¡Enviar!</button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}