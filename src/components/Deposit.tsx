import lolzIcon from "../../public/icons/lozl1.svg";
import aaioIcon from "../../public/icons/aaio.svg";
import umoneyIcon from "../../public/icons/umoney.svg";
import cryptomus from "../../public/icons/cryptomus.svg";

const Deposit = () => {
  return (
    <div className="font-SFProRounded600 text-3xl text-center overflow-y-auto h-full overflow-x-hidden">
      <h2 className="my-5">Пополнить баланс</h2>

      <div>
        <ul className="text-xs text-lightGray dep_list flex flex-col gap-2 pb-16">
          <li className="animate-showTrns">
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>

          <li className="animate-showTrnsBack">
            <img src={lolzIcon} alt="" />
            LolzTeam
          </li>

          <li className="animate-showTrns">
            <img src={aaioIcon} alt="" />
            AAIO
          </li>

          <li className="animate-showTrnsBack">
            <img src={cryptomus} alt="" />
            Cryptomus
          </li>

          <li className="animate-showTrns">
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>

          <li className="animate-showTrnsBack">
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>

          <li className="animate-showTrns">
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>

          <li className="animate-showTrnsBack">
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>

          <li className="animate-showTrns">
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>

          <li className="animate-showTrnsBack">
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>

          <li className="animate-showTrns">
            <img src={umoneyIcon} alt="" />
            Юmoney
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Deposit;
