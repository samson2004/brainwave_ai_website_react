import ForSection from "./section";
import { check2, gradient, grid, loading1 } from "../assets";
import Heading from "./Heading";
import { roadmap } from "../constants";
import Tagline from "./tagline";
import Button from "../components/button";

const Roadmap = () => {
  return (
    <ForSection classname={`hidden lg:block xl:block`} id="roadmap">
      <div className="container md:pb-10 flex md:justify-center">
        <Heading
          tag={`READY TO GET STARTED`}
          title="What we’re working on"
          className={`h2`}
        />
      </div>
      <div className="mx-[20rem]">
        <div className={`grid grid-cols-2  gap-6 `}>
          {roadmap.map((element) => {
            const status = element.status == "done" ? "Done" : "Progress";
            return (
              <div
                key={element.id}
                className={`relative h-[50rem] border p-0.25 ${
                  element.id == 0 ? "bg-conic-gradient" : "border-n-6"
                } rounded-[3rem] even:translate-y-[6rem]  `}
              >
                <div className="bg-n-8 h-full rounded-[3rem] ">
                  <img src={grid} alt="grid" className="absolute" />
                  <div className="">
                    <div className="flex mx-10 justify-between ">
                      <Tagline tagtext={element.date} className={`mt-[5rem]`} />
                      <div className="bg-white rounded-md px-2 py-1 flex flex-row  mt-[5rem]">
                        <img
                          src={element.status == "done" ? check2 : loading1}
                          alt="done/loading"
                        />
                        <p className="text-black text-xs">{status}</p>
                      </div>
                    </div>
                    <img
                      src={element.imageUrl}
                      alt="image for roadmap"
                      className="mt-[5rem]"
                    />
                    <h2 className="h4 m-6 font-code">{element.title}</h2>
                    <p className="body-2 mx-6 mb-6 text-n-4">{element.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex  justify-center">
          <Button className={`mt-[10rem] `}>
            <p className="font-semibold text-xs">our Roadmap</p>
          </Button>
        </div>
        <div className="mix-blend-color-dodge pointer-events-none opacity-60 hidden xl:block md:block">
          <img
            src={gradient}
            alt=""
            className="absolute top-0 -z-99 -left-[45rem] scale-75"
          />
        </div>
      </div>
    </ForSection>
  );
};

export default Roadmap;
