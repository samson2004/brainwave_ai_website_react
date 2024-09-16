import brackets from "../assets/svg/Brackets";

const Tagline = ({ tagtext, className }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{tagtext}</div>
      {brackets("right")}
    </div>
  );
};

export default Tagline;
