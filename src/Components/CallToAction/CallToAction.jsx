import { Button } from '@material-tailwind/react'
import React from 'react'

const CallToAction = ({ content, bgColor, fontColor }) => {
  return (
    <Button variant='outlined' className={`w-full text-accent text-base lg:text-xl bg-${bgColor} md:min-w-[367px] md:w-fit  font-tanAegan font-normal py-6`}>
      {content}
    </Button>
  )
}

export default CallToAction