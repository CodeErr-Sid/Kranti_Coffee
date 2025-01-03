import { Button } from '@material-tailwind/react'
import React from 'react'

const CallToAction = ({ content, bgColor, fontColor, className = "" }) => {
  return (
    <Button variant='outlined' className={`w-fit text-accent text-xs lg:text-xl bg-${bgColor} md:min-w-[367px] md:w-fit  font-tanAegan font-normal p-4 ${className}`}>
      {content}
    </Button>
  )
}

export default CallToAction