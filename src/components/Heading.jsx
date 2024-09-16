import Tagline from "./tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div className={`${className || "max-w-[50rem] mx-auto mb-12 lg:mb-20"}`}>
      {tag && <Tagline tagtext={tag} className="mb-4 md:justify-center" />}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="text-n-4 body-2 mt-4 ml-1">{text}</p>}
    </div>
  );
};

export default Heading;
