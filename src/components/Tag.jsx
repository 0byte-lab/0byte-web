import React from 'react'
import { Button } from './ui/button'

const Tag = ({ text, className }) => {
  return (
    <Button variant={"outline"} className={`rounded-full cursor-default ${className}`}>{text}</Button>
  )
}

export default Tag