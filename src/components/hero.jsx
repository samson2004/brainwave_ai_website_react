import ForSection from "./section";
import curve from "../assets/hero/curve.png";
import robot from "../assets/hero/robot.jpg";
import Button from "./button";
import heroBackground from "../assets/hero/hero-background.jpg";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants/index";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./design/generating";
import Companylogo from "../components/companylogo";
import Notification from "./notification";
const Hero = () => {
  const parallaxref = useRef(null);
  return (
    <>
      <ForSection
        classname="pt-[12rem] -mt-[4.7rem] "
        crosses
        crossesoffset="lg:translate-y-[5.25rem]"
        custompadding
        id="hero"
      >
        <div className="container relative " ref={parallaxref}>
          <div
            className="relative z-1 max-w-[62rem] mx-auto text-center 
          mb-[4rem] md:mb-20 lg:mb-[6rem] "
          >
            <h1 className="h1 mt-16 mb-6">
              Explore the Possiblities of&nbsp;AI&nbsp;Chatting with{" "}
              <span className="inline-block relative">
                Brainwave{" "}
                <img
                  src={curve}
                  alt="curve"
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Unleash the power of AI within Brainwave. Upgrade your
              productivity with Brainwave, the open AI chat app.
            </p>
            <Button href="#getstarted" white className={`mx-1 text-center`}>
              get Started
            </Button>
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className=" relative bg-n-8 rounded-[1rem]">
                <div className=" bg-n-10 rounded-[0.9rem]">
                  <div className="aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] rounded-[0.9rem] overflow-hidden">
                    <img
                      src={robot}
                      alt="hero"
                      width={1024}
                      height={500}
                      className="lg:-translate-y-[25%] md:-translate-y-[25%]"
                    />
                    <Generating classname="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"></Generating>
                    <ScrollParallax isAbsolutelyPositioned>
                      <ul
                        className="hidden absolute -left-[5.2rem] bottom-[7.5rem] px-1 py-1 bg-n-9/45 backdrop-blur-sm
                         border border-n-1/10 rounded-2xl xl:flex"
                      >
                        {heroIcons.map((icon, index) => (
                          <li className="py-4 px-5" key={index}>
                            <img src={icon} alt={icon} width={24} height={24} />
                          </li>
                        ))}
                      </ul>
                    </ScrollParallax>
                    <ScrollParallax isAbsolutelyPositioned>
                      <Notification className={``}></Notification>
                    </ScrollParallax>
                  </div>
                </div>
              </div>
              <Gradient />
            </div>
            <div className="absolute w-[100%]  translate-y-20  sm:-top-[60%] sm:w-[100%] sm:translate-y-15 md:-top-[90%] md:-w-[138%]  lg:-top-[100%]  ">
              {" "}
              <img
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="background"
              />
            </div>
            <BackgroundCircles />
          </div>
        </div>
        <BottomLine></BottomLine>
        <Companylogo className="hidden relative z-10 mt-20 lg:block  mb-10" />
      </ForSection>
    </>
  );
};

export default Hero;
