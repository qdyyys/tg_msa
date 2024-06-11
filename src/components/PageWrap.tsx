import { AiFillHome } from "react-icons/ai";
import { IoCashOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
const modelImgUrl = "/images/image1.jpg";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";
import Deposit from "./Deposit";
import Transactions from "./Transactions";
import { useState, useEffect } from "react";

const PageWrap = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="max-w-xl h-screen flex flex-col bg-white">
      <div className="bg-tg-theme-bg-color text-tg-theme-text-color w-full h-24 flex-none drop-shadow-headShadow overflow-y-hidden overflow-x-auto">
        <ul className="flex flex-row items-center gap-14 justify-center h-full overflow-auto">
          {[...Array(5)].map((_, index) => (
            <li
              key={index}
              className="flex flex-col items-center font-SFProRounded600"
            >
              <img
                src={modelImgUrl}
                alt=""
                className="rounded-full max-w-12 cursor-pointer active:scale-95 transition duration-150"
              />
              <p className="text-md text-nowrap">Модель {index + 1}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="min-h-11 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>

      <div className="bg-navColor w-full h-24 flex-none shadow-navShadow">
        <nav className="h-full">
          <ul className="flex justify-center gap-11 items-center h-full">
            <Link to="/" onClick={() => setActivePath("/")}>
              <li className="cursor-pointer active:scale-75 transition duration-200">
                <AiFillHome
                  className={`text-3xl transition duration-300 ${
                    activePath === "/"
                      ? "text-activeItem"
                      : "text-defaultNavIcon"
                  }`}
                />
              </li>
            </Link>

            <Link to="/deposit" onClick={() => setActivePath("/deposit")}>
              <li className="cursor-pointer active:scale-75 transition duration-200">
                <IoCashOutline
                  className={`text-3xl transition duration-300 ${
                    activePath === "/deposit"
                      ? "text-activeItem"
                      : "text-defaultNavIcon"
                  }`}
                />
              </li>
            </Link>

            <Link
              to="/transactions"
              onClick={() => setActivePath("/transactions")}
            >
              <li className="cursor-pointer active:scale-75 transition duration-200">
                <GrTransaction
                  className={`text-3xl transition duration-300 ${
                    activePath === "/transactions"
                      ? "text-activeItem"
                      : "text-defaultNavIcon"
                  }`}
                />
              </li>
            </Link>

            <Link to="/profile" onClick={() => setActivePath("/profile")}>
              <li className="cursor-pointer active:scale-75 transition duration-200">
                <CgProfile
                  className={`text-3xl transition duration-300 ${
                    activePath === "/profile"
                      ? "text-activeItem"
                      : "text-defaultNavIcon"
                  }`}
                />
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PageWrap;
