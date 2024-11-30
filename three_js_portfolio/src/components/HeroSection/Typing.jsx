import React from 'react'
import {TypeAnimation} from 'react-type-animation';

const Typing = () => {
  return (
    <div>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Frontend Developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Backend Developer",
        1000,
        "Machine Learning Ethisiast",
        1000,
        "Researcher",
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={0}
    />
 
    </div>
  )
}

export default Typing