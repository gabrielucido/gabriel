import React, { useEffect, useState } from "react";
import avatar from "../../assets/avatar.jpg";

const NavBar = () => {
  const [headerClasses, setHeaderClasses] = useState("");
  const handleScroll = (event) => {
    const header = document.querySelector('#navbar');
    if (window.scrollY > (header.clientHeight / 2)) {
      setHeaderClasses("fixed-header bg-blue-500 color-gray-200 shadow");
    } else {
      setHeaderClasses("fixed-header bg-transparent color-gray-200");
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <header id="navbar" className={headerClasses}>
      <div className="container">
        <nav className="row py-2 flex flex-between items-center">
          <img src={avatar} height="40" alt="Gabriel Rodrigues." />
          <ul className="flex">
            <li>
              <a className="mr-2" href="#main">Inicio</a>
            </li>
            <li>
              <a className="mr-2" href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
