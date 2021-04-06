import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function SkillBar(props) {
  
  /** These are different properties of the skill object */
  const [name] = useState(props.name)
  const [level] = useState(Array(props.level).fill(props.level))
  const [yearsExperience] = useState(props.yearsExperience)

  return (
    <div className="mb-3">

      {/** Name of a skill */}
      <h3 className="text-lg font-medium">{name}</h3>

      <div className="flex w-32">

        {/** Map through skill object and place a blue bar for each level */}
        {level.map((i) => <div className="w-4 h-5 mr-1 rounded-sm bg-blue-600" />)}

        {/** If level is set bellow 5, then place gray bars for the amount of levels missing untill 5 */}
        {(level.length < 5) &&
          Array(5 - level.length).fill(5 - level.length).map((_, i) => <div className="w-4 h-5 mr-1 rounded-sm bg-gray-300" />)}</div>

      {/** If rule for the word year (e.g. 1 year vs 3 years) */}
      <h3 className="text-sm font-medium leading-relaxed">{(yearsExperience > 1) ? `${yearsExperience} years` : `${yearsExperience} year`}</h3>
    </div>
  );
};
