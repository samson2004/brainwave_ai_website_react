import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import ForSection from "./section";
import { RightLine, LeftLine } from "./design/Pricing";
import Pricinglist from "./pricinglist";
const Pricing = () => {
  return (
    <ForSection id="pricing">
      <div className="relative container z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="smallsphere"
            className="z-1 relative "
            width={255}
            height={255}
          />

          <div className="absolute pointer-events-none w-[60rem] ">
            <img
              src={stars}
              alt="stars"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>
        <Heading
          className={`relative flex flex-col items-center justify-center`}
          title={`Pay once, use forever`}
          tag={`GET STARTED WITH BRAINWAVE`}
        />
      </div>
      <div className="relative">
        <Pricinglist></Pricinglist>
        <RightLine />
        <LeftLine />
      </div>
      <div className="flex items-center justify-center mt-8">
        <p className="body-2 font-semibold text-xs  pb-0.5 px-0.5  border-b border-n-1">
          SEE THE FULL DETAILS
        </p>
      </div>
    </ForSection>
  );
};

export default Pricing;
