import { IoMdTime } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";

const Transactions = () => {
  return (
    <div className="overflow-auto h-full pb-16">
      <div className="font-SFProDisplay500">
        <h2 className="text-3xl text-center my-5">Заказы</h2>
        <div className="flex flex-col items-center px-4 gap-5">
          <div className="w-full animate-showOp">
            <div className="rounded-xl h-36 drop-shadow-contOp bg-white py-3 px-4 flex gap-8 h-max pb-14">
              <div className="text-sm flex flex-col gap-">
                <div className="flex items-center justify-between text-paid">
                  <h3>Оплачено</h3>
                  <IoMdTime />
                </div>
                <h3>
                  Наименование <br />
                  услуги
                </h3>
                <p className="text-xs text-lightGray font-SFProDisplay400">
                  Модель
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3>12.04.23</h3>
                  <h3 className="text-xs text-lightGray font-SFProDisplay400">
                    At 8:45 AM
                  </h3>
                </div>
                <p>300 ₽</p>
              </div>

              <div className="mt-5 ml-5 cursor-pointer active:scale-95 transition duration-150 select-none">
                <span className="border py-1 px-4 rounded-md">Details</span>
              </div>
            </div>
          </div>

          <div className="w-full animate-showOp">
            <div className="rounded-xl h-36 drop-shadow-contOp bg-white py-3 px-4 flex gap-8 h-max pb-14">
              <div className="text-sm flex flex-col gap-">
                <div className="flex items-center justify-between text-paid">
                  <h3>Оплачено</h3>
                  <IoMdTime />
                </div>
                <h3>
                  Наименование <br />
                  услуги
                </h3>
                <p className="text-xs text-lightGray font-SFProDisplay400">
                  Модель
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3>12.04.23</h3>
                  <h3 className="text-xs text-lightGray font-SFProDisplay400">
                    At 8:45 AM
                  </h3>
                </div>
                <p>300 ₽</p>
              </div>

              <div className="mt-5 ml-5 cursor-pointer active:scale-95 transition duration-150 select-none">
                <span className="border py-1 px-4 rounded-md">Details</span>
              </div>
            </div>
          </div>

          <div className="w-full animate-showOp">
            <div className="rounded-xl h-36 drop-shadow-contOp bg-white py-3 px-4 flex gap-8 h-max pb-14">
              <div className="text-sm flex flex-col gap-">
                <div className="flex items-center justify-between text-success">
                  <h3>Выполнено</h3>
                  <CiCircleCheck />
                </div>
                <h3>
                  Наименование <br />
                  услуги
                </h3>
                <p className="text-xs text-lightGray font-SFProDisplay400">
                  Модель
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3>12.04.23</h3>
                  <h3 className="text-xs text-lightGray font-SFProDisplay400">
                    At 8:45 AM
                  </h3>
                </div>
                <p>300 ₽</p>
              </div>

              <div className="mt-5 ml-5 cursor-pointer active:scale-95 transition duration-150 select-none">
                <span className="border py-1 px-4 rounded-md">Details</span>
              </div>
            </div>
          </div>

          <div className="w-full animate-showOp">
            <div className="rounded-xl h-36 drop-shadow-contOp bg-white py-3 px-4 flex gap-8 h-max pb-14">
              <div className="text-sm flex flex-col gap-">
                <div className="flex items-center justify-between text-success">
                  <h3>Выполнено</h3>
                  <CiCircleCheck />
                </div>
                <h3>
                  Наименование <br />
                  услуги
                </h3>
                <p className="text-xs text-lightGray font-SFProDisplay400">
                  Модель
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3>12.04.23</h3>
                  <h3 className="text-xs text-lightGray font-SFProDisplay400">
                    At 8:45 AM
                  </h3>
                </div>
                <p>300 ₽</p>
              </div>

              <div className="mt-5 ml-5 cursor-pointer active:scale-95 transition duration-150 select-none">
                <span className="border py-1 px-4 rounded-md">Details</span>
              </div>
            </div>
          </div>

          <div className="w-full animate-showOp">
            <div className="rounded-xl h-36 drop-shadow-contOp bg-white py-3 px-4 flex gap-8 h-max pb-14">
              <div className="text-sm flex flex-col gap-">
                <div className="flex items-center justify-between text-success">
                  <h3>Выполнено</h3>
                  <CiCircleCheck />
                </div>
                <h3>
                  Наименование <br />
                  услуги
                </h3>
                <p className="text-xs text-lightGray font-SFProDisplay400">
                  Модель
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3>12.04.23</h3>
                  <h3 className="text-xs text-lightGray font-SFProDisplay400">
                    At 8:45 AM
                  </h3>
                </div>
                <p>300 ₽</p>
              </div>

              <div className="mt-5 ml-5 cursor-pointer active:scale-95 transition duration-150 select-none">
                <span className="border py-1 px-4 rounded-md">Details</span>
              </div>
            </div>
          </div>

          <div className="w-full animate-showOp">
            <div className="rounded-xl h-36 drop-shadow-contOp bg-white py-3 px-4 flex gap-8 h-max pb-14">
              <div className="text-sm flex flex-col gap-">
                <div className="flex items-center justify-between text-success">
                  <h3>Выполнено</h3>
                  <CiCircleCheck />
                </div>
                <h3>
                  Наименование <br />
                  услуги
                </h3>
                <p className="text-xs text-lightGray font-SFProDisplay400">
                  Модель
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3>12.04.23</h3>
                  <h3 className="text-xs text-lightGray font-SFProDisplay400">
                    At 8:45 AM
                  </h3>
                </div>
                <p>300 ₽</p>
              </div>

              <div className="mt-5 ml-5 cursor-pointer active:scale-95 transition duration-150 select-none">
                <span className="border py-1 px-4 rounded-md">Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Transactions;
