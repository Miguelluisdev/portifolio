import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState } from "react";

const Header = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='flex justify-around items-center w-full h-20 text-branco fixed bg-transparent px-4 '>
      <div>
        <h1 className='text-2xl font-Montserrat font-bold ml-2 hover:text-az duration-500 shadow-AzulEscuro drop-shadow-lg shadow-2xl  '>Miguel</h1>
      </div>
      <ul className='hidden lg:flex'>
        <li className='px-4 cursor-pointer capitalize text-lg hover:text-az duration-500 shadow-AzulEscuro shadow-md ' ><Link to="/">Home</Link></li>
        <li className='px-4 cursor-pointer capitalize text-lg hover:text-az duration-500 shadow-AzulEscuro shadow-md  '><Link to="/Skills">Habilidades</Link></li>
        <li className='px-4 cursor-pointer capitalize text-lg hover:text-az duration-500 shadow-AzulEscuro shadow-md'><Link to="/Project">Projetos</Link></li>
        <li className='px-4 cursor-pointer capitalize text-lg hover:text-az duration-500 shadow-AzulEscuro shadow-md '><Link to="/Contact">Contatos</Link></li>
      </ul>
      {/* Use media query to hide/show the hamburger icon based on screen size */}
      <div className="cursor-pointer pr-4 z-10 xl:hidden animate-bounce animate-infinite animate-duration-[2000ms] animate-delay-100" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={30} className="animate-rotate-y animate-once animate-duration-[2000ms] animate-delay-100" /> : <FaBars size={30} />}
      </div>
      <ul className={`flex flex-col justify-center items-center absolute top-0 pt-50 m-11  w-400  h-50 bg-ad border border-r-branco rounded-md  ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <li className='px-4 cursor-pointer capitalize text-lg hover:text-az duration-500 text-ab shadow-AzulEscuro shadow-md '><Link to="/">Home</Link></li>
        <li className='px-4 cursor-pointer capitalize text-lg hover:text-az duration-500 shadow-AzulEscuro shadow-md '><Link to="/Skills">Habilidades</Link></li>
        <li className='px-4 cursor-pointer capitalize text-lg hover:text-az duration-500 shadow-AzulEscuro shadow-md '><Link to="/Project">Projetos</Link></li>
        <li className='px-4 cursor-pointer capitalize text-lg hover:text-az duration-500 shadow-AzulEscuro shadow-md '><Link to="/Contact">Contatos</Link></li>
      </ul>
    </header>
  );
})

export default Header;
