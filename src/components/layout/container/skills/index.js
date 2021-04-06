import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SkillContainer(props) {
    const [category] = useState(props.category);

    return (
        <div className="w-9/12 sm:w-1/3 md:w-72 my-1 mr-4 sm:mr-6 px-4 py-5 flex-shrink-0 bg-gray-900 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-2">{category}</h2>
            <div className="flex flex-col">
                {props.children}
            </div>
        </div>
    );
};