import React from 'react'
import Button from '../../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
    return (
        <section id="contact" className="md:w-4/5 mx-auto pt-20 md:pt-32 md:mb-24 flex flex-1 flex-col lg:flex-row items-start sm:items-center">

            <h1 className="sm:w-2/3 mb-1 text-3xl sm:text-6xl lg:text-7xl font-medium">
                Did I peak your intrest?
                <br />
                {/** Change of text based on where the contact box is positioned (below or aside) */}
                <h1 className="lg:hidden">Use the form below.</h1>
                <h1 className="hidden lg:block">Use the form aside.</h1>
            </h1>

            {/** Form with netlify backend */}
            <form method="POST" name="inquiries" data-netlify="true" className="flex flex-col xl:self-auto mt-2 lg:mt-0 lg:ml-4 px-4 py-6 sm:py-5 xl:flex-grow bg-gray-900 rounded-lg shadow-lg">
                <input type="hidden" name="form-name" value="inquiries" />

                <div className="flex flex-col mb-5">
                    <input className="border-0 border-b-2 border-blue-900 focus:border-blue-600 bg-gray-900 text-gray-100 outline-none" name="name" type="text" placeholder="Your Name" required />
                </div>

                <div className="flex flex-col mb-5 lg:my-1 lg:mb-4">
                    <input className="border-0 border-b-2 border-blue-900 focus:border-blue-600 bg-gray-900 text-gray-100 outline-none" name="email" type="email" placeholder="Your E-Mail" required />
                    <label className="text-gray-100 text-sm my-1 font-light">Please leave your email address, so I can get back to you.</label>
                </div>

                <div className="flex flex-col mb-2">
                    <label className="text-gray-100 text-sm mb-0.5 font-light">Please write your message here.</label>
                    <textarea className="border-0 border-b-2 border-blue-900 focus:border-blue-600 bg-gray-900 text-gray-100 outline-none resize-none" name="message" type="text" placeholder="Your Message" minLength={2} required rows={3} />
                </div>

                {/** Offer an alternative to the form for the enduser */}
                <a href="mailto:eren.uestuen@gmail.com" className="mb-4 text-gray-100 text-sm underline">Hate forms? Send me an email instead.</a>

                <div className="mb-2">
                     {/** Custom button component as submit type */}
                    <Button submit>
                        <FontAwesomeIcon icon={faPaperPlane} /> Send
                    </Button>
                </div>
            </form>
        </section>
    )
}