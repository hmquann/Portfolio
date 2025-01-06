import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">About Me</h1>
            <div className="flex flex-wrap ">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-lg" src={aboutImg} alt="" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 ">
                   <div className="flex lg:justify-start justify-center">
                   <div className="py-6 max-w-xl my-2">{ABOUT_TEXT}</div>
                   </div>
                </div>
            </div>
        </div>
  )
}

export default About