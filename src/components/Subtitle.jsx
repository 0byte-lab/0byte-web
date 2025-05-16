import React from 'react'

const Subtitle = ({ text, className }) => {
  return (
    <h2 className={`${className} w-fit backdrop-blur-lg`}>{text}</h2>
  )
}

export default Subtitle