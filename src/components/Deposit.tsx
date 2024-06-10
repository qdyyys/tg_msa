import lolzIcon from "../../public/icons/lozl1.svg";
import aaioIcon from "../../public/icons/aaio.svg";
import umoneyIcon from "../../public/icons/umoney.svg";
import cryptomus from "../../public/icons/cryptomus.svg";

const Deposit = () => {
  return (
    <div className="font-SFProRounded600 text-3xl text-center mt-5 overflow-auto h-full">
      <h2 className="my-5">Пополнить баланс</h2>
      <div>
        <ul className="text-xs text-lightGray dep_list flex flex-col gap-2">
          <li>
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>
          <li>
            <img src={lolzIcon} alt="" />
            LolzTeam
          </li>
          <li>
            <img src={aaioIcon} alt="" />
            AAIO
          </li>
          <li>
            <img src={cryptomus} alt="" />
            Cryptomus
          </li>
          <li>
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>
          <li>
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>
          <li>
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>
          <li>
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>
          <li>
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>
          <li>
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>
          <li>
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Deposit;
