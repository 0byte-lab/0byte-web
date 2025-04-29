import React from 'react'

const Subtitle = ({ text, className }) => {
  return (
    <h2 className={`${className} w-fit bg-black/60`}>{text}</h2>
  )
}

export default Subtitle