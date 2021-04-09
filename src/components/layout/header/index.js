import React, { useState } from 'react'
import Headroom from 'react-headroom'
import { NavHashLink as Link } from 'react-router-hash-link'
import { Twirl as Hamburger } from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'


export default function Header() {
  /** Visibility for mobile navigation on hamburger icon activity */
  const [isVisible, setVisibility] = useState(false)

  /** Hide mobile nav */
  const closeMobileMenu = () => setVisibility(false)

  return (
    <Headroom>
      <header>

        <div className="logo-nav lg:w-4/5 lg:mx-auto lg:flex lg:items-center lg:justify-centers">

          <div className="logo-container">
            <Link to="/#" className="font-semibold uppercase text-lg lg:text-4xl hover:cursor-pointer text-gray-100 select-none cursor-pointer">eren.develops</Link>
          </div>

          {/** Social links */}
          <nav>
            <ul className={isVisible ? 'nav-options active' : 'nav-options lg:flex lg:gap-x-8 lg:justify-end'}>
              <li className="option hover:text-gray-100 " onClick={closeMobileMenu}>
                <Link smooth to="/#home" activeClassName="active">Home</Link>
              </li>
              <li className="option hover:text-gray-100" onClick={closeMobileMenu}>
                <Link smooth to="/#profile" activeClassName="active">Profile</Link>
              </li>
              <li className="option hover:text-gray-100" onClick={closeMobileMenu}>
                <Link smooth to="/#skills" activeClassName="active">Skills</Link>
              </li>
              <li className="option hover:text-gray-100" onClick={closeMobileMenu}>
                <Link smooth to="/#projects" activeClassName="active">Projects</Link>
              </li>
              <li className="option hover:text-gray-100" onClick={closeMobileMenu}>
                <Link smooth to="/#contact" activeClassName="active">Contact</Link>
              </li>
            </ul>
          </nav>

          {/** Social links */}
          <div className="absolute right-0 mr-16 mt-1 lg:mt-0 pr-1 lg:pr-0">
            <motion.a
              href="https://www.linkedin.com/in/erenustun/"
              className="mr-1 lg:ml-3 text-xl lg:text-lg"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, }}>
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </motion.a>
            <motion.a
              href="https://github.com/erenustun"
              className="ml-3 text-xl lg:text-lg"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, }}>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </motion.a>
          </div>
        </div>

        {/** Hamburger icon for responsive design */}
        <div className="block lg:hidden">
          <Hamburger size={24} duration={0.2} direction={"right"} toggled={isVisible} toggle={setVisibility} />
        </div>

      </header>
    </Headroom>
  );
}