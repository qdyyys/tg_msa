import { useEffect, useState } from "react";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
  is_premium: boolean;
  allows_write_to_pm: boolean;
}

const Profile = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const tg = (window as any).tg;
    if (tg) {
      console.log("Telegram Webapp: ", tg);
      const urlParams = new URLSearchParams(tg.initData);
      const userString = urlParams.get("user");
      if (userString) {
        const user = JSON.parse(decodeURIComponent(userString));
        setUserData(user);
        setUserName(user.first_name);
      }
    } else {
      console.log("Telegram WebApp is not available");
    }
  }, []);

  return (
    <div className="h-full px-5">
      <h2 className="font-SFProRounded600 text-3xl text-center my-5">
        {`Мой профиль ${userName}`}
      </h2>
      {userData && (
        <div className="bg-white w-full drop-shadow-contOp min-h-16 rounded-xl px-5 py-4">
          <p>ID: {userData.id}</p>
          <p>Имя: {userData.first_name}</p>
          <p>Username: {userData.username}</p>
          <p>Язык: {userData.language_code}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
