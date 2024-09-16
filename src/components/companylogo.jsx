import { companyLogos } from "../constants/index";
const Companylogo = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50 mb-[8rem]">
        Helping people create beautiful content at{" "}
      </h5>
      <ul className="flex items-center justify-center ">
        {companyLogos.map((cl, index) => (
          <img
            className="ml-20 mr-20"
            key={index}
            src={cl}
            alt={cl}
            width={140}
            height={140}
          />
        ))}
      </ul>
    </div>
  );
};

export default Companylogo;
