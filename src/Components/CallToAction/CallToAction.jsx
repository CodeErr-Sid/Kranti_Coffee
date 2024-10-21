import { Button } from '@material-tailwind/react'
import React from 'react'

const CallToAction = ({ content, bgColor, fontColor }) => {
  return (
    <Button variant='outlined' className={`w-full md:w-1/2 bg-${bgColor} text-${fontColor} font-tanAegan font-normal py-4`}>
      {content}
    </Button>
  )
}

export default CallToAction