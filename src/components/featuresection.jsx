import ForSection from "./section";
import { benefits } from "../constants/index";
import Heading from "./Heading";
import card1 from "../assets/benefits/card-1.svg";
import card2 from "../assets/benefits/card-2.svg";
import card3 from "../assets/benefits/card-3.svg";
import card4 from "../assets/benefits/card-4.svg";
import card5 from "../assets/benefits/card-5.svg";
import card6 from "../assets/benefits/card-6.svg";
import { GradientLight } from "./design/Benefits";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
const Benefits = () => {
  var bgimg = [card1, card2, card3, card4, card5, card6];
  return (
    <ForSection id="features">
      <div className="realtive z-2 container">
        <Heading
          className={`md:max-w-full lg:max-w-full mb-10 lg:text-center md:text-center `}
          title="Chat Smarter , Not Harder with&nbsp;Brainwave&nbsp;"
        />
        <div className="flex flex-wrap gap-15 mb-10 mt-40 ">
          {benefits.map((item, index) => (
            <div
              key={item.id}
              className="block relative bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            >
              <div
                className="relative flex flex-col z-2 min-h-[24rem] p-[3.4rem] pointer-events-none"
                style={{
                  backgroundImage: `url(${bgimg[index]})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="mb-6 body-2 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto ">
                  <img src={item.iconUrl} alt="" width={48} height={48} />

                  <p className="ml-auto font-code text-xs font-bold text-n-1">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8 "
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 -translate-x-3 -translate-y-6">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt="hover"
                      height={300}
                      width={380}
                      className="w-full h-full object-cover "
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </ForSection>
  );
};

export default Benefits;
