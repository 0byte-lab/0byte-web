import React from 'react'

const Title = ({ text, className }) => {
  return (
    <h1 className={`lg:text-6xl sm:text-5xl tracking-tight text-4xl font-bold text-center ${className}`}>{text}</h1>
  )
}

export default Title