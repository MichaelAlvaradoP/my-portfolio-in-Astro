import React from 'react'
import { motion } from "framer-motion"

export const Testabout = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }} className='flex flex-col gap-10 items-center min-h-screen'>
        <div className='flex flex-col gap-10 items-center min-h-screen text-white text-5xl'>TestAbout</div>
        Testabout</motion.div>
  )
}
