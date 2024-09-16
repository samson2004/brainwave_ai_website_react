import { socials } from "../constants";
import ForSection from "./section";

const Footer = () => {
  return (
    <ForSection crosses className={`!px-0 !py-0`}>
      <div
        className={`container flex sm:justify-between justfiy-center items-center gap-10 max-sm:flex-col`}
      >
        <p className="text-n-4 text-sm">
          © {new Date().getFullYear()} All rights reserverd.
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              href="#"
              key={item.id}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-n-5 bg-n-7"
            >
              <img src={item.iconUrl} alt="title" width={16} height={16} />
            </a>
          ))}
        </ul>
      </div>
    </ForSection>
  );
};

export default Footer;
