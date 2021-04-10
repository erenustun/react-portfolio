import React from 'react'
import Button from '../../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faLaptopCode, faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import profile from '../../assets/images/profile_compressed.jpg'
import profileSquare from '../../assets/images/profile_square_compressed.jpg'

export default function Profile() {
    return (
        <section id="profile" className="sm:h-auto md:w-4/5 mx-auto pt-12 md:pt-32 mb-12 md:mb-24 flex flex-col items-center justify-center sm:justify-start">
            <h1 className="mb-1 text-3xl font-medium self-start">Profile</h1>

            {/** Card */}
            <div className="h-auto flex">
                <div className="py-3 px-2 xl:mt-3 sm:px-3 bg-gray-900 rounded-lg shadow-lg">

                    <img src={profileSquare} className="h-32 xl:hidden mx-3 mt-2 mb-4 rounded-lg shadow" alt="portrait" />

                    {/** About work, aswell as origin */}
                    <div className="flex items-center mb-2 ml-2">
                        <div className="w-14 flex items-center">
                            <FontAwesomeIcon icon={faLaptopCode} />
                        </div>
                        <h4 className="font-semibold">Software Engineer</h4>
                    </div>
                    <div className="flex items-center mb-5 ml-2">
                        <div className="w-14 flex items-center">
                            <FontAwesomeIcon icon={faGlobeEurope} />
                        </div>
                        <h4>Basel, Switzerland</h4>
                    </div>

                    {/** Bio text */}
                    <p className="text-lg mb-4 ml-2 leading-relaxed">
                        As a trained Application Developer EFZ, I bring two years of experience in application development and client-focused work.
                        Due to my empathic nature, it is easy for me to react focused and flexible to client needs.
                        <br />
                        <br />
                        I have worked in various projects as a project member or as a project coordinator.
                        In addition, I also worked as a 3rd level supporter and performed coordinative activities, in which I was able to prove my versatility.
                        <br />
                        <br />

                        {/** Bullet points */}
                        <ul className="leading-relaxed">
                            <h4 className="uppercase font-semibold">My expertise</h4>
                            <li>💻 Two years of experience in front- and backend projects</li>
                            <li>⌨️ Development in JavaScript and PHP, as well as experience in React and TailwindCSS</li>
                            <li>👨‍💻 Management and further development of Larvel web applications</li>
                            <li>🗣️ Fluent in written and spoken German</li>
                        </ul>
                    </p>

                    {/** Download buttons to the cv in English, aswell as German */}
                    <div className="pb-2 lg:pb-1 flex flex-col lg:flex-row">
                        <Button href="/static/documents/CV-EUe-ENG.pdf" className="mb-3 lg:mb-0 lg:ml-2">
                            <FontAwesomeIcon icon={faFilePdf} /> More Info (CV) [ENG]
                            </Button>
                        <Button href="/static/documents/CV-EUe-GER.pdf" className="lg:ml-4">
                            <FontAwesomeIcon icon={faFilePdf} /> Mehr Info (CV) [GER]
                            </Button>
                    </div>
                </div>

                {/** Image overlapping the card object */}
                <img src={profile} className="xl:-ml-2 hidden xl:block h-84 self-center z-10 rounded-2xl shadow" alt="portrait" />

            </div>
        </section>
    )
}