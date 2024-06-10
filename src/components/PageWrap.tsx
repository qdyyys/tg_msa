import homeIco from "../../public/home.png";
import profileIco from "../../public/profile.png";
import rdaIco from "../../public/rda.png";
import groupIco from "../../public/group.png";
import Deposit from "./Deposit";

const PageWrap = () => {
  return (
    <div className="max-w-md h-screen flex flex-col">
      <div className="bg-headColor w-full h-24 flex-none drop-shadow-headShadow"></div>

      <div className="min-h-11 flex-1">
        <Deposit />
      </div>

      <div className="bg-navColor w-full h-24 flex-none shadow-navShadow">
        <nav className="h-full">
          <ul className="flex justify-center gap-11 items-center h-full">
            <li>
              <img src={homeIco} alt="" />
            </li>
            <li>
              <img src={groupIco} alt="" />
            </li>
            <li>
              <img src={rdaIco} alt="" />
            </li>
            <li>
              <img src={profileIco} alt="" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default PageWrap;
