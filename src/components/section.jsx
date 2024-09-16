import SectionSvg from "../assets/svg/SectionSvg";

const ForSection = ({
  classname,
  id,
  crosses,
  crossesoffset,
  custompadding,
  children,
}) => {
  return (
    <div
      id={id}
      className={`relative 
        ${custompadding || "py-10  lg:py-16 xl:py-20"}
         ${crosses ? "lg:py-32 xl:py-20" : ""}
         ${classname || ""}  `}
    >
      {children}

      <div
        className="hidden absolute top-0 w-0.25 left-5 h-full bg-stroke-1 pointer-events-none
      md:block lg:left-7.5 xl:left-10"
      ></div>
      <div
        className="hidden absolute top-0 w-0.25 right-5 h-full bg-stroke-1 pointer-events-none
      md:block lg:right-7.5 xl:right-10"
      ></div>
      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 
                ${
                  crossesoffset && crossesoffset
                } pointer-events-none lg:block xl:left-10 right-10`}
          >
            <SectionSvg crossesOffset={crossesoffset} />
          </div>
        </>
      )}
    </div>
  );
};

export default ForSection;
