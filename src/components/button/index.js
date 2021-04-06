import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
    {/** For buttons in forms (submit type)... */ }
    if (!props.submit) {
        return (
            <a
                className={`px-3 py-1 rounded uppercase text-gray-100 bg-blue-700 hover:bg-blue-800 font-quatro ${props.className}`} // Features fixed classes aswell as dynamic classes for custom usages
                target="_blank"
                rel="noreferrer"
                href={props.href}
                onClick={props.onclick}>
                {props.children}
            </a>
        )
        {/** For simple buttons outside of forms... */ }
    } else {
        return (
            <button
                className={`px-3 py-1 rounded uppercase text-gray-100 bg-blue-700 hover:bg-blue-800 font-quatro ${props.className}`}
                type="submit">
                {props.children}
            </button>
        )
    }
}