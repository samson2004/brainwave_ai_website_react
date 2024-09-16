import ForSection from "./section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./design/generating";
import { PhotoChatMessage } from "./design/Services";
import { VideoBar, VideoChatMessage } from "./design/Services";
import { Gradient } from "./design/Services";
const Services = () => {
  return (
    <ForSection id="how-to">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />
        <div className="relative ">
          <div
            className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden
                lg:p-20 xl:h-[46rem]"
          >
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5
                    xl:w-auto"
            >
              <img
                src={service1}
                alt="service1"
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4 ">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                    width={24}
                    height={24}
                  >
                    <img src={check} alt="" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating
              classname={`absolute left-4 right-4 w-[42rem] bottom-4 border border-n-1/10 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 `}
            />
          </div>
        </div>
        <div className="relative z-1  grid lg:grid-cols-2 gap-5">
          <div className="relative min-h-[24rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={service2}
                alt="service2"
                className="w-full h-full object-cover z-0"
                width={630}
                height={750}
              />
            </div>
            <div className="absolute  inset-0 flex flex-col   justify-end bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 }">
              <h4 className="h3 mb-3">Photo editing</h4>
              <p className="body-2 text-n-3">
                {`Automatically enhance your photos using our AI app's photo
                  editing feature. Try it now!`}
              </p>
            </div>
            <PhotoChatMessage />
          </div>
          <div className="relative min-h-[24rem] bg-n-7 rounded-3xl overflow-hidden p-4">
            <div className="py-12 px-4 xl:px-8 m-2">
              <h4
                className="h4
               mb-4"
              >
                Video generation
              </h4>
              <p className="body-2 text-n-3 mb-[2rem]">
                The world’s most powerful AI photo and video art generation
                engine. What will you create?
              </p>
              <ul className="flex items-center justify-between">
                {brainwaveServicesIcons.map((item, index) => (
                  <li key={index}>
                    <div
                      className={`flex items-center justify-center  mt-4  bg-n-6 rounded-2xl ${
                        index == 2
                          ? "w-[4rem] h-[4rem] p-0.25 bg-conic-gradient "
                          : ""
                      }`}
                    >
                      <div
                        className={
                          index == 2
                            ? "flex items-center justify-center bg-n-7 rounded-[1rem] w-full h-full"
                            : ""
                        }
                      >
                        <img
                          src={item}
                          alt="brainwaveicons"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" z-1  bg-n-8 rounded-2xl overflow-hidden relative h-[25rem]">
              <img src={service3} alt="" />
              <VideoChatMessage />
              <VideoBar />
            </div>
          </div>
        </div>
        <Gradient />
      </div>
    </ForSection>
  );
};

export default Services;
