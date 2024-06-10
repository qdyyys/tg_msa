import Deposit from "./Deposit";
import { AiFillHome } from "react-icons/ai";
import { IoCashOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import ModelImg from "../../public/images/image 1.jpg";
import Profile from "./Profile";

const PageWrap = () => {
  return (
    <div className="max-w-xl h-screen flex flex-col">
      <div className="bg-headColor w-full h-24 flex-none drop-shadow-headShadow overflow-y-hidden overflow-x-auto">
        <ul className="flex flex-row items-center gap-14 justify-center h-full overflow-auto">
          <li className="flex flex-col items-center">
            <img
              src={ModelImg}
              alt=""
              className="rounded-full max-w-12 cursor-pointer active:scale-95 transition duration-150"
            />
            <p className="text-md text-nowrap">Модель 1</p>
          </li>
          <li className="flex flex-col items-center">
            <img
              src={ModelImg}
              alt=""
              className="rounded-full max-w-12 cursor-pointer active:scale-95 transition duration-150"
            />
            <p className="text-md text-nowrap">Модель 1</p>
          </li>
          <li className="flex flex-col items-center">
            <img
              src={ModelImg}
              alt=""
              className="rounded-full max-w-12 cursor-pointer active:scale-95 transition duration-150"
            />
            <p className="text-md text-nowrap">Модель 1</p>
          </li>
          <li className="flex flex-col items-center">
            <img
              src={ModelImg}
              alt=""
              className="rounded-full max-w-12 cursor-pointer active:scale-95 transition duration-150"
            />
            <p className="text-md text-nowrap">Модель 1</p>
          </li>
          <li className="flex flex-col items-center">
            <img
              src={ModelImg}
              alt=""
              className="rounded-full max-w-12 cursor-pointer active:scale-95 transition duration-150"
            />
            <p className="text-md text-nowrap">Модель 1</p>
          </li>
        </ul>
      </div>

      <div className="min-h-11 flex-1">
        <Deposit />
      </div>

      <div className="bg-navColor w-full h-24 flex-none shadow-navShadow">
        <nav className="h-full">
          <ul className="flex justify-center gap-11 items-center h-full">
            <li>
              <AiFillHome className="text-3xl text-defaultNavIcon" />
            </li>
            <li>
              <IoCashOutline className="text-3xl text-defaultNavIcon" />
            </li>
            <li>
              <GrTransaction className="text-3xl text-defaultNavIcon" />
            </li>
            <li>
              <CgProfile className="text-3xl text-defaultNavIcon" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default PageWrap;
