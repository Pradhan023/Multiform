import { FC } from "react"
import Getstarted from "./sections/Getstarted"
import InterSteps from "./sections/InterSteps"
import Form from "./sections/Form"


const Hero: FC = () => {
  return (
    <div className="container mx-auto lg:px-10 px-4 py-6">
      <h1 className="text-blue-700 text-2xl font-bold text-center">Interview Ready</h1>
      <Getstarted/>
      <InterSteps/>
      <Form/>
    </div>
  )
}

export default Hero