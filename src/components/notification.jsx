import { notificationImages } from "../constants";
// import Notification1 from "../assets/notification/image-1.png";
import { notification1 } from "../assets";

const Notification = ({ classname }) => {
  return (
    <div
      className={`${
        classname || ""
      } hidden absolute -right-[5.2rem] top-[14rem] p-6 pr-6 bg-n-9/45 backdrop-blur-sm
                         border border-n-1/10 rounded-2xl xl:flex w-[18rem]`}
    >
      <img
        src={notification1}
        alt=""
        width={62}
        height={62}
        className="rounded-lg"
      />
      <div className="flex-col ml-4">
        <div className="flex-1 mb-2">
          <h6 className=" font-semibold jusitfy-between">Code generation</h6>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((image, index) => (
              <li
                key={index}
                className=" flex rounded-full overflow-hidden w-7 h-7 border-2 border-n-12"
              >
                <img
                  src={image}
                  alt={image}
                  width={20}
                  height={20}
                  className="w-full"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-n-3 body-2  absolute bottom-4 right-4">1m ago</div>
    </div>
  );
};

export default Notification;
