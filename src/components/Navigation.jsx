import React from 'react'
import buttonicon from '../assets/reorder-three-outline.svg';
import logotool from '../assets/logo-tool.svg';


export const Navigation = () => {
    let Links = [
        { name: 'INICIO', link: '#home' },
        { name: 'SOBRE MI', link: '#about' },
        { name: 'PROYECTOS', link: '#projects' },
        { name: 'CONTACTO', link: '#contact' },
    ]
    return (
        <div className="shadow-md w-full fixed bg-primary top-0 left-0 ">
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center  text-primary-light hover:text-white duration-500'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <img src={logotool} width="40" alt="Michael Alvarado's Logo" />
                    </span>
                    Michael Alvarado
            </div>

            <ul className='md:flex items-center '>
                {
                    Links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                            <a href={link.link} className='text-primary-light hover:text-white duration-500'>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
            </div>
        </div>
    )
}

