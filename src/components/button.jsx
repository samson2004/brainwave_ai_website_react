import Buttonsvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const classspan = `relative z-10`;
  const renderbutton = () => (
    <button className={classes} onClick={onClick}>
      <span className={classspan}>{children}</span>
      {Buttonsvg(white)}
    </button>
  );
  const renderlink = () => (
    <a href={href} className={classes}>
      <span className={classspan}>{children}</span>
      {Buttonsvg(white)}
    </a>
  );

  return href ? renderlink() : renderbutton();
};

export default Button;
