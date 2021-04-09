import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'


export default function Footer() {
    return (
        <footer className="w-full bg-blue-700 pt-10 pb-3 md:py-8 mt-48">
            <div className="sm:w-4/5 mx-auto flex flex-col sm:flex-row items-center justify-center text-gray-200">

                {/** Simple copyright notice with dynamic date */}
                <h2 className="mt-3 sm:mt-0 order-1 sm:order-none text-sm sm:text-base font-medium capitalize">Copyright {new Date().getFullYear()} &copy; Eren Üstün. All rights reserved.</h2>

                {/** Social links */}
                <div className="sm:ml-5 flex gap-x-3">
                    <motion.a
                        href="https://github.com/erenustun"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, }}>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/erenustun/"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, }}>
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </motion.a>
                    <motion.a
                        href="mailto:eren.uestuen@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, }}>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </motion.a>
                </div>
            </div>
        </footer>

    );
}