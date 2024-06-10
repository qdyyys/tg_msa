import { AiFillHome } from "react-icons/ai";
import { IoCashOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import ModelImg from "../../public/images/image 1.jpg";

import Transactions from "./Transactions";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";
import Deposit from "./Deposit";

const PageWrap = () => {
  return (
    <BrowserRouter>
      <div className="max-w-xl h-screen flex flex-col bg-white">
        <div className="bg-headColor w-full h-24 flex-none drop-shadow-headShadow overflow-y-hidden overflow-x-auto">
          <ul className="flex flex-row items-center gap-14 justify-center h-full overflow-auto">
            <li className="flex flex-col items-center font-SFProRounded600">
              <img
                src={ModelImg}
                alt=""
                className="rounded-full max-w-12 cursor-pointer active:scale-95 transition duration-150"
              />
              <p className="text-md text-nowrap">Модель 1</p>
            </li>
            <li className="flex flex-col items-center font-SFProRounded600">
              <img
                src={ModelImg}
                alt=""
                className="rounded-full max-w-12 cursor-pointer active:scale-95 transition duration-150"
              />
              <p className="text-md text-nowrap">Модель 1</p>
            </li>
            <li className="flex flex-col items-center font-SFProRounded600">
              <img
                src={ModelImg}
                alt=""
                className="rounded-full max-w-12 cursor-pointer active:scale-95 transition duration-150"
              />
              <p className="text-md text-nowrap">Модель 1</p>
            </li>
            <li className="flex flex-col items-center font-SFProRounded600">
              <img
                src={ModelImg}
                alt=""
                className="rounded-full max-w-12 cursor-pointer active:scale-95 transition duration-150"
              />
              <p className="text-md text-nowrap">Модель 1</p>
            </li>
            <li className="flex flex-col items-center font-SFProRounded600">
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        <div className="bg-navColor w-full h-24 flex-none shadow-navShadow">
          <nav className="h-full">
            <ul className="flex justify-center gap-11 items-center h-full">
              <Link to="/">
                <li className="cursor-pointer active:scale-75 transition duration-200">
                  <AiFillHome className="text-3xl text-defaultNavIcon" />
                </li>
              </Link>

              <Link to="/deposit">
                <li className="cursor-pointer active:scale-75 transition duration-200">
                  <IoCashOutline className="text-3xl text-defaultNavIcon" />
                </li>
              </Link>

              <Link to="/transactions">
                <li className="cursor-pointer active:scale-75 transition duration-200">
                  <GrTransaction className="text-3xl text-defaultNavIcon" />
                </li>
              </Link>

              <Link to="/profile">
                <li className="cursor-pointer active:scale-75 transition duration-200">
                  <CgProfile className="text-3xl text-defaultNavIcon" />
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default PageWrap;
