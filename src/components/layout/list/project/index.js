import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import Button from '../../../button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function ProjectLis(props) {
    
    /** Specify projects data */
    const [data] = useState(props.data)

    return (
        <div className="flex flex-wrap gap-3 flex-col sm:flex-row justify-between">

            {/** Go through data object and use its values */}
            {data.map((data) => {
                return (
                    <motion.div
                        className="w-full sm:w-72 lg:w-72 md:w-auto sm:mb-0"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 150, damping: 15 }}
                        >

                        <img src={`/static/images/${data.image}`} className="rounded-lg hidden sm:block" alt="Project Thumbnail" />

                        {/** Name of the project */}
                        <h2 className="mb-1 text-2xl font-medium capitalize">{data.name}</h2>

                        {/** Description of the project */}
                        <p className="my-1 mb-3 md:max-w-sm text-lg">{data.description}</p>

                        {/** 
                         * Flexbox for the links of the project
                         * Only show button, when the urls' string != empty 
                         */}
                        <div className="flex my-2">
                            {data.urls.demo &&
                                <Button href={data.urls.demo} className="mr-2" submit={false}>
                                    <FontAwesomeIcon icon={faLaptopCode} /> demo
                                </Button>
                            }

                            {data.urls.github &&
                                <Button href={data.urls.github} submit={false}>
                                    <FontAwesomeIcon icon={faGithub} /> github
                                </Button>
                            }
                        </div>

                        {/** Project tags */}
                        <div id="tags" className="flex items-center flex-wrap gap-y-1 text-sm mt-2 mb-10">
                            <h4 className="uppercase mr-1">tags:</h4>
                            {data.tags.map((tag) => {
                                return (
                                    <p className="capitalize mr-3 hover:underline cursor-pointer">{tag}</p>
                                )
                            })}
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}