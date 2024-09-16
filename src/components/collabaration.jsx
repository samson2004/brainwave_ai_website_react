import  check  from "brainwave/src/assets/check.svg";
import { collabApps, collabContent, collabText } from "../constants"
import ForSection from "./section"
import Button from "./button";
import { brainwaveSymbol } from "../assets";
import {LeftCurve,RightCurve} from './design/Collaboration'
const Collabaration = () => {
  return (
    <ForSection crosses>
        <div className="container lg:flex">
            <div className="max-w-[25rem]">
                <h2 className="h2 mb-4 md:mb:8">AI Chat App for Seamless collabaration</h2>
                <ul className="max-w-[30rem] mb-10 md:mb-14">
                    {collabContent.map((item)=>(
                        <li className="mb-2 py-3 " key={item.id}>
                            <div className="flex items-center">
                                <img src={check} alt="check" width={24} height={24} />
                                <h6 className="body-2 ml-5">{item.title}</h6>
                                
                            </div>
                            {item.text && (<p className="mt-5 text-n-4 body-2">{item.text}</p>)}
                        </li>
                    ))}
                </ul>
                <Button>Try it Now</Button>
            </div>
            <div className="lg:ml-auto xl:w-[38rem]">
                <p className="body-2 mb-4 text-n-4  md:mb-16 lg:mb-32  lg:w-[22rem] mt-4">{collabText}</p>
                <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full
                 -translate-x-1/2 scale-75 md:scale-100">
                    <div className="flex w-60 aspect-square border border-n-6 m-auto rounded-full">
                        <div className=" w-[6rem] m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full aspect-square"><img src={brainwaveSymbol} alt="" width={48} height={48} /></div>
                        </div>
                    </div>
                    <ul className="">{collabApps.map((app,index)=>(
                    <li key={index} className={`absolute top-0 left-1/2 h-1/2 -ml-[0.5rem] origin-bottom rotate-${index*45}`}>
                        <div className={`relative -top-[1.6rem] flex items-center justify-center w-[3.2rem]  h-[3.2rem] bg-n-7 border border-n-1/15  rounded-xl -rotate-${index*45}`}>
                            <img src={app.icon} alt="" width={app.width} height={app.height}/>
                        </div>
                    </li>
                 ))}</ul>
                 <LeftCurve />
                 <RightCurve />
                 </div>
                 
                 
            </div>
        </div>
    </ForSection>
  )
}

export default Collabaration