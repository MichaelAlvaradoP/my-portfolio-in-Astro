import React from 'react'
import logotool from '../assets/logo-tool.svg';
import openicon from '../assets/logo-open-icon.svg';


export const Navigation = () => {
    let Links = [
        { name: 'INICIO', link: '#home' },
        { name: 'SOBRE MI', link: '#about' },
        { name: 'PROYECTOS', link: '#projects' },
        { name: 'CONTACTO', link: '#contact' },
    ];
    let [open, setOpen] = React.useState(false);
    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-10">
            {/* Nombre/logo */}
            <div className='md:flex items-center justify-between bg-sky-700 py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center  text-white duration-500'>
                    <span className='text-3xl text-white mr-1 pt-2'>
                        {/* <img src={logotool} width="40" alt="Michael Alvarado's Logo" /> */}
                    </span>
                    Michael Alvarado
            </div>
            {/* Botón desplegar menu */}
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-2 cursor-pointer md:hidden '>
                <img name={open ? 'close':'menu'} src={openicon} width="50" alt="Open icon"  />

            </div>
            {/* Lista de enlaces */}
            <ul className={`md:flex md:items-center md:pb-0 md:pt-0 pb-8 pt-2 absolute md:static bg-sky-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'opacity-100  top-[63px]' :'top-[-500px]'} md:opacity-100 opacity-0`}>
                {
                    Links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 text-center">
                            <a href={link.link} className='text-sky-200 hover:text-sky-100 duration-500'>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
            </div>
        </div>
    )
}

