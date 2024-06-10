import { useEffect, useState } from "react";

const Profile = () => {
  const [userName, setInitData] = useState<string | null>(null);

  useEffect(() => {
    const tg = (window as any).tg;
    if (tg) {
      console.log("Telegram Webapp: ", tg);
      setInitData(tg.initData);
      console.log(tg.initData);
    } else {
      console.log("Telegram WebApp is not available");
    }
  }, []);

  return (
    <div className="h-full px-5">
      <h2 className="font-SFProRounded600 text-3xl text-center my-5">
        {`Мой профиль ${userName}`}
      </h2>
      <div className="bg-white w-full drop-shadow-contOp min-h-16 rounded-xl px-5 py-4">
        asdsad
      </div>
    </div>
  );
};

export default Profile;
