import React from 'react'
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import openicon from '../assets/logo-open-icon.svg';
// import LogoMichael from '../components/Logo.astro';



export const Navigation = () => {
    let Links = [
        { name: 'Inicio', link: 'home' },
        { name: 'Sobre mi', link: 'about' },
        { name: 'Proyectos', link: 'projects' },
        { name: 'Contacto', link: 'contact' },
    ];
    let [open, setOpen] = React.useState(false);
    return (
        <motion.div className="shadow-md w-full fixed top-0 left-0 z-10 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            {/* Nombre/logo */}
            <div className='md:flex items-center justify-between bg-sky-700 py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-3  text-white duration-300 '>

                    Michael Alvarado

                </div>
                {/* Botón desplegar menu */}
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-2 cursor-pointer md:hidden'>
                    <img name={open ? 'close' : 'menu'} src={openicon} width="50" alt="Open icon" />

                </div>
                {/* Lista de enlaces */}
                <ul className={`md:flex md:items-center md:pb-0 md:pt-0 pb-8 pt-2 absolute md:static bg-sky-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-300 ease-in ${open ? 'opacity-100  top-[63px]' : 'top-[-500px]'} md:opacity-100 opacity-0`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 text-center cursor-pointer">
                                <Link to={link.link} className='text-sky-200 hover:text-sky-100 duration-300' spy={true}
                                    smooth={true} duration={500}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </motion.div>
    )
}


// import React, { useState } from 'react';

// export const Navigation = () => {
//     let Links = [
//         { name: 'INICIO', link: '#home' },
//         { name: 'SOBRE MI', link: '#about' },
//         { name: 'PROYECTOS', link: '#projects' },
//         { name: 'CONTACTO', link: '#contact' },
//     ];
//     let [open, setOpen] = useState(false);

//     const toggleMenu = () => {
//         setOpen(!open);
//     };

//     return (
//         <div className={`w-full ${open ? 'h-auto' : 'h-16'} md:h-auto md:w-auto md:flex md:flex-col md:justify-start md:relative md:bg-transparent md:z-auto md:pt-0 md:pb-0 transition-all duration-500 ease-in z-10 bg-sky-700 ${open ? 'pt-8 pb-8' : 'pt-2 pb-2'} ${open ? 'top-[63px] opacity-100' : 'top-[-500px] opacity-0'}`}>
//             <div className='md:flex items-center justify-between bg-sky-700 py-4 md:px-10 px-7'>
//                 <div className='font-bold text-2xl cursor-pointer flex items-center text-white duration-500'>
//                     <span className='text-3xl text-white mr-1 pt-2'>
//                         {/* <img src={logotool} width="40" alt="Michael Alvarado's Logo" /> */}
//                     </span>
//                     Michael Alvarado
//                 </div>
//                 <div onClick={toggleMenu} className='text-3xl absolute right-8 top-2 cursor-pointer md:hidden '>
//                     <img name={open ? 'close':'menu'} src={openicon} width="50" alt="Open icon" />
//                 </div>
//                 <ul className="md:flex md:items-center md:pl-0 text-center md:w-auto">
//                     {Links.map((link) => (
//                         <li key={link.name} className="md:ml-8 text-xl my-7">
//                             <a href={link.link} className='text-sky-200 hover:text-sky-100 duration-500'>{link.name}</a>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };