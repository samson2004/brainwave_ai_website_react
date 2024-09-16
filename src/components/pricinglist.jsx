import { check } from "../assets";
import { pricing } from "../constants/index";
import Button from "./button";

const Pricinglist = () => {
  const switchheadingcolor = (id) => {
    switch (id) {
      case 0:
        return "text-amber-300";

      case 1:
        return "text-purple-400";

      case 2:
        return "text-rose-400";

      default:
        return "text-white";
    }
  };
  return (
    <div className="flex gap-[2rem] max-lg:flex-wrap lg:mx-[20rem] mt-[4rem] xl:h-[30rem] lg:h-[30rem] min-h-[50rem] md:min-w-[25rem] sm:min-w-[20rem] sm:mx-[5rem]">
      {pricing.map((item, index) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-5 rounded-[2rem] lg:w-auto even:py-14  odd:py-8                                                                             "
        >
          <h4 className={`h4 mb-8  ${switchheadingcolor(index)}`}>
            {item.title}
          </h4>
          <p className="body-2 text-n-1/50 mb-8">{item.description}</p>
          <div
            className={`font-semibold flex align-middle items-center ${
              index == 2 ? "h-[6rem]" : ""
            } `}
          >
            <div className="h4 ">{index != 2 ? "$" : ""}</div>
            <div className="h1">{item.price}</div>
          </div>
          <Button
            href="#getstarted"
            white={!!item.price}
            className={`mx-1 text-center w-full mt-8`}
          >
            get Started
          </Button>
          <ul className=" body-2  my-8 ">
            {item.features.map((feature) => (
              <li
                key={index}
                className=" flex  items-start p-4  border-t border-n-3 text-n-3 "
              >
                <img src={check} alt="check" className="pr-4 " />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Pricinglist;
